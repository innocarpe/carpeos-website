#!/usr/bin/env node
/**
 * Deploy a pages artifact and wait without canceling on long queues.
 * GitHub's actions/deploy-pages hard-caps timeout at 10 minutes and cancels
 * in-progress deployments, which leaves this repo 404 when the queue is slow.
 */
import { createRequire } from "node:module";
import process from "node:process";

const require = createRequire(import.meta.url);

const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1];
const token = process.env.GITHUB_TOKEN;
const sha = process.env.GITHUB_SHA;
const runId = process.env.GITHUB_RUN_ID;
const artifactName = process.env.ARTIFACT_NAME || "github-pages";
const maxWaitMs = Number(process.env.MAX_WAIT_MS || 45 * 60 * 1000);
const pollMs = Number(process.env.POLL_MS || 10_000);

if (!owner || !repo || !token || !sha || !runId) {
  console.error("Missing required env (owner/repo/token/sha/runId)");
  process.exit(1);
}

const headers = {
  Accept: "application/vnd.github+json",
  Authorization: `Bearer ${token}`,
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "carpeos-website-pages-deploy",
};

async function gh(path, init = {}) {
  const res = await fetch(`https://api.github.com${path}`, {
    ...init,
    headers: { ...headers, ...(init.headers || {}) },
  });
  const text = await res.text();
  let body = null;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
    body = text;
  }
  if (!res.ok) {
    const msg = typeof body === "object" ? JSON.stringify(body) : String(body);
    throw new Error(`${init.method || "GET"} ${path} -> ${res.status}: ${msg}`);
  }
  return body;
}

async function main() {
  // 1) Locate artifact for this run
  const arts = await gh(`/repos/${owner}/${repo}/actions/runs/${runId}/artifacts?per_page=100`);
  const artifact = (arts.artifacts || []).find((a) => a.name === artifactName && !a.expired);
  if (!artifact) {
    throw new Error(`Artifact "${artifactName}" not found on run ${runId}`);
  }
  console.log(`artifact id=${artifact.id} size=${artifact.size_in_bytes}`);

  // 2) OIDC token for Pages deploy (same audience as deploy-pages)
  // Prefer ACTIONS_ID_TOKEN_REQUEST_* when available.
  const idTokenUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  const idTokenReq = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;
  if (!idTokenUrl || !idTokenReq) {
    throw new Error("ACTIONS_ID_TOKEN_REQUEST_* not available; ensure id-token: write");
  }
  const oidcRes = await fetch(`${idTokenUrl}&audience=github-pages`, {
    headers: { Authorization: `Bearer ${idTokenReq}` },
  });
  if (!oidcRes.ok) {
    throw new Error(`OIDC token request failed: ${oidcRes.status}`);
  }
  const { value: oidcToken } = await oidcRes.json();

  // 3) Create deployment (do not cancel later)
  const created = await gh(`/repos/${owner}/${repo}/pages/deployments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      artifact_id: artifact.id,
      pages_build_version: sha,
      oidc_token: oidcToken,
    }),
  });
  const deploymentId = created?.page_url ? sha : created?.id || sha;
  console.log(`created pages deployment id=${deploymentId}`, JSON.stringify(created));

  // 4) Poll status without canceling
  const started = Date.now();
  let last = "";
  while (Date.now() - started < maxWaitMs) {
    const status = await gh(`/repos/${owner}/${repo}/pages/deployments/${deploymentId}`);
    const state = status?.status || status?.state || JSON.stringify(status);
    if (state !== last) {
      console.log(`status=${state} elapsed=${Math.round((Date.now() - started) / 1000)}s`);
      last = state;
    }
    if (state === "succeed" || state === "success" || state === "deployment_succeed" || state === "deployed") {
      console.log("Pages deployment succeeded");
      console.log(JSON.stringify(status));
      return;
    }
    if (
      state === "deployment_failed" ||
      state === "failed" ||
      state === "failure" ||
      state === "error" ||
      state === "deployment_cancelled" ||
      state === "cancelled"
    ) {
      throw new Error(`Pages deployment failed: ${JSON.stringify(status)}`);
    }
    await new Promise((r) => setTimeout(r, pollMs));
  }
  // Timed out waiting — do NOT cancel. Report failure for CI but leave deployment running.
  throw new Error(`Timed out after ${maxWaitMs}ms waiting for deployment (left running; no cancel)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
