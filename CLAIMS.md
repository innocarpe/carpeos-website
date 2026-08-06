# Public claims evidence

## Ledger metadata

- Source repository: <https://github.com/innocarpe/carpeos>
- Immutable source commit (release tag `v6.1.0`): `406cb97aef84775b75ed91ff434de87bcb8356b4`
- Immutable source document: `README.md` at that commit (plus `CHANGELOG.md`, product DoDs, and MCP contract)
- Asset digests remain pinned to the original website provenance commit for binary assets (see `PROVENANCE.md`)
- Release review: `innocarpe` · 2026-08-07
- Default disposition unless noted: `APPROVED`

Line ranges below refer to the immutable source documents at `v6.1.0` unless noted. Each row covers one rendered factual sentence, status, command, or destination family. Repeated navigation links use the same approved destination row.

## Landing-page claims

| ID | Rendered claim or command | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `landing-status` | “v6.1.0 · local-first · open source” | shipped release / local-only | `CHANGELOG.md` `[6.1.0]`; GitHub Release `v6.1.0`; npm `@innocarpe/carpeos@6.1.0` | Public package `6.1.0` is latest published; full SemVer `x.y.z` only; hosted product deployment is not claimed | `innocarpe` · 2026-08-07 · `APPROVED` |
| `landing-hero-summary` | CarpeOS captures agent sessions with provenance, adjudicates durable meaning, and returns promoted knowledge with explicit status. | implemented model / local-only | `README.md` intro + adjudication; `CHANGELOG.md` 6.0.0 agentic layer | Core capture/adjudicate/retrieve loop retained; 6.x adds hold-first agentic plane off capture hot path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `landing-public-private` | “Public code. Private knowledge. Not hosted SaaS.” | public boundary / not deployed | `README.md` public/private callout; What works today NOT DEPLOYED | Public repository confirmed; no hosted SaaS claim made | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-append-only` | “Append-only events” | implemented model | `README.md` “How it fits together” rules | Model claim only; no hosted claim | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-adjudication` | “Adjudicated meaning” | implemented model / local-only | `README.md` Adjudicate before “memory”; `CHANGELOG.md` 2.0/3.2/6.0 | `adj_v3` remains foundation; agentic materialize is hold-first by default | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-promoted` | “Promoted-only default” | implemented model / local-only | `README.md` default search promoted/active only | Held requires explicit opt-in; agentic auto-promote is opt-in (`--allow-auto-promote`) | `innocarpe` · 2026-08-07 · `APPROVED` |
| `principle-projections` | “Rebuildable projections” | implemented model / local-only | `README.md` projections and OKF export | Obsidian and OKF are projections, not canonical | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-context-loss` | Valuable decisions and bug paths are split across chat history, terminal scrollback, and notes. | problem statement | `README.md` Why this exists | Neutral product rationale | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-history-trust` | Agent history mixes facts, guesses, drafts, and abandoned paths; records keep evidence, claims, acceptance, and supersession distinct. | implemented model | `README.md` model section | Model distinction remains current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-session-noise` | Not every lifecycle event should become searchable meaning; adjudicate promote/hold/reject with promoted-only default search. | implemented model / local-only | `README.md` Adjudicate before “memory”; `CHANGELOG.md` 2.0.0 | Shipped adjudication path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-tool-silos` | Provider-neutral capture and shared MCP retrieval reduce separate tool-memory silos. | local-only | `README.md` capture + interfaces; `CHANGELOG.md` 5.0.1 multi-host | Multi-host setup retained in 6.x | `innocarpe` · 2026-08-07 · `APPROVED` |
| `why-projection-authority` | Notes and indexes are rebuildable projections rather than canonical authority. | implemented model | `README.md` projections rules | Projection claim remains current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-system` | Provider hooks feed a private event store; adjudication assigns promote/hold/reject; default retrieval returns promoted meaning; MCP, CLI, and projections are interfaces. | local-only / implemented model | `README.md` How it fits + What works today loop; `CHANGELOG.md` 6.0.0 | Capture remains dumb; optional agentic feed is post-commit and fail-open | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-capture` | Selected lifecycle events enter an encrypted outbox and local store; host hooks stay fail-open and fast. | local-only | `README.md` Capture from tools; `CHANGELOG.md` 6.0.0 | Capture path never calls LLM; agentic feed insert only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-adjudicate` | Post-capture rules assign promote, hold, or reject; held items wait for operator review; nothing auto-accepts a claim. | local-only / implemented model | `README.md` adjudication table; `CHANGELOG.md` 6.0.0/6.1.0 | Automatic AcceptanceDecision remains off; agentic default is hold-first | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-retrieve` | Default search is promoted/active only; local graph and hybrid ranking return bounded results with provenance rechecked. | local-only | `README.md` product 3.0 + retrieval; `CHANGELOG.md` 3.0.0 | GraphRAG ranking remains planned residual (not claimed shipped as Product 6 thesis complete) | `innocarpe` · 2026-08-07 · `APPROVED` |
| `how-use` | People and agents use CLI, local MCP, Obsidian notes, and OKF export projections. | local-only | `README.md` Interfaces section; `CHANGELOG.md` 6.0.0 CLI agentic surfaces | Interfaces remain local | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interfaces-status` | Interfaces are local and share the same underlying model; projections can be rebuilt. | local-only | `README.md` Interfaces + What works today | No hosted interface claimed | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-cli` | CLI supports capture, adjudication, search, rebuild, and context packs. | local-only | `README.md` CLI bullet list; `CHANGELOG.md` 6.0.0/6.1.0 | Published CLI `6.1.0` retains core surfaces and adds `carpeos agentic …` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-mcp` | MCP over stdio exposes nine local tools, including `memory_neighborhood`. | local-only | `docs/contracts/mcp-tools-v1.json` (9 tools) | Runtime inventory is nine tools at `v6.1.0` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-obsidian` | Obsidian Markdown is generated from the local store and is rebuildable. | local-only / projection | `README.md` Obsidian projection | Projection package is local only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `interface-okf` | OKF v0.2 export writes a trust-zone-scoped, promoted-by-default portable bundle; export only, not import or canonical storage. | local-only / projection | `README.md` OKF bullet; `docs/guides/okf-export.md`; `CHANGELOG.md` 3.1.0 | Shipped in 3.1; retained in 6.x package | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-not-fact` | A model suggestion is not automatically a fact. | implemented model | `README.md` model language | Model semantics only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-promoted-default` | Default search is promoted and active only; held drafts require opt-in. | implemented model | `README.md` adjudication + retrieval defaults | Held opt-in flags documented | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-append-only` | Dispositions and events are append-only by policy version. | implemented model | `README.md` How it fits rules; `CHANGELOG.md` 2.0/3.2/6.0 | Model semantics only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-query-derived` | Accepted status is derived at query time. | implemented model | `README.md` acceptance rules | Model semantics only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-sensitive-boundary` | Sensitive plaintext stays outside the event body. | implemented safety boundary | `README.md` rules + public boundary | Public boundary review found no runtime/private material in this website | `innocarpe` · 2026-08-07 · `APPROVED` |
| `model-trust-zones` | Trust zones are isolation boundaries rather than decorative labels. | implemented safety model | `README.md` rules | Model semantics only | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-node` | CarpeOS requires Node.js 22.22 or newer. | current prerequisite | `README.md` Install; npm engines `>=22.22.0` | npm `@innocarpe/carpeos@6.1.0` reports `engines.node >=22.22.0` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-npm` | `npm install -g @innocarpe/carpeos` | release-verified command | `README.md` Install | `@innocarpe/carpeos@6.1.0` is published on npm | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-pin` | Pin `@innocarpe/carpeos@6.1.0` for a fixed release. | release pin guidance | npm registry exact version; GitHub Release `v6.1.0` | Exact version exists on registry (latest public package) | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-plan` | `carpeos setup plan` | release-verified non-mutating command | `README.md` setup surface | Plan mode remains non-mutating without `--apply` | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-apply` | `carpeos setup run --apply` | release-verified mutating command | `README.md` setup; product activation path | Last formal disposable-home activation receipt lineage remains product 3.2/setup docs; setup path is still the documented product path | `innocarpe` · 2026-08-07 · `APPROVED_WITH_CAVEAT` |
| `install-hooks` | `carpeos setup hooks install --apply` | release-documented mutating command | `README.md` product path; `CHANGELOG.md` 5.0.1 multi-host | Merge-safe hooks install is the documented product path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `install-hosting-boundary` | “Local-first. Interfaces ship on your machine; no hosted Worker, hosted MCP, or SaaS deployment is claimed.” | local-only / not deployed | `README.md` What works today NOT DEPLOYED | No hosted capability is presented as live | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-scope` | Detailed contracts, guides, ADRs, and implementation status live with the public source. | neutral destination statement | `README.md` documentation index | All rendered GitHub destinations are public paths | `innocarpe` · 2026-08-07 · `APPROVED` |
| `footer-description` | CarpeOS is a local-first personal knowledge OS for people who work with AI agents. | neutral positioning / local-first | `README.md` intro | Source description remains current | `innocarpe` · 2026-08-07 · `APPROVED` |
| `footer-version` | Footer release link → `https://github.com/innocarpe/carpeos/releases/tag/v6.1.0` | current release destination | GitHub Release `v6.1.0`; npm `6.1.0` | Non-draft, non-prerelease release exists; also prior major `v6.0.0` exists | `innocarpe` · 2026-08-07 · `APPROVED` |

