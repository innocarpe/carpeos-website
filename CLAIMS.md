# Public claims evidence

## Ledger metadata

- Source repository: <https://github.com/innocarpe/carpeos>
- Immutable source commit: `699dcdfbf45804f20e6b4cd6f5ddc7f23b1dca94`
- Immutable source document: `README.md` at that commit
- Release review: `innocarpe` · 2026-07-29
- Default disposition unless noted: `APPROVED`

Line ranges below refer to the immutable source document. Each row covers one rendered factual sentence, status, command, or destination family. Repeated navigation links use the same approved destination row.

## Landing-page claims

| ID | Rendered claim or command | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `landing-status` | “Pre-MVP · local-first · open source” | pre-MVP / local-only | `README.md:L5-L11`, `L286-L315` | Public source and release exist; hosted product deployment is not claimed | `innocarpe` · 2026-07-29 · `APPROVED` |
| `landing-hero-summary` | CarpeOS keeps decisions, evidence, and failure paths from AI-agent work with provenance and explicit status. | implemented model / neutral positioning | `README.md:L11-L15`, `L29-L44`, `L77-L82` | Copy remains within the pinned model and current local implementation | `innocarpe` · 2026-07-29 · `APPROVED` |
| `landing-public-private` | “Public code. Private knowledge. Not hosted SaaS.” | public boundary / not deployed | `README.md:L46-L48`, `L64-L65`, `L313-L318`, `L322-L331` | Public repository confirmed; no hosted SaaS claim made | `innocarpe` · 2026-07-29 · `APPROVED` |
| `principle-append-only` | “Append-only events” | implemented model | `README.md:L40-L41`, `L153-L160` | Model claim only; no hosted claim | `innocarpe` · 2026-07-29 · `APPROVED` |
| `principle-acceptance` | “Explicit acceptance” | implemented model | `README.md:L41-L41`, `L77-L91`, `L153-L160` | Acceptance remains separate and query-derived | `innocarpe` · 2026-07-29 · `APPROVED` |
| `principle-local` | “Local by default” | local-only | `README.md:L44-L44`, `L61-L65`, `L103-L107` | Local runtime path is current; private sync is optional | `innocarpe` · 2026-07-29 · `APPROVED` |
| `principle-projections` | “Rebuildable projections” | implemented model / local-only | `README.md:L43-L44`, `L100-L107`, `L159-L160` | Obsidian is a local projection, not canonical knowledge | `innocarpe` · 2026-07-29 · `APPROVED` |
| `why-context-loss` | Valuable decisions and bug paths are split across chat history, terminal scrollback, and notes. | problem statement | `README.md:L27-L36` | Neutral product rationale | `innocarpe` · 2026-07-29 · `APPROVED` |
| `why-history-trust` | Agent history mixes facts, guesses, drafts, and abandoned paths; records keep evidence, claims, acceptance, and supersession distinct. | implemented model | `README.md:L34-L44`, `L77-L82` | Model distinction remains current | `innocarpe` · 2026-07-29 · `APPROVED` |
| `why-tool-silos` | Provider-neutral capture and shared MCP retrieval reduce separate tool-memory silos. | local-only | `README.md:L42-L42`, `L71-L75`, `L94-L101` | Codex, Claude Code, and Grok Build templates plus local MCP are in the source | `innocarpe` · 2026-07-29 · `APPROVED` |
| `why-projection-authority` | Notes and indexes are rebuildable projections rather than canonical authority. | implemented model | `README.md:L43-L43`, `L100-L107`, `L159-L160` | Projection claim remains current | `innocarpe` · 2026-07-29 · `APPROVED` |
| `why-private-sync` | A local-first store may use optional private, operator-run sync. | optional self-hosted | `README.md:L44-L44`, `L61-L65`, `L103-L107`, `L301-L315` | Sync code and local tests exist; no production deploy is claimed | `innocarpe` · 2026-07-29 · `APPROVED` |
| `how-system` | Provider hooks feed a canonical event trail; accepted facts are query-derived; MCP, CLI, and Obsidian are interfaces/projections. | local-only / implemented model | `README.md:L71-L107`, `L141-L160` | Local path is implemented and synthetically tested | `innocarpe` · 2026-07-29 · `APPROVED` |
| `how-capture` | Selected lifecycle events enter an encrypted outbox and local store. | local-only | `README.md:L71-L75`, `L103-L120`, `L288-L300` | Local capture and outbox are implemented with synthetic tests | `innocarpe` · 2026-07-29 · `APPROVED` |
| `how-canonicalize` | Evidence, observations, claims, decisions, and supersession keep distinct roles. | implemented model | `README.md:L77-L91`, `L153-L160` | Ontology/model statement remains current | `innocarpe` · 2026-07-29 · `APPROVED` |
| `how-retrieve` | Search and context packs return bounded results with provenance rechecked. | local-only | `README.md:L94-L101`, `L169-L186`, `L286-L305` | Local retrieval and expert-slot context packs are implemented | `innocarpe` · 2026-07-29 · `APPROVED` |
| `how-use` | People and agents use the local trail through CLI, MCP, and rebuildable projections. | local-only | `README.md:L94-L107`, `L141-L160` | Interfaces remain local | `innocarpe` · 2026-07-29 · `APPROVED` |
| `interfaces-status` | Current interfaces are local and pre-MVP and share the same underlying model. | pre-MVP / local-only | `README.md:L94-L107`, `L286-L315` | Current release remains pre-MVP | `innocarpe` · 2026-07-29 · `APPROVED` |
| `interface-cli` | CLI supports search, individual retrieval, and bounded context packs. | local-only | `README.md:L94-L101`, `L241-L247`, `L302-L305` | Published CLI `0.2.0` was invoked successfully | `innocarpe` · 2026-07-29 · `APPROVED` |
| `interface-mcp` | MCP over stdio exposes eight local tools. | local-only | `README.md:L94-L101`, `L303-L304` | Source and docs still describe eight local tools | `innocarpe` · 2026-07-29 · `APPROVED` |
| `interface-obsidian` | Obsidian Markdown is generated from the local store and is rebuildable. | local-only / projection | `README.md:L100-L107`, `L159-L160`, `L307-L307` | Projection package is local only | `innocarpe` · 2026-07-29 · `APPROVED` |
| `model-not-fact` | A model suggestion is not automatically a fact. | implemented model | `README.md:L34-L36`, `L77-L91` | Model semantics only | `innocarpe` · 2026-07-29 · `APPROVED` |
| `model-query-derived` | Accepted status is derived at query time. | implemented model | `README.md:L84-L91`, `L141-L160` | Model semantics only | `innocarpe` · 2026-07-29 · `APPROVED` |
| `model-append-only` | After acceptance, the event log is append-only. | implemented model | `README.md:L153-L160` | Model semantics only | `innocarpe` · 2026-07-29 · `APPROVED` |
| `model-sensitive-boundary` | Sensitive plaintext stays outside the event body. | implemented safety boundary | `README.md:L153-L160`, `L322-L331` | Public boundary review found no runtime/private material in this website | `innocarpe` · 2026-07-29 · `APPROVED` |
| `model-trust-zones` | Trust zones are isolation boundaries rather than decorative labels. | implemented safety model | `README.md:L153-L160` | Model semantics only | `innocarpe` · 2026-07-29 · `APPROVED` |
| `install-node` | CarpeOS requires Node.js 22.22 or newer. | current prerequisite | `README.md:L5-L7`, `L190-L200` | npm `@innocarpe/carpeos@0.2.0` reports `engines.node >=22.22.0`; tested with Node `v22.22.0` | `innocarpe` · 2026-07-29 · `APPROVED` |
| `install-npm` | `npm install -g @innocarpe/carpeos` | release-verified command | `README.md:L194-L204` | `@innocarpe/carpeos@0.2.0` installed into an isolated temporary prefix | `innocarpe` · 2026-07-29 · `APPROVED` |
| `install-plan` | `carpeos setup plan` | release-verified non-mutating command | `README.md:L194-L220` | Published `0.2.0` printed resolved paths/actions with isolated `--home`, `--bin-dir`, `--workspace-root`, and `--register-mcp none`; no changes in plan mode | `innocarpe` · 2026-07-29 · `APPROVED` |
| `install-apply` | `carpeos setup run --apply` | release-verified mutating command | `README.md:L194-L220` | Published `0.2.0` applied only inside isolated temporary directories; wrappers, config, and local store were created. The follow-up doctor reported expected unregistered-host failures under `--register-mcp none`, so the website makes no doctor-success claim. | `innocarpe` · 2026-07-29 · `APPROVED_WITH_CAVEAT` |
| `install-hosting-boundary` | “Pre-MVP. Local interfaces are implemented; no hosted Worker, hosted MCP, or SaaS deployment is claimed.” | pre-MVP / local-only / not deployed | `README.md:L286-L318` | No hosted capability is presented as live | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-scope` | Detailed contracts, guides, ADRs, and implementation status live with the public source. | neutral destination statement | `README.md:L162-L167`, `L250-L277`, `L286-L318`, `L345-L348` | All rendered GitHub destinations returned HTTP 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `footer-description` | CarpeOS is a local-first personal knowledge system for people who work with AI agents. | neutral positioning / local-first | `README.md:L9-L15`, `L61-L65` | Source description remains current | `innocarpe` · 2026-07-29 · `APPROVED` |

## Documentation-hub claims and destinations

| ID | Rendered claim or destination | Classification | Immutable evidence | Release-time observation | Reviewer · date · disposition |
|---|---|---|---|---|---|
| `docs-status` | CarpeOS is pre-MVP and local-first; implementation status, contracts, ADRs, and verification live in the public source. | pre-MVP / local-only | `README.md:L5-L15`, `L162-L167`, `L286-L318`, `L345-L352` | Public destinations returned HTTP 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-model-summary` | Evidence is not a claim; projections are not canonical; accepted status is provenance-derived. | implemented model | `README.md:L77-L91`, `L141-L160` | Model summary remains within source semantics | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-architecture` | Architecture overview → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/overview.md` | current public destination | `README.md:L162-L167` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-memory-capacity` | Memory capacity → `https://github.com/innocarpe/carpeos/blob/main/docs/architecture/memory-capacity.md` | current public destination | `README.md:L162-L186` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-adrs` | Architecture decisions → `https://github.com/innocarpe/carpeos/tree/main/docs/adr` | current public destination | `README.md:L162-L167` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-spec` | v1 specification → `https://github.com/innocarpe/carpeos/tree/main/spec/v1` | current public destination | `README.md:L162-L167` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-install` | One-stop install → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/one-stop-install.md` | current public destination | `README.md:L250-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-capture` | Local capture → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/local-capture.md` | current public destination | `README.md:L250-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-adapters` | Provider adapters → `https://github.com/innocarpe/carpeos/tree/main/adapters` | current public destination / local capture | `README.md:L71-L75`, `L250-L254` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-retrieval` | Retrieval guide → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/retrieval.md` | current public destination / local-only | `README.md:L269-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-mcp-guide` | MCP server → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-server.md` | current public destination / local-only | `README.md:L250-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-mcp-contract` | MCP tool contract → `https://github.com/innocarpe/carpeos/blob/main/docs/contracts/mcp-tools-v1.md` | current public destination / local-only | `README.md:L269-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-mcp-smoke` | Context-pack smoke → `https://github.com/innocarpe/carpeos/blob/main/docs/guides/mcp-context-pack-smoke.md` | current public destination / synthetic verification | `README.md:L250-L277` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-works-today` | What works today → `https://github.com/innocarpe/carpeos#what-works-today` | current status destination | `README.md:L286-L318` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-releases` | Releases → `https://github.com/innocarpe/carpeos/blob/main/docs/maintainers/versioning-and-releases.md` | current public destination | `README.md:L265-L277`, `L313-L315` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-public-boundary` | Public boundary → `https://github.com/innocarpe/carpeos/blob/main/AGENTS.md` | current safety destination | `README.md:L322-L331`, `L345-L348` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `docs-license` | Apache-2.0 → `https://github.com/innocarpe/carpeos/blob/main/LICENSE` | current license destination | `README.md:L364-L366` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |
| `project-source` | Source / GitHub CTAs → `https://github.com/innocarpe/carpeos` | current public destination | `README.md:L46-L48`, `L322-L331`, `L345-L348` | Redirect-following GET returned 200 | `innocarpe` · 2026-07-29 · `APPROVED` |

