# CarpeOS website

The static marketing and documentation site for [CarpeOS](https://github.com/innocarpe/carpeos). It uses dependency-free HTML, CSS, and JavaScript and is published from the repository root with GitHub Pages.

## Local preview

Serve the parent directory so the site runs under the same project-base shape used by GitHub Pages:

```sh
cd ..
python3 -m http.server 8080
```

Open:

- <http://127.0.0.1:8080/carpeos-website/>
- <http://127.0.0.1:8080/carpeos-website/docs/>

Serving `carpeos-website` itself at `/` is not the required validation shape because project Pages publishes under `/carpeos-website/`.

## Validate

No dependency installation is required.

```sh
node scripts/validate.mjs
node scripts/validate.mjs --self-test
```

The validator checks required files, asset digests, case-sensitive local references, fragments, project-base-safe paths, external-link hardening, provenance, claims evidence, and the public-data boundary. Its self-test proves that missing assets, root-relative paths, and broken fragments fail closed.

## Publishing

GitHub Pages is configured to publish the `main` branch from `/`.

1. Validate locally.
2. Commit and push to `main`.
3. Confirm the Pages deployment and inspect the live project-base URLs.

The site intentionally has no framework, package manifest, build output, custom-domain `CNAME`, Vercel configuration, or release-sync automation.

## Evidence

- `PROVENANCE.md` records asset rights, source commit/blob identifiers, and published digests.
- `CLAIMS.md` maps public copy and commands to CarpeOS source evidence.
- `LICENSE` contains the Apache License 2.0.
