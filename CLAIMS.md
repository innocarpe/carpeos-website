# Public claims evidence

## Ledger metadata

- Source repository: <https://github.com/innocarpe/carpeos>
- Immutable source commit (release tag `v4.0.0`): `be1691d2cd6bab8077a1e10dafcaa64cada3c2e3`
- Immutable source document: `README.md` at that commit (plus `CHANGELOG.md`, product DoDs, and MCP contract)
- Asset digests remain pinned to the original website provenance commit for binary assets (see `PROVENANCE.md`)
- Release review: `innocarpe` · 2026-08-06
- Default disposition unless noted: `APPROVED`

Line ranges below refer to the immutable source documents at `v4.0.0` unless noted. Each row covers one rendered factual sentence, status, command, or destination family. Repeated navigation links use the same approved destination row.

## Landing-page claims

| ID | Rendered claim or command | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `landing-status` | “v4.0 · local-first · open source” | shipped release / local-only | `CHANGELOG.md` `[4.0.0]`; GitHub Release `v4.0.0`; npm `@innocarpe/carpeos@4.0.0` | Public package `4.0.0` is published; hosted product deployment is not claimed | `innocarpe` · 2026-08-06 · `APPROVED` |
| `landing-hero-summary` | CarpeOS captures agent sessions with provenance, adjudicates durable meaning, and returns promoted knowledge with explicit status. | implemented model / local-only | `README.md` intro + adjudication section + product line table | Copy matches shipped 2.0 adjudication + 3.x retrieval path retained in 4.0 | `innocarpe` · 2026-08-06 · `APPROVED` |
| `landing-public-private` | “Public code. Private knowledge. Not hosted SaaS.” | public boundary / not deployed | `README.md` public/private callout; What works today NOT DEPLOYED | Public repository confirmed; no hosted SaaS claim made | `innocarpe` · 2026-08-06 · `APPROVED` |
| `principle-append-only` | “Append-only events” | implemented model | `README.md` “How it fits together” rules | Model claim only; no hosted claim | `innocarpe` · 2026-08-06 · `APPROVED` |
| `principle-adjudication` | “Adjudicated meaning” | implemented model / local-only | `README.md` Adjudicate before “memory”; `CHANGELOG.md` 2.0/3.2 | `adj_v3` remains foundation under 4.0 | `innocarpe` · 2026-08-06 · `APPROVED` |
| `principle-promoted` | “Promoted-only default” | implemented model / local-only | `README.md` default search promoted/active only | Held requires explicit opt-in | `innocarpe` · 2026-08-06 · `APPROVED` |
| `principle-projections` | “Rebuildable projections” | implemented model / local-only | `README.md` projections and OKF export | Obsidian and OKF are projections, not canonical | `innocarpe` · 2026-08-06 · `APPROVED` |
| `why-context-loss` | Valuable decisions and bug paths are split across chat history, terminal scrollback, and notes. | problem statement | `README.md` Why this exists | Neutral product rationale | `innocarpe` · 2026-08-06 · `APPROVED` |
| `why-history-trust` | Agent history mixes facts, guesses, drafts, and abandoned paths; records keep evidence, claims, acceptance, and supersession distinct. | implemented model | `README.md` model section | Model distinction remains current | `innocarpe` · 2026-08-06 · `APPROVED` |
| `why-session-noise` | Not every lifecycle event should become searchable meaning; adjudicate promote/hold/reject with promoted-only default search. | implemented model / local-only | `README.md` Adjudicate before “memory”; `CHANGELOG.md` 2.0.0 | Shipped adjudication path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `why-tool-silos` | Provider-neutral capture and shared MCP retrieval reduce separate tool-memory silos. | local-only | `README.md` capture + interfaces | Codex, Claude Code, and Grok Build templates plus local MCP are in the source | `innocarpe` · 2026-08-06 · `APPROVED` |
| `why-projection-authority` | Notes and indexes are rebuildable projections rather than canonical authority. | implemented model | `README.md` projections rules | Projection claim remains current | `innocarpe` · 2026-08-06 · `APPROVED` |
| `how-system` | Provider hooks feed a private event store; adjudication assigns promote/hold/reject; default retrieval returns promoted meaning; MCP, CLI, and projections are interfaces. | local-only / implemented model | `README.md` How it fits + What works today loop | Local path is implemented and smoke-tested | `innocarpe` · 2026-08-06 · `APPROVED` |
| `how-capture` | Selected lifecycle events enter an encrypted outbox and local store; host hooks stay fail-open and fast. | local-only | `README.md` Capture from tools | Local capture and outbox are implemented | `innocarpe` · 2026-08-06 · `APPROVED` |
| `how-adjudicate` | Post-capture rules assign promote, hold, or reject; held items wait for operator review; nothing auto-accepts a claim. | local-only / implemented model | `README.md` adjudication table; product 3.2 DoD | Automatic Claim / AcceptanceDecision creation remains off | `innocarpe` · 2026-08-06 · `APPROVED` |
| `how-retrieve` | Default search is promoted/active only; local graph and hybrid ranking return bounded results with provenance rechecked. | local-only | `README.md` product 3.0 + retrieval; `CHANGELOG.md` 3.0.0 | Retrieval-first graph/hybrid recall shipped in 3.0; hosted graph adapters remain planned | `innocarpe` · 2026-08-06 · `APPROVED` |
| `how-use` | People and agents use CLI, local MCP, Obsidian notes, and OKF export projections. | local-only | `README.md` Interfaces section | Interfaces remain local | `innocarpe` · 2026-08-06 · `APPROVED` |
| `interfaces-status` | Interfaces are local and share the same underlying model; projections can be rebuilt. | local-only | `README.md` Interfaces + What works today | No hosted interface claimed | `innocarpe` · 2026-08-06 · `APPROVED` |
| `interface-cli` | CLI supports capture, adjudication, search, rebuild, and context packs. | local-only | `README.md` CLI bullet list | Published CLI `4.0.0` retains `adjudicate`, `memory`, `okf` surfaces | `innocarpe` · 2026-08-06 · `APPROVED` |
| `interface-mcp` | MCP over stdio exposes nine local tools, including `memory_neighborhood`. | local-only | `docs/contracts/mcp-tools-v1.json` (9 tools); `apps/carpeos-mcp-server/src/tools.ts` `CARPEOS_MCP_TOOLS` | Runtime inventory is nine tools at `v4.0.0` | `innocarpe` · 2026-08-06 · `APPROVED` |
| `interface-obsidian` | Obsidian Markdown is generated from the local store and is rebuildable. | local-only / projection | `README.md` Obsidian projection | Projection package is local only | `innocarpe` · 2026-08-06 · `APPROVED` |
| `interface-okf` | OKF v0.2 export writes a trust-zone-scoped, promoted-by-default portable bundle; export only, not import or canonical storage. | local-only / projection | `README.md` OKF bullet; `docs/guides/okf-export.md`; `CHANGELOG.md` 3.1.0 | Shipped in 3.1; retained in 4.0 package | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-not-fact` | A model suggestion is not automatically a fact. | implemented model | `README.md` model language | Model semantics only | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-promoted-default` | Default search is promoted and active only; held drafts require opt-in. | implemented model | `README.md` adjudication + retrieval defaults | Held opt-in flags documented | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-append-only` | Dispositions and events are append-only by policy version. | implemented model | `README.md` How it fits rules; `CHANGELOG.md` 2.0/3.2/4.0 | Model semantics only | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-query-derived` | Accepted status is derived at query time. | implemented model | `README.md` acceptance rules | Model semantics only | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-sensitive-boundary` | Sensitive plaintext stays outside the event body. | implemented safety boundary | `README.md` rules + public boundary | Public boundary review found no runtime/private material in this website | `innocarpe` · 2026-08-06 · `APPROVED` |
| `model-trust-zones` | Trust zones are isolation boundaries rather than decorative labels. | implemented safety model | `README.md` rules | Model semantics only | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-node` | CarpeOS requires Node.js 22.22 or newer. | current prerequisite | `README.md` Install; npm engines `>=22.22.0` | npm `@innocarpe/carpeos@4.0.0` reports `engines.node >=22.22.0` | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-npm` | `npm install -g @innocarpe/carpeos` | release-verified command | `README.md` Install; product 3.2 activation path retained | `@innocarpe/carpeos@4.0.0` is published on npm | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-pin` | Pin `@innocarpe/carpeos@4.0.0` for a fixed release. | release pin guidance | npm registry exact version; GitHub Release `v4.0.0` | Exact version exists on registry | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-plan` | `carpeos setup plan` | release-verified non-mutating command | `README.md` setup surface | Plan mode remains non-mutating without `--apply` | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-apply` | `carpeos setup run --apply` | release-verified mutating command | `README.md` setup; product 3.2 activation | Last formal disposable-home activation receipt remains product 3.2; setup path is still the documented product path in 4.0 | `innocarpe` · 2026-08-06 · `APPROVED_WITH_CAVEAT` |
| `install-hooks` | `carpeos setup hooks install --apply` | release-documented mutating command | `README.md` product path | Merge-safe hooks install is the documented product path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `install-hosting-boundary` | “Local-first. Interfaces ship on your machine; no hosted Worker, hosted MCP, or SaaS deployment is claimed.” | local-only / not deployed | `README.md` What works today NOT DEPLOYED | No hosted capability is presented as live | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-scope` | Detailed contracts, guides, ADRs, and implementation status live with the public source. | neutral destination statement | `README.md` documentation index | All rendered GitHub destinations are public paths | `innocarpe` · 2026-08-06 · `APPROVED` |
| `footer-description` | CarpeOS is a local-first personal knowledge OS for people who work with AI agents. | neutral positioning / local-first | `README.md` intro | Source description remains current | `innocarpe` · 2026-08-06 · `APPROVED` |
| `footer-version` | Footer release link → `https://github.com/innocarpe/carpeos/releases/tag/v4.0.0` | current release destination | GitHub Release `v4.0.0`; npm `4.0.0` | Non-draft, non-prerelease release exists | `innocarpe` · 2026-08-06 · `APPROVED` |