## Documentation-hub claims and destinations

| ID | Rendered claim or destination | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `docs-status` | CarpeOS is local-first and open source; current public package is `@innocarpe/carpeos@6.1.0`; contracts, ADRs, product DoDs, and verification live in the public source. | shipped release / local-only | `CHANGELOG.md` `[6.1.0]`; npm `@innocarpe/carpeos@6.1.0`; GitHub Release `v6.1.0` | Public destinations are versioned with source | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-model-summary` | Evidence is not a claim; default search is promoted only; projections are not canonical; accepted status is provenance-derived. | implemented model | `README.md` adjudication + rules | Model summary remains within source semantics | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-architecture` | Architecture overview → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/overview.md` | current public destination | `README.md` architecture links | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-memory-capacity` | Memory capacity → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/memory-capacity.md` | current public destination | `README.md` memory capacity | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-adrs` | Architecture decisions → `https://github.com/innocarpe/carpeos/tree/main/docs/adr` | current public destination | `README.md` ADRs | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-spec` | v1 specification → `https://github.com/innocarpe/carpeos/tree/main/spec/v1` | current public destination | `README.md` spec/v1 | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-install` | One-stop install → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/one-stop-install.md` | current public destination | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-capture` | Local capture → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/local-capture.md` | current public destination | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-adapters` | Provider adapters → `https://github.com/innocarpe/carpeos/tree/main/adapters` | current public destination / local capture | `README.md` adapters | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-retrieval` | Retrieval guide → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/retrieval.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-guide` | MCP server → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-server.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-contract` | MCP tool contract → `https://github.com/innocarpe/carpeos/blob/main/docs/contracts/mcp-tools-v1.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-okf` | OKF export → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/okf-export.md` | current public destination / local-only | `README.md` guides table; `CHANGELOG.md` 3.1.0 | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-mcp-smoke` | Context-pack smoke → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-context-pack-smoke.md` | current public destination / synthetic verification | `README.md` guides table | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-works-today` | What works today → `https://github.com/innocarpe/carpeos#what-works-today` | current status destination | `README.md` What works today | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-product-60` | Product 6.0.0 DoD → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/product-6.0.0.md` | current major product destination | `CHANGELOG.md` `[6.0.0]`; `docs/maintainers/product-6.0.0.md`; package pin is `6.1.0` | Public path; hold-first agentic major; 6.1.0 adds P3 narrow auto-promote opt-in | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-releases` | Releases → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/versioning-and-releases.md` | current public destination | `README.md` versioning | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-public-boundary` | Public boundary → `https://github.com/innocarpe/carpeos/blob/main/AGENTS.md` | current safety destination | `README.md` contributing / boundary | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `docs-license` | Apache-2.0 → `https://github.com/innocarpe/carpeos/blob/main/LICENSE` | current license destination | `README.md` License | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |
| `project-source` | Source / GitHub CTAs → `https://github.com/innocarpe/carpeos` | current public destination | `README.md` repo identity | Public path | `innocarpe` · 2026-08-07 · `APPROVED` |

