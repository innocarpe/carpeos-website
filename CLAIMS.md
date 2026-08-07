# Public claims evidence

## Ledger metadata

- Source repository: <https://github.com/innocarpe/carpeos>
- Immutable source commit (release tag `v6.7.7`): `a9f3efbf5455ff1e40975668f91166f5585af4bf`
- Immutable source document: `README.md` at that commit (plus `CHANGELOG.md`, product DoDs, architecture notes, ADRs, and MCP contract)
- Asset digests remain pinned to the original website provenance commit for binary assets (see `PROVENANCE.md`)
- Release review: `innocarpe` · 2026-08-08
- Default disposition unless noted: `APPROVED`

Line ranges below refer to the immutable source documents at `v6.7.7` unless noted. Each row covers one rendered factual sentence, status, command, or destination family. Repeated navigation links use the same approved destination row.

## Landing-page claims

| ID | Rendered claim or command | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `landing-status` | “v6.7.7 · local-first · open source” | shipped release / local-only | `CHANGELOG.md` `[6.7.7]`; GitHub Release `v6.7.7`; npm `@innocarpe/carpeos@6.7.7` | Public package `6.7.7` is latest; full SemVer `x.y.z` only; hosted product deployment is not claimed | `innocarpe` · 2026-08-08 · `APPROVED` |
| `landing-hero-summary` | CarpeOS captures agent sessions with provenance, compounds verified meaning through a post-capture agentic layer (quality-filtered, multi-host), and returns promoted knowledge with explicit status. | implemented model / local-only | `README.md` intro; `CHANGELOG.md` 6.0–6.7.7 agentic path; `docs/architecture/agentic-quality.md` | Capture stays dumb; agentic is post-commit with quality filters and denser host extract in 6.7.x | `innocarpe` · 2026-08-08 · `APPROVED` |
| `landing-public-private` | “Public code. Private knowledge. Not hosted SaaS.” | public boundary / not deployed | `README.md` public/private callout | Public repository confirmed; no hosted SaaS claim | `innocarpe` · 2026-08-08 · `APPROVED` |
| `principle-append-only` | “Append-only events” | implemented model | `README.md` rules | Model claim only | `innocarpe` · 2026-08-08 · `APPROVED` |
| `principle-adjudication` | “Adjudicated meaning” | implemented model / local-only | `README.md` adjudication; agentic_v1/v1.1 gates | adj_v3 + agentic gate | `innocarpe` · 2026-08-08 · `APPROVED` |
| `principle-promoted` | “Promoted-only default” | implemented model / local-only | `README.md` default search | Held search still opt-in | `innocarpe` · 2026-08-08 · `APPROVED` |
| `principle-projections` | “Rebuildable projections” | implemented model / local-only | `README.md` projections | OKF/Obsidian projections | `innocarpe` · 2026-08-08 · `APPROVED` |
| `why-context-loss` | Valuable decisions and bug paths are split across chat history, terminal scrollback, and notes. | problem statement | `README.md` | Neutral | `innocarpe` · 2026-08-08 · `APPROVED` |
| `why-history-trust` | Agent history mixes facts, guesses, drafts, and abandoned paths; records keep evidence, claims, acceptance, and supersession distinct. | implemented model | `README.md` | Current | `innocarpe` · 2026-08-08 · `APPROVED` |
| `why-session-noise` | Not every lifecycle event should become searchable meaning; adjudicate promote/hold/reject with promoted-only default search. | implemented model / local-only | `README.md`; `CHANGELOG.md` 6.6.3 lifecycle feed | Lifecycle-only feed policy | `innocarpe` · 2026-08-08 · `APPROVED` |
| `why-tool-silos` | Provider-neutral capture and shared MCP retrieval reduce separate tool-memory silos. | local-only | multi-host setup; denser host adapters 6.7.7 | Codex/Claude/Grok/Cursor/Gajae paths | `innocarpe` · 2026-08-08 · `APPROVED` |
| `why-projection-authority` | Notes and indexes are rebuildable projections rather than canonical authority. | implemented model | `README.md` | Current | `innocarpe` · 2026-08-08 · `APPROVED` |
| `how-system` | Provider hooks feed a private event store; adjudication assigns promote/hold/reject; default retrieval returns promoted meaning; MCP, CLI, and projections are interfaces. | local-only | `README.md` How it fits; agentic feed | Capture fail-open; agentic post-commit | `innocarpe` · 2026-08-08 · `APPROVED` |
| `how-capture` | Selected lifecycle events enter an encrypted outbox and local store; host hooks stay fail-open and fast. | local-only | `README.md`; `CHANGELOG.md` 6.0/6.6 | Capture never LLM | `innocarpe` · 2026-08-08 · `APPROVED` |
| `how-adjudicate` | Rules and the post-capture agentic plane assign promote, hold, or reject; verified decision, constraint, and preference can promote without load-bearing HITL; nothing auto-accepts a claim. | local-only | `CHANGELOG.md` 6.6.0 ADR 0018; 6.7 near-dup holds | AcceptanceDecision never automatic | `innocarpe` · 2026-08-08 · `APPROVED` |
| `how-retrieve` | Default search is promoted and active only; local hybrid ranking boosts typed promoted units; results stay bounded with provenance rechecked. | local-only | `CHANGELOG.md` 6.4.0 | Hosted graph/vector still non-goals | `innocarpe` · 2026-08-08 · `APPROVED` |
| `how-use` | People and agents work through CLI (including `carpeos agentic`), local MCP, Obsidian notes, and OKF export projections. | local-only | `README.md`; CLI agentic surfaces 6.6–6.7 | Local only | `innocarpe` · 2026-08-08 · `APPROVED` |
| `interfaces-status` | Interfaces are local and share the same underlying model; projections can be rebuilt. | local-only | `README.md` | No hosted interface | `innocarpe` · 2026-08-08 · `APPROVED` |
| `interface-cli` | CLI supports capture, compound, search, pack; flush agentic feed; human-confirmed retract; multi-host hooks. | local-only | `CHANGELOG.md` 6.6.1 feed/flush; 6.7.x | `carpeos agentic flush|timer|retract` | `innocarpe` · 2026-08-08 · `APPROVED` |
| `interface-mcp` | MCP over stdio exposes nine local tools, including `memory_neighborhood`. | local-only | `docs/contracts/mcp-tools-v1.json` (9 tools) | Nine tools at `v6.7.7` | `innocarpe` · 2026-08-08 · `APPROVED` |
| `interface-agentic` | Post-capture agentic layer: fail-open feed; promote when verified for decision/constraint/preference; near-duplicate promote holds; denser multi-host signal extract; timer or flush; never auto-creates AcceptanceDecision. | local-only | `CHANGELOG.md` 6.6.0–6.7.7 | Quality filters 6.7.0; denser adapters 6.7.7 | `innocarpe` · 2026-08-08 · `APPROVED` |
| `interface-okf` | OKF v0.2 export writes a trust-zone-scoped, promoted-by-default portable bundle; export only. | local-only / projection | `README.md` OKF | Retained | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-not-fact` | A model suggestion is not automatically a fact. | implemented model | `README.md` | Semantics | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-promoted-default` | Default search is promoted and active only; held drafts require opt-in. | implemented model | `README.md` | Current | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-capture-no-llm` | Capture never calls an LLM; the agentic plane runs after commit, fail-open, with redacted operator JSON by default. | local-only / safety | `CHANGELOG.md` 6.0 Safety; 6.7.0 default JSON redaction | Timer/log non-verbose | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-promote-when-verified` | Verified decision, constraint, and preference can promote without load-bearing HITL; near-dup promotes hold; AcceptanceDecision is never automatic. | local-only | `CHANGELOG.md` 6.6.0; 6.7.6/6.7.7 near-dup holds | Cross-session near-dup in 6.7.7 | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-append-retract` | Dispositions and events are append-only by policy version; retract uses human-confirmed supersession. | implemented model | `CHANGELOG.md` 6.6.0/6.7.0 bulk retract | Human-confirmed | `innocarpe` · 2026-08-08 · `APPROVED` |
| `model-sensitive-trust` | Sensitive plaintext stays outside the event body; trust zones stay isolation boundaries. | safety boundary | `README.md`; pack soft-scrub/privacy 6.6–6.7 | Public boundary clean | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-node` | CarpeOS requires Node.js 22.22 or newer. | prerequisite | npm engines `>=22.22.0` | `@innocarpe/carpeos@6.7.7` | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-npm` | `npm install -g @innocarpe/carpeos` | release-verified | `README.md` Install | Published | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-pin` | Pin `@innocarpe/carpeos@6.7.7` for a fixed release. | release pin | npm + GitHub `v6.7.7` | Latest exact version | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-plan` | `carpeos setup plan` | non-mutating command | `README.md` setup | Documented | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-apply` | `carpeos setup run --apply` | mutating command | `README.md` setup | Documented path; activation caveat | `innocarpe` · 2026-08-08 · `APPROVED_WITH_CAVEAT` |
| `install-hooks` | `carpeos setup hooks install --apply` | mutating command | multi-host setup docs | Documented | `innocarpe` · 2026-08-08 · `APPROVED` |
| `install-hosting-boundary` | “Local-first. Interfaces ship on your machine; no hosted Worker, hosted MCP, or SaaS deployment is claimed.” | not deployed | `README.md` What works today | No hosted claim | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-scope` | Detailed contracts, guides, ADRs, and implementation status live with the public source. | destination statement | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `footer-description` | CarpeOS is a local-first personal knowledge OS for people who work with AI agents. | positioning | `README.md` | Current | `innocarpe` · 2026-08-08 · `APPROVED` |
| `footer-version` | Footer release link → `https://github.com/innocarpe/carpeos/releases/tag/v6.7.7` | current release | GitHub + npm | Non-draft | `innocarpe` · 2026-08-08 · `APPROVED` |

