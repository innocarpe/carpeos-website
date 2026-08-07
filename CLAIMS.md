# Public claims evidence

## Ledger metadata

- Source repository: <https://github.com/innocarpe/carpeos>
- Immutable source commit (release tag `v6.6.0`): `4017609a4ab92449af90d0fac48bb5a73355a405`
- Immutable source document: `README.md` at that commit (plus `CHANGELOG.md`, product DoDs, ADRs, and MCP contract)
- Asset digests remain pinned to the original website provenance commit for binary assets (see `PROVENANCE.md`)
- Release review: `innocarpe` · 2026-08-07
- Default disposition unless noted: `APPROVED`

Line ranges below refer to the immutable source documents at `v6.6.0` unless noted. Each row covers one rendered factual sentence, status, command, or destination family. Repeated navigation links use the same approved destination row.

## Landing-page claims

| ID | Rendered claim or command | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `landing-status` | “v6.6.0 · local-first · open source” | shipped release / local-only | `CHANGELOG.md` `[6.6.0]`; GitHub Release `v6.6.0`; npm `@innocarpe/carpeos@6.6.0` | Public package `6.6.0` is latest published; full SemVer `x.y.z` only; hosted product deployment is not claimed | `innocarpe` · 2026-08-07 · `APPROVED` |
| `landing-hero-summary` | CarpeOS captures agent sessions with provenance, compounds verified meaning through a post-capture agentic layer, and returns promoted knowledge with explicit status. | implemented model / local-only | `README.md` intro; `CHANGELOG.md` 6.0.0–6.6.0 agentic path; ADR 0017/0018 | Capture stays dumb; agentic plane is post-commit; promote-when-verified for selected kinds in 6.6.0 | `innocarpe` · 2026-08-07 · `APPROVED` |
| `landing-public-private` | “Public code. Private knowledge. Not hosted SaaS.” | public boundary / not deployed | `README.md` public/private callout; What works today NOT DEPLOYED | Public repository confirmed; no hosted SaaS claim made | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-append-only` | “Append-only events” | implemented model | `README.md` How it fits rules | Model claim only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-adjudication` | “Adjudicated meaning” | implemented model / local-only | `README.md` adjudication; `CHANGELOG.md` 2.0/6.x agentic_v1 | adj_v3 + agentic gate; not every unit auto-promotes | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-promoted` | “Promoted-only default” | implemented model / local-only | `README.md` default search promoted/active only | Held still requires opt-in for search | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-projections` | “Rebuildable projections” | implemented model / local-only | `README.md` projections and OKF export | Obsidian and OKF remain projections | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-context-loss` | Valuable decisions and bug paths are split across chat history, terminal scrollback, and notes. | problem statement | `README.md` Why this exists | Neutral product rationale | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-history-trust` | Agent history mixes facts, guesses, drafts, and abandoned paths; records keep evidence, claims, acceptance, and supersession distinct. | implemented model | `README.md` model section | Model distinction remains current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-session-noise` | Not every lifecycle event should become searchable meaning; adjudicate promote/hold/reject with promoted-only default search. | implemented model / local-only | `README.md` Adjudicate before “memory” | Shipped adjudication + agentic gates | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-tool-silos` | Provider-neutral capture and shared MCP retrieval reduce separate tool-memory silos. | local-only | `README.md` capture + interfaces; `CHANGELOG.md` 5.0.1 multi-host | Multi-host setup retained | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-projection-authority` | Notes and indexes are rebuildable projections rather than canonical authority. | implemented model | `README.md` projections rules | Projection claim remains current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-system` | Provider hooks feed a private event store; adjudication assigns promote/hold/reject; default retrieval returns promoted meaning; MCP, CLI, and projections are interfaces. | local-only / implemented model | `README.md` How it fits; `CHANGELOG.md` 6.0 feed+runner | Capture remains fail-open; agentic feed is post-commit | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-capture` | Selected lifecycle events enter an encrypted outbox and local store; host hooks stay fail-open and fast. | local-only | `README.md` Capture; `CHANGELOG.md` 6.0.0/6.6.0 | Capture path never calls LLM; feed insert only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-adjudicate` | Rules and the post-capture agentic plane assign promote, hold, or reject; verified decision, constraint, and preference meaning can promote without load-bearing HITL; nothing auto-accepts a claim. | local-only / implemented model | `CHANGELOG.md` `[6.6.0]` ADR 0018 promote-when-verified; product-6.0.0.md fences | Automatic AcceptanceDecision remains off; procedure/fact_candidate remain hold-biased | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-retrieve` | Default search is promoted and active only; local hybrid ranking boosts typed promoted units; results stay bounded with provenance rechecked. | local-only | `CHANGELOG.md` `[6.4.0]` typed promoted unit boosts; `README.md` retrieval | Local ranking only; hosted graph/vector services remain non-goals | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-use` | People and agents work through CLI (including `carpeos agentic`), local MCP, Obsidian notes, and OKF export projections. | local-only | `CHANGELOG.md` 6.0–6.6 CLI agentic surfaces; `README.md` Interfaces | Interfaces remain local | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interfaces-status` | Interfaces are local and share the same underlying model; projections can be rebuilt. | local-only | `README.md` Interfaces | No hosted interface claimed | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-cli` | CLI supports capture, compound, search, and pack context; hooks, agentic loop, human-confirmed retract, rebuild, context packs. | local-only | `CHANGELOG.md` 6.0/6.5/6.6 CLI agentic | Published CLI `6.6.0` includes `carpeos agentic …` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-mcp` | MCP over stdio exposes nine local tools, including `memory_neighborhood`. | local-only | `docs/contracts/mcp-tools-v1.json` (9 tools) | Runtime inventory is nine tools at `v6.6.0` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-agentic` | Post-capture agentic layer: fail-open feed after capture; offline by default; promote when verified for decision/constraint/preference; optional always-on timer; never auto-creates AcceptanceDecision. | local-only | `CHANGELOG.md` `[6.6.0]` HITL-free compound loop; ADR 0018; timer install | Network off by default; live Flash needs `--allow-network` + key | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-okf` | OKF v0.2 export writes a trust-zone-scoped, promoted-by-default portable bundle; export only. | local-only / projection | `README.md` OKF; `CHANGELOG.md` 3.1.0 | Retained in 6.x package | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-not-fact` | A model suggestion is not automatically a fact. | implemented model | `README.md` model language | Model semantics only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-promoted-default` | Default search is promoted and active only; held drafts require opt-in. | implemented model | `README.md` retrieval defaults | Held opt-in flags documented | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-capture-no-llm` | Capture never calls an LLM; the agentic plane runs after commit, fail-open. | local-only / safety | `CHANGELOG.md` 6.0.0/6.6.0 Safety | Hard fence retained | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-promote-when-verified` | Verified decision, constraint, and preference can promote without load-bearing HITL; AcceptanceDecision is never automatic. | local-only / implemented model | `CHANGELOG.md` `[6.6.0]`; ADR 0018 | Draft Claims still never auto-accept | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-append-retract` | Dispositions and events are append-only by policy version; retract uses human-confirmed supersession. | implemented model | `CHANGELOG.md` `[6.6.0]` retract; `README.md` rules | Human-confirmed retract path only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-sensitive-trust` | Sensitive plaintext stays outside the event body; trust zones stay isolation boundaries. | implemented safety boundary | `README.md` rules + public boundary | Public boundary review found no runtime/private material in this website | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-node` | CarpeOS requires Node.js 22.22 or newer. | current prerequisite | npm engines `>=22.22.0` | npm `@innocarpe/carpeos@6.6.0` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-npm` | `npm install -g @innocarpe/carpeos` | release-verified command | `README.md` Install | `@innocarpe/carpeos@6.6.0` published | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-pin` | Pin `@innocarpe/carpeos@6.6.0` for a fixed release. | release pin guidance | npm exact version; GitHub Release `v6.6.0` | Exact version exists on registry (latest) | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-plan` | `carpeos setup plan` | release-verified non-mutating command | `README.md` setup surface | Plan mode remains non-mutating without `--apply` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-apply` | `carpeos setup run --apply` | release-verified mutating command | `README.md` setup | Documented product path; disposable-home activation lineage with caveats | `innocarpe` · 2026-08-07 · `APPROVED_WITH_CAVEAT` |
| `install-hooks` | `carpeos setup hooks install --apply` | release-documented mutating command | `README.md` product path; multi-host 5.0.1 | Documented product path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-hosting-boundary` | “Local-first. Interfaces ship on your machine; no hosted Worker, hosted MCP, or SaaS deployment is claimed.” | local-only / not deployed | `README.md` What works today NOT DEPLOYED | No hosted capability presented as live | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-scope` | Detailed contracts, guides, ADRs, and implementation status live with the public source. | neutral destination statement | `README.md` documentation index | Public destinations | `innocarpe` · 2026-08-07 · `APPROVED` |
| `footer-description` | CarpeOS is a local-first personal knowledge OS for people who work with AI agents. | neutral positioning | `README.md` intro | Current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `footer-version` | Footer release link → `https://github.com/innocarpe/carpeos/releases/tag/v6.6.0` | current release destination | GitHub Release `v6.6.0`; npm `6.6.0` | Non-draft, non-prerelease | `innocarpe` · 2026-08-07 · `APPROVED` |

