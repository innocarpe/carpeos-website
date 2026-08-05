#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SELF_TEST = process.argv.includes("--self-test");
const EXPECTED_ASSETS = new Map([
  ["assets/carpeos-mark.png", "224ea7f1035862a8d242d56b454d78e704e19155b0369f2ba9985977aa98fdb8"],
  ["assets/readme-hero.jpg", "64641d7fcba58b43ed86aae8bdbb9f7a4906abecdc789667af9ac80d92b87251"],
  ["assets/architecture-flow.svg", "3e3c9d588075e3ebc0e8d2e20d96f1e71e011a0dd7b1989c2caaada994ad7a8e"],
]);
const REQUIRED_FILES = [
  ".nojekyll",
  "CLAIMS.md",
  "LICENSE",
  "PROVENANCE.md",
  "README.md",
  "css/styles.css",
  "docs/index.html",
  "index.html",
  "js/main.js",
  "scripts/validate.mjs",
  ...EXPECTED_ASSETS.keys(),
];
const REQUIRED_LANDING_IDS = ["main-content", "top", "why", "how", "interfaces", "model", "install", "docs"];
const FORBIDDEN_ROOT_FILES = [
  "CNAME",
  ".gitmodules",
  "package.json",
  "package-lock.json",
  "pnpm-lock.yaml",
  "yarn.lock",
  "vercel.json",
  "netlify.toml",
  "vite.config.js",
  "vite.config.ts",
  "next.config.js",
  "astro.config.mjs",
];
const FORBIDDEN_DIRECTORIES = new Set(["node_modules", "dist", "build", ".next", ".vercel"]);
const TEXT_SURFACES = [
  "index.html",
  "docs/index.html",
  "css/styles.css",
  "js/main.js",
  "README.md",
  "PROVENANCE.md",
  "CLAIMS.md",
];
const htmlIdCache = new Map();

