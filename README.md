# Shipcheck Demo App

[![ci](https://github.com/TateLyman/shipcheck-demo-app/actions/workflows/ci.yml/badge.svg)](https://github.com/TateLyman/shipcheck-demo-app/actions/workflows/ci.yml)
[![shipcheck](https://github.com/TateLyman/shipcheck-demo-app/actions/workflows/shipcheck.yml/badge.svg)](https://github.com/TateLyman/shipcheck-demo-app/actions/workflows/shipcheck.yml)

This is a tiny demo repository for [Shipcheck](https://github.com/TateLyman/shipcheck-cli).

It intentionally contains common launch gaps that are safe to publish:

- Supabase client usage without checked-in data-boundary proof
- a debug API route that should not ship to production

The repository is not a real application and does not contain working credentials. It exists so builders can inspect how Shipcheck reports findings, writes SARIF, and uploads the result into GitHub code scanning.

Code scanning demo:

https://github.com/TateLyman/shipcheck-demo-app/security/code-scanning

## Run

```bash
npx --yes shipcheck-cli . --format markdown
```

## GitHub Action

The workflow in `.github/workflows/shipcheck.yml` runs:

```yaml
- uses: TateLyman/shipcheck-action@v1
  with:
    format: sarif
    output: shipcheck.sarif
    fail-on: high
    strict: true
```

`fail-on: high` keeps this demo green while medium and low findings still appear in the report.