## Internal destination ledger

These paths are site navigation, not product-capability claims. `scripts/validate.mjs` resolves each path relative to its containing document and verifies its fragment target.

| Rendered destination family | Approved local targets |
|---|---|
| Landing navigation and CTAs | `#main-content`, `#top`, `#why`, `#how`, `#interfaces`, `#model`, `#install`, `#docs` |
| Landing → docs hub | `docs/index.html` |
| Docs hub → landing | `../index.html#top`, `../index.html#why`, `../index.html#how`, `../index.html#interfaces`, `../index.html#install` |

## Release-time verification

Verified on 2026-08-07 against product `6.1.0` (current pin; major `6.0.0` also shipped):

- Immutable GitHub Release: <https://github.com/innocarpe/carpeos/releases/tag/v6.1.0> (`v6.1.0`, not a draft or prerelease).
- Prior major: <https://github.com/innocarpe/carpeos/releases/tag/v6.0.0> (`v6.0.0`, hold-first Agentic Layer).
- Version-specific npm metadata: <https://registry.npmjs.org/@innocarpe%2Fcarpeos/6.1.0> (`@innocarpe/carpeos@6.1.0`, Node.js `>=22.22.0`).
- Annotated tag object target commit: `406cb97aef84775b75ed91ff434de87bcb8356b4`.
- npm package integrity (registry): `sha512-UXddtl9iPPU53zNTUsVwkWU2ROE1pq+pszMJTuqX7nsXXI4fUXnAh+WE9nNDGGjEYzfeTyHY1NihL68dMFJLOg==`.
- `CHANGELOG.md` `[6.0.0]` records Product 6 hold-first Agentic Layer (ADR 0017; capture never LLM; no automatic AcceptanceDecision). `[6.1.0]` adds P3 narrow auto-promote precision suite as explicit opt-in only.
- Product 6.0.0 DoD: `docs/maintainers/product-6.0.0.md`. Residuals (P4–P6 planned GraphRAG density/draft Claims) remain unclaimed.
- MCP runtime inventory at `v6.1.0` lists nine tools including `memory_neighborhood` (`docs/contracts/mcp-tools-v1.json`).
- Website asset digests remain unchanged from the original provenance pin (see `PROVENANCE.md`).

## Deliberate non-claims

The website does not present hosted graph adapters, a hosted Worker production deploy (including Cloudflare Worker telemetry), hosted MCP, multi-tenant SaaS, automatic Claim/AcceptanceDecision creation, or B1 policy-reconciliation apply/writer/receipt as implemented. B0 `reconcile-policy` is documented in source as preview-only. Product 4 live trust-plane workflows remain workflow_dispatch-only until ownership/App activation; independent release authority is not claimed as complete. Product 5 draft-lane work is opt-in and not on the capture hot path. Product 6 agentic path is hold-first by default; auto-promote requires explicit opt-in; GraphRAG ranking remains planned and the full “knowledge product finished” thesis is not claimed. Future capabilities remain documented as planned in the CarpeOS source repository until implementation and tests exist.