## Documentation-hub claims and destinations

| ID | Rendered claim or destination | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `docs-status` | Current public package is `@innocarpe/carpeos@6.7.7`. | shipped release | npm `6.7.7`; GitHub `v6.7.7` | Latest | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-model-summary` | Evidence is not a claim; default search is promoted only; projections are not canonical; accepted status is provenance-derived. | implemented model | `README.md` | Current | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-architecture` | Architecture overview → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/overview.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-memory-capacity` | Memory capacity → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/memory-capacity.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-adrs` | Architecture decisions → `https://github.com/innocarpe/carpeos/tree/main/docs/adr` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-spec` | v1 specification → `https://github.com/innocarpe/carpeos/tree/main/spec/v1` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-install` | One-stop install → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/one-stop-install.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-capture` | Local capture → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/local-capture.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-adapters` | Provider adapters → `https://github.com/innocarpe/carpeos/tree/main/adapters` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-retrieval` | Retrieval guide → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/retrieval.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-mcp-guide` | MCP server → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-server.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-mcp-contract` | MCP tool contract → `https://github.com/innocarpe/carpeos/blob/main/docs/contracts/mcp-tools-v1.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-okf` | OKF export → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/okf-export.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-mcp-smoke` | Context-pack smoke → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-context-pack-smoke.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-works-today` | What works today → `https://github.com/innocarpe/carpeos#what-works-today` | status destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-product-60` | Product 6.0.0 DoD → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/product-6.0.0.md` | major product destination | product-6.0.0.md | Public; pin is 6.7.7 | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-agentic-quality` | Agentic quality → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/agentic-quality.md` | public destination | `CHANGELOG.md` `[6.7.0]` | Public path at tag | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-adr-0018` | ADR 0018 → `https://github.com/innocarpe/carpeos/blob/main/docs/adr/0018-agentic-hitl-free-compound-loop.md` | public destination | `CHANGELOG.md` 6.6.0 | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-releases` | Releases → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/versioning-and-releases.md` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-public-boundary` | Public boundary → `https://github.com/innocarpe/carpeos/blob/main/AGENTS.md` | safety destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `docs-license` | Apache-2.0 → `https://github.com/innocarpe/carpeos/blob/main/LICENSE` | license destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |
| `project-source` | Source / GitHub CTAs → `https://github.com/innocarpe/carpeos` | public destination | `README.md` | Public | `innocarpe` · 2026-08-08 · `APPROVED` |

