$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$databaseId = $env:CLOUDFLARE_D1_DATABASE_ID

if (-not $databaseId) {
  throw "Set CLOUDFLARE_D1_DATABASE_ID to the database_id from Cloudflare D1 before running remote init."
}

$configDir = Join-Path $root ".wrangler"
$configPath = Join-Path $configDir "wrangler.remote.toml"

New-Item -ItemType Directory -Force -Path $configDir | Out-Null

$config = @"
name = "ra1ndr0op-waitlist-remote"
compatibility_date = "2026-05-28"
pages_build_output_dir = "."

[[d1_databases]]
binding = "waitlist_db"
database_name = "waitlist-db"
database_id = "$databaseId"
"@

Set-Content -Path $configPath -Value $config -Encoding UTF8

Push-Location $root
try {
  wrangler d1 execute waitlist-db --remote --file=./schema.sql --config=$configPath
}
finally {
  Pop-Location
}
