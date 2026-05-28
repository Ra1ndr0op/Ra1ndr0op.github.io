$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$requiredFiles = @(
  "index.html",
  "styles.css",
  "CNAME",
  "assets\\.gitkeep",
  "functions\\api\\subscribe.ts",
  "schema.sql",
  "package.json",
  "scripts\\init-local-d1.ps1",
  "scripts\\init-remote-d1.ps1"
)

foreach ($relativePath in $requiredFiles) {
  $fullPath = Join-Path $root $relativePath
  if (-not (Test-Path -LiteralPath $fullPath)) {
    throw "Missing required file: $relativePath"
  }
}

$index = Get-Content -Raw -Encoding UTF8 (Join-Path $root "index.html")
if ($index -notmatch "Ra1ndr0op") { throw "index.html must contain site title" }
if ($index -notmatch 'id="waitlist-form"') { throw "index.html must contain waitlist form" }
if ($index -notmatch 'type="email"') { throw "index.html must contain email input" }
if ($index -notmatch "/api/subscribe") { throw "index.html must submit to /api/subscribe" }
$waitlistCopy = -join ([char[]](0x7559, 0x4E0B, 0x90AE, 0x7BB1))
if ($index -notmatch $waitlistCopy) { throw "index.html must contain readable Chinese waitlist copy" }

$styles = Get-Content -Raw -Encoding UTF8 (Join-Path $root "styles.css")
if ($styles -notmatch ":root") { throw "styles.css must define root variables" }
if ($styles -notmatch "waitlist-form") { throw "styles.css must style the waitlist form" }

$api = Get-Content -Raw -Encoding UTF8 (Join-Path $root "functions\api\subscribe.ts")
if ($api -notmatch "waitlist_db") { throw "subscribe.ts must use waitlist_db D1 binding" }
if ($api -notmatch "INSERT INTO emails") { throw "subscribe.ts must insert into emails table" }
if ($api -notmatch "UNIQUE") { throw "subscribe.ts must handle duplicate email errors" }

$schema = Get-Content -Raw -Encoding UTF8 (Join-Path $root "schema.sql")
if ($schema -notmatch "CREATE TABLE IF NOT EXISTS emails") { throw "schema.sql must create emails table" }
if ($schema -notmatch "email TEXT UNIQUE NOT NULL") { throw "schema.sql must enforce unique emails" }

$package = Get-Content -Raw -Encoding UTF8 (Join-Path $root "package.json") | ConvertFrom-Json
$scripts = $package.scripts
foreach ($scriptName in @("dev", "db:init:local", "db:init:remote", "verify")) {
  if (-not $scripts.PSObject.Properties.Name.Contains($scriptName)) {
    throw "package.json must define script: $scriptName"
  }
}

$cname = (Get-Content -Raw -Encoding UTF8 (Join-Path $root "CNAME")).Trim()
if ($cname -ne "www.raindropcn.com") { throw "CNAME must equal www.raindropcn.com" }

Write-Host "Verification passed"