## Internal destination ledger

| Rendered destination family | Approved local targets |
|---|---|
| Landing navigation and CTAs | `#main-content`, `#top`, `#why`, `#how`, `#interfaces`, `#model`, `#install`, `#docs` |
| Landing → docs hub | `docs/index.html` |
| Docs hub → landing | `../index.html#top`, `../index.html#why`, `../index.html#how`, `../index.html#interfaces`, `../index.html#install` |

## Release-time verification

Verified on 2026-08-08 against product `6.7.7`:

- Immutable GitHub Release: <https://github.com/innocarpe/carpeos/releases/tag/v6.7.7> (not draft/prerelease).
- npm: <https://registry.npmjs.org/@innocarpe%2Fcarpeos/6.7.7> (`@innocarpe/carpeos@6.7.7`, Node.js `>=22.22.0`).
- Annotated tag commit: `a9f3efbf5455ff1e40975668f91166f5585af4bf`.
- npm integrity: `sha512-YmN7uPh1QMP3dHBQ3peGcsl9mcphfnUT0dts0wpujund7xDqM5xFoyuWiIhfmemFDcyqm3orW8FYXBibnFC6GA==`.
- `CHANGELOG.md` 6.6.x–6.7.7: promote-when-verified, feed/flush/timer, quality ultragoal substrate, denser host adapters, near-dup promote holds.
- MCP inventory: nine tools including `memory_neighborhood`.
- Website asset digests unchanged (see `PROVENANCE.md`).

## Deliberate non-claims

The website does not present hosted graph adapters, hosted vector services, a hosted Worker production deploy, hosted MCP, multi-tenant SaaS, automatic AcceptanceDecision creation, or B1 policy-reconciliation apply/writer/receipt as implemented. Capture is not claimed to call LLM or await agentic jobs. Hosted multi-tenant GraphRAG remains planned; local typed promoted-unit ranking is the shipped retrieval improvement. Live model quality depends on operator credentials and spend caps. Future capabilities remain planned in source until implemented.
