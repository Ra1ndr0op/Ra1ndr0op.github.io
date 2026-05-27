$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$requiredFiles = @(
  "index.html",
  "styles.css",
  "CNAME",
  "assets\\.gitkeep"
)

foreach ($relativePath in $requiredFiles) {
  $fullPath = Join-Path $root $relativePath
  if (-not (Test-Path -LiteralPath $fullPath)) {
    throw "Missing required file: $relativePath"
  }
}

$index = Get-Content -Raw -Encoding UTF8 (Join-Path $root "index.html")
if ($index -notmatch "Ra1ndr0op") { throw "index.html must contain site title" }
if ($index -notmatch 'id="about"') { throw "index.html must contain About section" }
if ($index -notmatch 'id="links"') { throw "index.html must contain Links section" }
if ($index -notmatch 'id="contact"') { throw "index.html must contain Contact section" }

$styles = Get-Content -Raw -Encoding UTF8 (Join-Path $root "styles.css")
if ($styles -notmatch ":root") { throw "styles.css must define root variables" }

$cname = (Get-Content -Raw -Encoding UTF8 (Join-Path $root "CNAME")).Trim()
if ($cname -ne "www.raindropcn.com") { throw "CNAME must equal www.raindropcn.com" }

Write-Host "Verification passed"
