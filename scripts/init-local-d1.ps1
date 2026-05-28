$ErrorActionPreference = "Stop"
$root = Resolve-Path (Join-Path $PSScriptRoot "..")
$configDir = Join-Path $root ".wrangler"
$configPath = Join-Path $configDir "wrangler.local.toml"

New-Item -ItemType Directory -Force -Path $configDir | Out-Null

$config = @'
name = "ra1ndr0op-waitlist-local"
compatibility_date = "2026-05-28"
pages_build_output_dir = "."

[[d1_databases]]
binding = "waitlist_db"
database_name = "waitlist-db"
database_id = "waitlist_db"
'@

Set-Content -Path $configPath -Value $config -Encoding UTF8

Push-Location $root
try {
  wrangler d1 execute waitlist-db --local --file=./schema.sql --config=$configPath --persist-to=./.wrangler/state
}
finally {
  Pop-Location
}