## Documentation-hub claims and destinations

| ID | Rendered claim or destination | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `docs-status` | CarpeOS is local-first and open source; current public package is `@innocarpe/carpeos@4.0.0`; contracts, ADRs, product DoDs, and verification live in the public source. | shipped release / local-only | `CHANGELOG.md` `[4.0.0]`; npm `@innocarpe/carpeos@4.0.0`; GitHub Release `v4.0.0` | Public destinations are versioned with source | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-model-summary` | Evidence is not a claim; default search is promoted only; projections are not canonical; accepted status is provenance-derived. | implemented model | `README.md` adjudication + rules | Model summary remains within source semantics | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-architecture` | Architecture overview → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/overview.md` | current public destination | `README.md` architecture links | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-memory-capacity` | Memory capacity → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/memory-capacity.md` | current public destination | `README.md` memory capacity | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-adrs` | Architecture decisions → `https://github.com/innocarpe/carpeos/tree/main/docs/adr` | current public destination | `README.md` ADRs | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-spec` | v1 specification → `https://github.com/innocarpe/carpeos/tree/main/spec/v1` | current public destination | `README.md` spec/v1 | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-install` | One-stop install → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/one-stop-install.md` | current public destination | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-capture` | Local capture → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/local-capture.md` | current public destination | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-adapters` | Provider adapters → `https://github.com/innocarpe/carpeos/tree/main/adapters` | current public destination / local capture | `README.md` adapters | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-retrieval` | Retrieval guide → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/retrieval.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-mcp-guide` | MCP server → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-server.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-mcp-contract` | MCP tool contract → `https://github.com/innocarpe/carpeos/blob/main/docs/contracts/mcp-tools-v1.md` | current public destination / local-only | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-okf` | OKF export → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/okf-export.md` | current public destination / local-only | `README.md` guides table; `CHANGELOG.md` 3.1.0 | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-mcp-smoke` | Context-pack smoke → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-context-pack-smoke.md` | current public destination / synthetic verification | `README.md` guides table | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-works-today` | What works today → `https://github.com/innocarpe/carpeos#what-works-today` | current status destination | `README.md` What works today | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-product-32` | Product 3.2 DoD → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/product-3.2.0.md` | foundation product destination under 4.0 | `README.md` product line; product 3.2 DoD; no `product-4.0.0.md` DoD file at `v4.0.0` | Public path; 4.0 package retains 3.2 foundation while Product 4 is a trust/evidence plane code cut | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-releases` | Releases → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/versioning-and-releases.md` | current public destination | `README.md` versioning | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-public-boundary` | Public boundary → `https://github.com/innocarpe/carpeos/blob/main/AGENTS.md` | current safety destination | `README.md` contributing / boundary | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `docs-license` | Apache-2.0 → `https://github.com/innocarpe/carpeos/blob/main/LICENSE` | current license destination | `README.md` License | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |
| `project-source` | Source / GitHub CTAs → `https://github.com/innocarpe/carpeos` | current public destination | `README.md` repo identity | Public path | `innocarpe` · 2026-08-06 · `APPROVED` |