function relative(file) {
  return path.relative(ROOT, file).split(path.sep).join("/") || ".";
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

function exactCaseExists(candidate) {
  const resolved = path.resolve(candidate);
  const rel = path.relative(ROOT, resolved);
  if (rel === "" || (!rel.startsWith(`..${path.sep}`) && rel !== ".." && !path.isAbsolute(rel))) {
    let cursor = ROOT;
    if (rel === "") return true;
    for (const segment of rel.split(path.sep)) {
      if (!fs.existsSync(cursor) || !fs.statSync(cursor).isDirectory()) return false;
      const entries = fs.readdirSync(cursor);
      if (!entries.includes(segment)) return false;
      cursor = path.join(cursor, segment);
    }
    return fs.existsSync(cursor);
  }
  return false;
}

function insideDirectory(directory, candidate) {
  const rel = path.relative(path.resolve(directory), path.resolve(candidate));
  return rel === "" || (rel !== ".." && !rel.startsWith(`..${path.sep}`) && !path.isAbsolute(rel));
}

function insideRoot(candidate) {
  return insideDirectory(ROOT, candidate);
}

function isUnsafeResolvedTarget(target, root = ROOT) {
  return fs.lstatSync(target).isSymbolicLink() || !insideDirectory(root, fs.realpathSync(target));
}

function parseAttributes(tagSource, tagName) {
  const attributes = new Map();
  const duplicates = [];
  let cursor = 1 + tagName.length;

  while (cursor < tagSource.length) {
    while (/\s/.test(tagSource[cursor])) cursor += 1;
    if (cursor >= tagSource.length || tagSource[cursor] === ">" || tagSource[cursor] === "/") break;

    const nameStart = cursor;
    while (cursor < tagSource.length && !/[\s=/>]/.test(tagSource[cursor])) cursor += 1;
    const name = tagSource.slice(nameStart, cursor).toLowerCase();
    if (!name) {
      cursor += 1;
      continue;
    }

    while (/\s/.test(tagSource[cursor])) cursor += 1;
    let value = "";
    if (tagSource[cursor] === "=") {
      cursor += 1;
      while (/\s/.test(tagSource[cursor])) cursor += 1;
      const quote = tagSource[cursor];
      if (quote === "\"" || quote === "'") {
        cursor += 1;
        const valueStart = cursor;
        while (cursor < tagSource.length && tagSource[cursor] !== quote) cursor += 1;
        value = tagSource.slice(valueStart, cursor);
        if (tagSource[cursor] === quote) cursor += 1;
      } else {
        const valueStart = cursor;
        while (cursor < tagSource.length && !/[\s>]/.test(tagSource[cursor])) cursor += 1;
        value = tagSource.slice(valueStart, cursor);
      }
    }

    if (attributes.has(name)) duplicates.push(name);
    else attributes.set(name, value);
  }

  return { attributes, duplicates };
}

function parseHtmlSource(source) {
  const ids = new Set();
  const duplicates = [];
  const attributeDuplicates = [];
  const tags = [];
  const lowerSource = source.toLowerCase();
  let cursor = 0;

  while (cursor < source.length) {
    const start = source.indexOf("<", cursor);
    if (start < 0) break;

    if (source.startsWith("<!--", start)) {
      const commentEnd = source.indexOf("-->", start + 4);
      cursor = commentEnd < 0 ? source.length : commentEnd + 3;
      continue;
    }
    if (source[start + 1] === "!" || source[start + 1] === "?" || source[start + 1] === "/") {
      const declarationEnd = source.indexOf(">", start + 2);
      cursor = declarationEnd < 0 ? source.length : declarationEnd + 1;
      continue;
    }
    if (!/[A-Za-z]/.test(source[start + 1] || "")) {
      cursor = start + 1;
      continue;
    }

    let nameEnd = start + 2;
    while (/[A-Za-z0-9:-]/.test(source[nameEnd] || "")) nameEnd += 1;
    const name = source.slice(start + 1, nameEnd).toLowerCase();
    let quote = null;
    let end = nameEnd;
    for (; end < source.length; end += 1) {
      const character = source[end];
      if (quote) {
        if (character === quote) quote = null;
      } else if (character === "\"" || character === "'") {
        quote = character;
      } else if (character === ">") {
        break;
      }
    }
    if (end >= source.length) break;

    const parsed = parseAttributes(source.slice(start, end + 1), name);
    const id = parsed.attributes.get("id");
    if (id) {
      if (ids.has(id)) duplicates.push(id);
      ids.add(id);
    }
    for (const attribute of parsed.duplicates) attributeDuplicates.push({ name, attribute });
    tags.push({ name, attrs: parsed.attributes });
    cursor = end + 1;

    if (name === "script" || name === "style") {
      const closingStart = lowerSource.indexOf(`</${name}`, cursor);
      if (closingStart < 0) {
        cursor = source.length;
      } else {
        const closingEnd = source.indexOf(">", closingStart + name.length + 2);
        cursor = closingEnd < 0 ? source.length : closingEnd + 1;
      }
    }
  }

  return { ids, duplicates, attributeDuplicates, tags };
}

function parseHtml(file) {
  const parsed = parseHtmlSource(fs.readFileSync(file, "utf8"));
  htmlIdCache.set(path.resolve(file), parsed.ids);
  return parsed;
}

function idsFor(file) {
  const resolved = path.resolve(file);
  if (!htmlIdCache.has(resolved)) parseHtml(resolved);
  return htmlIdCache.get(resolved);
}

function classifyReference(value) {
  if (!value) return "empty";
  if (value.startsWith("//") || value.startsWith("/")) return "root";
  if (/^[A-Za-z][A-Za-z0-9+.-]*:/.test(value)) return "external";
  return "local";
}

function resolveLocalReference(fromFile, rawValue, errors) {
  let value = rawValue;
  const hashIndex = value.indexOf("#");
  const fragmentRaw = hashIndex >= 0 ? value.slice(hashIndex + 1) : "";
  if (hashIndex >= 0) value = value.slice(0, hashIndex);
  const queryIndex = value.indexOf("?");
  if (queryIndex >= 0) value = value.slice(0, queryIndex);

  let pathname;
  let fragment;
  try {
    pathname = decodeURIComponent(value);
    fragment = decodeURIComponent(fragmentRaw);
  } catch {
    errors.push(`E_BAD_URL ${relative(fromFile)}: malformed URL encoding in ${rawValue}`);
    return;
  }

  let target = pathname ? path.resolve(path.dirname(fromFile), pathname) : path.resolve(fromFile);
  if (!insideRoot(target)) {
    errors.push(`E_PATH_ESCAPE ${relative(fromFile)}: ${rawValue}`);
    return;
  }
  if (!exactCaseExists(target)) {
    errors.push(`E_MISSING_REF ${relative(fromFile)}: ${rawValue}`);
    return;
  }
  if (isUnsafeResolvedTarget(target)) {
    errors.push(`E_SYMLINK_REF ${relative(fromFile)}: ${rawValue}`);
    return;
  }
  if (fs.statSync(target).isDirectory()) {
    target = path.join(target, "index.html");
    if (!exactCaseExists(target)) {
      errors.push(`E_MISSING_REF ${relative(fromFile)}: directory has no index.html (${rawValue})`);
      return;
    }
  }
  if (isUnsafeResolvedTarget(target)) {
    errors.push(`E_SYMLINK_REF ${relative(fromFile)}: ${rawValue}`);
    return;
  }
  if (fragment) {
    if (path.extname(target).toLowerCase() !== ".html") {
      errors.push(`E_FRAGMENT_TARGET ${relative(fromFile)}: fragment on non-HTML target ${rawValue}`);
      return;
    }
    if (!idsFor(target).has(fragment)) {
      errors.push(`E_FRAGMENT ${relative(fromFile)}: missing #${fragment} in ${relative(target)}`);
    }
  }
}

function validateParsedHtml(file, parsed, { requireLandingIds = false } = {}) {
  const errors = [];
  const { ids, duplicates, attributeDuplicates, tags } = parsed;
  for (const id of duplicates) errors.push(`E_DUPLICATE_ID ${relative(file)}: #${id}`);
  for (const duplicate of attributeDuplicates) {
    errors.push(`E_DUPLICATE_ATTR ${relative(file)}: <${duplicate.name}> ${duplicate.attribute}`);
  }
  if (requireLandingIds) {
    for (const id of REQUIRED_LANDING_IDS) {
      if (!ids.has(id)) errors.push(`E_REQUIRED_ID ${relative(file)}: #${id}`);
    }
  }

  for (const { name, attrs } of tags) {
    if (name === "base") errors.push(`E_BASE_TAG ${relative(file)}: base elements are forbidden`);
    if (name === "img" && !attrs.has("alt")) {
      errors.push(`E_IMG_ALT ${relative(file)}: img is missing alt`);
    }
    if (name === "a" && attrs.has("target")) {
      const target = attrs.get("target");
      if (!["_self", "_blank"].includes(target)) {
        errors.push(`E_LINK_TARGET ${relative(file)}: unsupported target ${target}`);
      }
      if (target === "_blank") {
        const relTokens = new Set((attrs.get("rel") || "").toLowerCase().split(/\s+/).filter(Boolean));
        if (!relTokens.has("noopener") || !relTokens.has("noreferrer")) {
          errors.push(`E_EXTERNAL_REL ${relative(file)}: target=_blank requires noopener noreferrer`);
        }
      }
    }
    for (const attribute of ["href", "src", "poster", "action", "formaction"]) {
      if (!attrs.has(attribute)) continue;
      const value = attrs.get(attribute).trim();
      const classified = classifyReference(value);
      if (classified === "root") {
        errors.push(`E_ROOT_RELATIVE ${relative(file)}: ${value}`);
      } else if (classified === "local") {
        resolveLocalReference(file, value, errors);
      }
    }
    if (attrs.has("srcset")) {
      for (const candidate of attrs.get("srcset").split(",")) {
        const value = candidate.trim().split(/\s+/, 1)[0];
        const classified = classifyReference(value);
        if (classified === "root") errors.push(`E_ROOT_RELATIVE ${relative(file)}: ${value}`);
        else if (classified === "local") resolveLocalReference(file, value, errors);
      }
    }
    for (const attribute of ["aria-controls", "aria-labelledby"]) {
      if (!attrs.has(attribute)) continue;
      for (const id of attrs.get(attribute).trim().split(/\s+/).filter(Boolean)) {
        if (!ids.has(id)) errors.push(`E_ARIA_TARGET ${relative(file)}: ${attribute} references missing #${id}`);
      }
    }
  }
  return errors;
}

function validateHtmlFile(file, options = {}) {
  return validateParsedHtml(file, parseHtml(file), options);
}

function validateHtmlSource(source, file, options = {}) {
  return validateParsedHtml(file, parseHtmlSource(source), options);
}

function validateCssSource(source, file) {
  const errors = [];

  function validateReference(value) {
    const classified = classifyReference(value);
    if (classified === "root") errors.push(`E_ROOT_RELATIVE ${relative(file)}: ${value}`);
    else if (classified === "local" && !value.startsWith("#")) resolveLocalReference(file, value, errors);
  }

  const urlPattern = /url\(\s*(["']?)(.*?)\1\s*\)/g;
  let match;
  while ((match = urlPattern.exec(source)) !== null) validateReference(match[2].trim());

  const importPattern = /@import\s+(["'])(.*?)\1/g;
  while ((match = importPattern.exec(source)) !== null) validateReference(match[2].trim());

  return errors;
}

function validateCssFile(file) {
  return validateCssSource(fs.readFileSync(file, "utf8"), file);
}

function walk(directory, visit) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git") continue;
    const full = path.join(directory, entry.name);
    visit(full, entry);
    if (entry.isDirectory() && !FORBIDDEN_DIRECTORIES.has(entry.name)) walk(full, visit);
  }
}

function validateRequiredFiles(errors) {
  for (const file of REQUIRED_FILES) {
    const full = path.join(ROOT, file);
    if (!exactCaseExists(full) || !fs.statSync(full).isFile()) {
      errors.push(`E_REQUIRED_FILE ${file}`);
      continue;
    }
    if (file !== ".nojekyll" && fs.statSync(full).size === 0) errors.push(`E_EMPTY_FILE ${file}`);
  }
  for (const file of FORBIDDEN_ROOT_FILES) {
    if (fs.existsSync(path.join(ROOT, file))) errors.push(`E_FORBIDDEN_FILE ${file}`);
  }
  walk(ROOT, (full, entry) => {
    if (entry.isSymbolicLink()) errors.push(`E_SYMLINK ${relative(full)}`);
    if (entry.isDirectory() && FORBIDDEN_DIRECTORIES.has(entry.name)) {
      errors.push(`E_FORBIDDEN_DIR ${relative(full)}`);
    }
    if (
      entry.isFile()
      && (
        entry.name === ".DS_Store"
        || /^\.env(?:\.|$)/.test(entry.name)
        || /\.(?:sqlite\d*|db|zip|tar|tgz)$/i.test(entry.name)
      )
    ) {
      errors.push(`E_PUBLIC_ARTIFACT ${relative(full)}`);
    }
  });
}

function validateAssets(errors) {
  for (const [file, expected] of EXPECTED_ASSETS) {
    const full = path.join(ROOT, file);
    if (!exactCaseExists(full) || !fs.statSync(full).isFile()) {
      errors.push(`E_ASSET_MISSING ${file}`);
      continue;
    }
    const actual = sha256(full);
    if (actual !== expected) errors.push(`E_ASSET_DIGEST ${file}: expected ${expected}, got ${actual}`);
  }
  const png = fs.readFileSync(path.join(ROOT, "assets/carpeos-mark.png"));
  if (!png.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) {
    errors.push("E_ASSET_FORMAT assets/carpeos-mark.png");
  }
  const jpg = fs.readFileSync(path.join(ROOT, "assets/readme-hero.jpg"));
  if (!(jpg[0] === 0xff && jpg[1] === 0xd8 && jpg[2] === 0xff)) errors.push("E_ASSET_FORMAT assets/readme-hero.jpg");
  const svg = fs.readFileSync(path.join(ROOT, "assets/architecture-flow.svg"), "utf8");
  if (!/<svg\b/.test(svg)) errors.push("E_ASSET_FORMAT assets/architecture-flow.svg");
}

function validateEvidence(errors) {
  const provenance = fs.readFileSync(path.join(ROOT, "PROVENANCE.md"), "utf8");
  const claims = fs.readFileSync(path.join(ROOT, "CLAIMS.md"), "utf8");
  const requiredProvenanceTokens = [
    "699dcdfbf45804f20e6b4cd6f5ddc7f23b1dca94",
    "docs/assets/carpeos-mark.png",
    "docs/assets/readme-hero.jpg",
    "docs/assets/architecture-flow.svg",
    "639e96ee799e357f455ca4d7de9c45d5e99ab9de",
    "120621314d378318362b5779eb6e05220ea3e653",
    "0c47fb48db3dd3a38338e9106504f83a9dd9d7cb",
    ...EXPECTED_ASSETS.values(),
    "Apache License 2.0",
    "none were specified",
  ];
  for (const token of requiredProvenanceTokens) {
    if (!provenance.includes(token)) errors.push(`E_PROVENANCE missing ${token}`);
  }
  const requiredClaimTokens = [
    "59328c0eb28096a8921ae5c7c8af4b06aa32dbc5",
    "@innocarpe/carpeos@3.2.0",
    "Node.js `>=22.22.0`",
    "carpeos setup plan",
    "carpeos setup run --apply",
    "carpeos setup hooks install --apply",
    "APPROVED_WITH_CAVEAT",
    "https://github.com/innocarpe/carpeos/releases/tag/v3.2.0",
    "https://registry.npmjs.org/@innocarpe%2Fcarpeos/3.2.0",
    "memory_neighborhood",
    "Deliberate non-claims",
  ];
  for (const token of requiredClaimTokens) {
    if (!claims.includes(token)) errors.push(`E_CLAIMS missing ${token}`);
  }
  const ledgerRows = claims.match(/^\| `(?:landing|principle|why|how|interfaces|interface|model|install|docs|footer|project)-[^`]+` \|/gm) || [];
  if (ledgerRows.length < 45) errors.push(`E_CLAIMS_COVERAGE expected at least 45 claim rows, got ${ledgerRows.length}`);

  for (const file of ["index.html", "docs/index.html"]) {
    for (const { name, attrs } of parseHtml(path.join(ROOT, file)).tags) {
      if (name !== "a" || !attrs.has("href")) continue;
      const href = attrs.get("href");
      if (!claims.includes(href)) errors.push(`E_CLAIMS_DESTINATION ${file}: ${href}`);
    }
  }
  const landing = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  if (!landing.includes("https://innocarpe.github.io/carpeos-website/")) {
    errors.push("E_PROJECT_BASE index.html: missing canonical project Pages metadata");
  }
}

function validatePublicBoundarySource(source, file) {
  const errors = [];
  const credentialAssignment = /(?:["']?(?:access[_-]?token|auth[_-]?token|api[_-]?key|client[_-]?secret|password)["']?)\s*[:=]\s*(?:"[^"\n]{8,}"|'[^'\n]{8,}'|`[^`\n]{8,}`)/i;
  const privateKeyHeader = /-----BEGIN (?:RSA |EC |DSA |OPENSSH )?PRIVATE KEY-----/;
  const machinePath = /(?:\/Users\/[A-Za-z0-9._-]+\/|\/home\/[A-Za-z0-9._-]+\/|file:\/\/)/;

  if (credentialAssignment.test(source) || privateKeyHeader.test(source)) errors.push(`E_CREDENTIAL ${file}`);
  if (machinePath.test(source)) errors.push(`E_MACHINE_PATH ${file}`);
  for (const line of source.split(/\r?\n/)) {
    if (/GraphRAG/i.test(line) && !/\bplanned\b/i.test(line)) {
      errors.push(`E_UNGROUNDED_CLAIM ${file}: GraphRAG`);
    }
    if (
      /hosted (?:Worker|MCP|deployment|SaaS).{0,50}\b(?:available|implemented|live|ready)\b/i.test(line)
      && !/\b(?:no|not|never|without|does not)\b/i.test(line)
    ) {
      errors.push(`E_UNGROUNDED_CLAIM ${file}: hosted capability`);
    }
  }
  return errors;
}

function validatePublicBoundary(errors) {
  for (const file of TEXT_SURFACES) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    errors.push(...validatePublicBoundarySource(source, file));
  }
  for (const file of ["index.html", "docs/index.html", "css/styles.css", "js/main.js"]) {
    const source = fs.readFileSync(path.join(ROOT, file), "utf8");
    if (/\b(?:localhost|127\.0\.0\.1)\b/i.test(source)) errors.push(`E_LOCALHOST_PUBLIC ${file}`);
  }
}

function validateSite() {
  const errors = [];
  validateRequiredFiles(errors);
  if (errors.some((error) => error.startsWith("E_REQUIRED_FILE"))) return errors;
  errors.push(...validateHtmlFile(path.join(ROOT, "index.html"), { requireLandingIds: true }));
  errors.push(...validateHtmlFile(path.join(ROOT, "docs/index.html")));
  errors.push(...validateCssFile(path.join(ROOT, "css/styles.css")));
  validateAssets(errors);
  validateEvidence(errors);
  validatePublicBoundary(errors);
  return errors;
}

function runSelfTests() {
  const failures = [];
  let assertions = 0;

  function expectCode(label, errors, expectedCode) {
    assertions += 1;
    if (!errors.some((error) => error.startsWith(expectedCode))) {
      failures.push(`${label}: expected ${expectedCode}, got ${errors.join("; ") || "no error"}`);
    }
  }

  function expectCondition(label, condition, detail) {
    assertions += 1;
    if (!condition) failures.push(`${label}: ${detail}`);
  }

  for (const [fixture, expectedCode] of [
    ["missing-asset.html", "E_MISSING_REF"],
    ["root-relative.html", "E_ROOT_RELATIVE"],
    ["bad-fragment.html", "E_FRAGMENT"],
  ]) {
    expectCode(
      fixture,
      validateHtmlFile(path.join(ROOT, "scripts/fixtures/invalid", fixture)),
      expectedCode,
    );
  }

  const virtualHtml = path.join(ROOT, "index.html");
  expectCode(
    "quoted greater-than parser bypass",
    validateHtmlSource('<img alt="1 > 0" src="/bad.png">', virtualHtml),
    "E_ROOT_RELATIVE",
  );
  const duplicateErrors = validateHtmlSource(
    '<img alt="duplicate" src="/bad.png" src="assets/carpeos-mark.png">',
    virtualHtml,
  );
  expectCode("duplicate browser-effective attribute", duplicateErrors, "E_DUPLICATE_ATTR");
  expectCode("first duplicate attribute remains authoritative", duplicateErrors, "E_ROOT_RELATIVE");
  expectCode(
    "root-relative srcset",
    validateHtmlSource('<img alt="srcset" src="assets/carpeos-mark.png" srcset="/bad.png 1x, assets/carpeos-mark.png 2x">', virtualHtml),
    "E_ROOT_RELATIVE",
  );
  expectCode(
    "root-relative poster",
    validateHtmlSource('<video poster="/bad.png"></video>', virtualHtml),
    "E_ROOT_RELATIVE",
  );
  expectCode(
    "root-relative form action",
    validateHtmlSource('<form action="/submit"></form>', virtualHtml),
    "E_ROOT_RELATIVE",
  );
  expectCode(
    "root-relative button formaction",
    validateHtmlSource('<button formaction="/submit">Submit</button>', virtualHtml),
    "E_ROOT_RELATIVE",
  );
  expectCode(
    "quoted CSS import",
    validateCssSource('@import "/css/styles.css";', path.join(ROOT, "css/styles.css")),
    "E_ROOT_RELATIVE",
  );

  for (const [label, reference, expectedCode] of [
    ["case-sensitive path", "CSS/styles.css", "E_MISSING_REF"],
    ["path escape", "../outside.html", "E_PATH_ESCAPE"],
    ["malformed encoding", "assets/%ZZ.png", "E_BAD_URL"],
    ["fragment on non-HTML", "assets/carpeos-mark.png#ghost", "E_FRAGMENT_TARGET"],
  ]) {
    const referenceErrors = [];
    resolveLocalReference(virtualHtml, reference, referenceErrors);
    expectCode(label, referenceErrors, expectedCode);
  }

  const parsedRawText = parseHtmlSource(
    '<!-- <div id="comment-ghost"></div> --><script>const x = "<div id=\\"script-ghost\\">";</script><p id="real"></p>',
  );
  expectCondition(
    "comments and raw-text IDs excluded",
    parsedRawText.ids.has("real") && !parsedRawText.ids.has("comment-ghost") && !parsedRawText.ids.has("script-ghost"),
    `unexpected IDs: ${[...parsedRawText.ids].join(", ")}`,
  );

  expectCode(
    "quoted JSON credential",
    validatePublicBoundarySource('{"api_key":"synthetic-secret-value"}', "inline"),
    "E_CREDENTIAL",
  );
  expectCode(
    "unrelated planned text does not mask GraphRAG",
    validatePublicBoundarySource("Another feature is planned.\nGraphRAG is live.", "inline"),
    "E_UNGROUNDED_CLAIM",
  );
  expectCondition(
    "planned GraphRAG remains allowed",
    !validatePublicBoundarySource("GraphRAG remains planned.", "inline").some((error) => error.startsWith("E_UNGROUNDED_CLAIM")),
    "planned qualification was rejected",
  );
  expectCondition(
    "digest map entries are mandatory files",
    [...EXPECTED_ASSETS.keys()].every((file) => REQUIRED_FILES.includes(file)),
    "an expected asset is absent from REQUIRED_FILES",
  );

  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), "carpeos-validator-"));
  try {
    const siteRoot = path.join(temporaryRoot, "site");
    const outsideRoot = path.join(temporaryRoot, "outside");
    fs.mkdirSync(siteRoot);
    fs.mkdirSync(outsideRoot);
    const outsideFile = path.join(outsideRoot, "outside.txt");
    fs.writeFileSync(outsideFile, "synthetic fixture");
    const terminalLink = path.join(siteRoot, "terminal-link.txt");
    const ancestorLink = path.join(siteRoot, "ancestor-link");
    fs.symlinkSync(outsideFile, terminalLink);
    fs.symlinkSync(outsideRoot, ancestorLink);

    expectCondition(
      "terminal symlink rejected",
      isUnsafeResolvedTarget(terminalLink, siteRoot),
      "terminal symlink was accepted",
    );
    expectCondition(
      "symlink ancestor realpath escape rejected",
      isUnsafeResolvedTarget(path.join(ancestorLink, "outside.txt"), siteRoot),
      "symlink ancestor escaped the synthetic root",
    );
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true });
  }

  return { failures, assertions };
}

const errors = validateSite();
if (errors.length > 0) {
  console.error(`Validation failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

if (SELF_TEST) {
  const { failures, assertions } = runSelfTests();
  if (failures.length > 0) {
    console.error(`Validator self-test failed with ${failures.length} error(s):`);
    for (const failure of failures) console.error(`- ${failure}`);
    process.exit(1);
  }
  console.log(`Validator self-test passed: ${assertions} adversarial assertions.`);
} else {
  console.log("Site validation passed.");
}