## Documentation-hub claims and destinations

| ID | Rendered claim or destination | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `docs-status` | CarpeOS is local-first and open source; current public package is `@innocarpe/carpeos@6.6.0`. | shipped release / local-only | npm `6.6.0`; GitHub `v6.6.0`; `CHANGELOG.md` | Latest package | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-model-summary` | Evidence is not a claim; default search is promoted only; projections are not canonical; accepted status is provenance-derived. | implemented model | `README.md` | Within source semantics | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-architecture` | Architecture overview → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/overview.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-memory-capacity` | Memory capacity → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/memory-capacity.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-adrs` | Architecture decisions → `https://github.com/innocarpe/carpeos/tree/main/docs/adr` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-spec` | v1 specification → `https://github.com/innocarpe/carpeos/tree/main/spec/v1` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-install` | One-stop install → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/one-stop-install.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-capture` | Local capture → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/local-capture.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-adapters` | Provider adapters → `https://github.com/innocarpe/carpeos/tree/main/adapters` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-retrieval` | Retrieval guide → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/retrieval.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-guide` | MCP server → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-server.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-contract` | MCP tool contract → `https://github.com/innocarpe/carpeos/blob/main/docs/contracts/mcp-tools-v1.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-okf` | OKF export → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/okf-export.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-smoke` | Context-pack smoke → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-context-pack-smoke.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-works-today` | What works today → `https://github.com/innocarpe/carpeos#what-works-today` | status destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-product-60` | Product 6.0.0 DoD → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/product-6.0.0.md` | major product destination | product-6.0.0.md; `CHANGELOG.md` 6.0–6.6 | Public path; pin is 6.6.0 | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-adr-0018` | ADR 0018 → `https://github.com/innocarpe/carpeos/blob/main/docs/adr/0018-agentic-hitl-free-compound-loop.md` | public destination | `CHANGELOG.md` `[6.6.0]` ADR 0018 | Public path at `v6.6.0` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-releases` | Releases → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/versioning-and-releases.md` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-public-boundary` | Public boundary → `https://github.com/innocarpe/carpeos/blob/main/AGENTS.md` | safety destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-license` | Apache-2.0 → `https://github.com/innocarpe/carpeos/blob/main/LICENSE` | license destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `project-source` | Source / GitHub CTAs → `https://github.com/innocarpe/carpeos` | public destination | `README.md` | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |

## Internal destination ledger

| Rendered destination family | Approved local targets |
|---|---|
| Landing navigation and CTAs | `#main-content`, `#top`, `#why`, `#how`, `#interfaces`, `#model`, `#install`, `#docs` |
| Landing → docs hub | `docs/index.html` |
| Docs hub → landing | `../index.html#top`, `../index.html#why`, `../index.html#how`, `../index.html#interfaces`, `../index.html#install` |

## Release-time verification

Verified on 2026-08-07 against product `6.6.0`:

- Immutable GitHub Release: <https://github.com/innocarpe/carpeos/releases/tag/v6.6.0> (`v6.6.0`, not a draft or prerelease).
- Version-specific npm metadata: <https://registry.npmjs.org/@innocarpe%2Fcarpeos/6.6.0> (`@innocarpe/carpeos@6.6.0`, Node.js `>=22.22.0`).
- Annotated tag object target commit: `4017609a4ab92449af90d0fac48bb5a73355a405`.
- npm package integrity (registry): `sha512-i5mW4RrpPMqxfLG3IUX/rFMLZ+VB4rJl3LrjmQ8C9WJCBXxF+CNN7BExpNnvgRIG0Q6bYyV/n+TTPy4OUZ8n+w==`.
- `CHANGELOG.md` through 6.6.0: Agentic Layer 6.0 hold-first → 6.1 auto-promote suite → 6.2 links → 6.3 draft Claims → 6.4 local typed ranking → 6.5 E10/human/backfill → 6.6 promote-when-verified (ADR 0018) + timer + retract.
- Product 6.0.0 DoD + ADR 0018 public paths at the tag.
- MCP runtime inventory at `v6.6.0` lists nine tools including `memory_neighborhood`.
- Website asset digests unchanged (see `PROVENANCE.md`).

## Deliberate non-claims

The website does not present hosted graph adapters, hosted vector services, a hosted Worker production deploy, hosted MCP, multi-tenant SaaS, automatic AcceptanceDecision creation, or B1 policy-reconciliation apply/writer/receipt as implemented. Capture is not claimed to call LLM or network. Live Flash extract remains opt-in (`--allow-network` + key). Hosted multi-tenant GraphRAG remains planned; local typed promoted-unit ranking is the shipped retrieval improvement. Product 4 independent release authority is not claimed complete. Future capabilities remain planned in source until implemented.