## Internal destination ledger

These paths are site navigation, not product-capability claims. `scripts/validate.mjs` resolves each path relative to its containing document and verifies its fragment target.

| Rendered destination family | Approved local targets |
|---|---|
| Landing navigation and CTAs | `#main-content`, `#top`, `#why`, `#how`, `#interfaces`, `#model`, `#install`, `#docs` |
| Landing → docs hub | `docs/index.html` |
| Docs hub → landing | `../index.html#top`, `../index.html#why`, `../index.html#how`, `../index.html#interfaces`, `../index.html#install` |

## Release-time verification

Verified on 2026-08-06 against product `4.0.0`:

- Immutable GitHub Release: <https://github.com/innocarpe/carpeos/releases/tag/v4.0.0> (`v4.0.0`, not a draft or prerelease).
- Version-specific npm metadata: <https://registry.npmjs.org/@innocarpe%2Fcarpeos/4.0.0> (`@innocarpe/carpeos@4.0.0`, Node.js `>=22.22.0`).
- Annotated tag object target commit: `be1691d2cd6bab8077a1e10dafcaa64cada3c2e3`.
- npm package integrity (registry): `sha512-r1r9laCIMFdoZ6rKyCSWsoa8Vmp79urZCclZDi/qI0AvQhI4PwTN9Cv1JjRU8d988k7qfF0KnVUcb89AOgnzpQ==`.
- `CHANGELOG.md` `[4.0.0]` records the Product 4.0 governed evidence-plane code cut (trust-plane scripts/contracts, preflight gate). Independent live release authority, human approval, and live settings receipts remain out of band.
- Product 3.2 activation receipt in `docs/maintainers/product-3.2.0.md` remains the last formal disposable synthetic setup/doctor/dogfood/OKF activation record; there is no `product-4.0.0.md` DoD at this tag.
- MCP runtime inventory at `v4.0.0` lists nine tools including `memory_neighborhood` (`docs/contracts/mcp-tools-v1.json`).
- Website asset digests remain unchanged from the original provenance pin (see `PROVENANCE.md`).

## Deliberate non-claims

The website does not present hosted graph adapters, a hosted Worker production deploy, hosted MCP, multi-tenant SaaS, automatic Claim/AcceptanceDecision creation, or B1 policy-reconciliation apply/writer/receipt as implemented. B0 `reconcile-policy` is documented in source as preview-only. Product 4 live trust-plane workflows are workflow_dispatch-only until ownership/App activation; synthetic fixtures are not live authority; independent release authority is not claimed as complete. Future capabilities remain documented as planned in the CarpeOS source repository until implementation and tests exist.
