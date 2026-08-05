# carpeos-website — agent harness

Static marketing + docs site for [CarpeOS](https://github.com/innocarpe/carpeos).
Dependency-free HTML/CSS/JS; published from `main` via GitHub Pages.

## Verify before claiming done

```sh
node scripts/validate.mjs
node scripts/validate.mjs --self-test
```

Serve under the project-base path (not bare `/`):

```sh
cd ..
python3 -m http.server 8080
# http://127.0.0.1:8080/carpeos-website/
# http://127.0.0.1:8080/carpeos-website/docs/
```

## Pull requests — labels mandatory

Every PR must have **exactly one kind** label before create is considered done:

| Kind | Use when |
| --- | --- |
| `feat` | New user-visible page/behavior |
| `fix` | Incorrect or broken layout/behavior |
| `docs` | Copy/docs-only (no runtime change) |
| `spec` | Spec/contract surface only (rare here) |
| `chore` | Tooling, ignore files, harness, CI, housekeeping |

Community labels (`good first issue`, `help wanted`, …) are for issues, not
ordinary feature PRs.

### Create

```bash
KIND=chore   # feat|fix|docs|spec|chore — required

gh pr create --base main --title "<type>: <summary>" \
  --label "$KIND" \
  --body "$(cat <<'EOF'
## Summary
- …

## Test plan
- [x] `node scripts/validate.mjs`
- [x] `node scripts/validate.mjs --self-test`
EOF
)"
```

### Label gate (after create/edit)

```bash
PR=$(gh pr view --json number -q .number)
KIND_COUNT=$(gh pr view "$PR" --json labels -q \
  '[.labels[].name] | map(select(.=="feat" or .=="fix" or .=="docs" or .=="spec" or .=="chore")) | length')
test "$KIND_COUNT" -eq 1 || { echo "LABEL_GATE_FAIL kind_count=$KIND_COUNT" >&2; exit 1; }
```

Global skills (all harnesses): `github-pr`, and for CarpeOS monorepo bodies
`carpeos-pr`.

## Worktree discipline

Prefer an isolated git worktree for branch work so `main` stays clean for
Pages preview and unrelated local edits.