## Internal destination ledger

These paths are site navigation, not product-capability claims. `scripts/validate.mjs` resolves each path relative to its containing document and verifies its fragment target.

| Rendered destination family | Approved local targets |
|---|---|
| Landing navigation and CTAs | `#main-content`, `#top`, `#why`, `#how`, `#interfaces`, `#model`, `#install`, `#docs` |
| Landing → docs hub | `docs/index.html` |
| Docs hub → landing | `../index.html#top`, `../index.html#why`, `../index.html#how`, `../index.html#interfaces`, `../index.html#install` |

## Release-time verification

Verified on 2026-07-29:

- Immutable GitHub Release: <https://github.com/innocarpe/carpeos/releases/tag/v0.2.0> (`v0.2.0`, not a draft or prerelease).
- Version-specific npm metadata: <https://registry.npmjs.org/@innocarpe%2Fcarpeos/0.2.0> (`@innocarpe/carpeos@0.2.0`, Node.js `>=22.22.0`).
- Immutable installer source: <https://raw.githubusercontent.com/innocarpe/carpeos/699dcdfbf45804f20e6b4cd6f5ddc7f23b1dca94/scripts/install.sh>.
- The immutable installer, current public `main`, and live raw installer matched SHA-256 `39cb8f67f15c24d6fc4721ce8ec27d1147f8a33853d66729cb5f923e7616d677`.
- The published package was installed into an isolated temporary prefix. `carpeos version`, `carpeos setup --help`, `carpeos setup plan`, and `carpeos setup run --apply` were exercised with temporary home/bin/workspace paths and MCP registration disabled.
- `setup run --apply` created the intended isolated wrappers, config, and store. A separate `setup doctor` reported unregistered Claude/Codex/Grok hosts under the deliberate `--register-mcp none` test mode; no doctor-success claim appears on the website.
- Sixteen unique rendered GitHub documentation/source destinations returned HTTP 200 with redirects followed.

## Deliberate non-claims

The website does not present GraphRAG, a hosted Worker, hosted MCP, SaaS, or production hosted deployment as implemented. Future capabilities remain documented as planned in the CarpeOS source repository until implementation and tests exist.
