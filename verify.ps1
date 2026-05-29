$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

$requiredFiles = @(
  "index.html",
  "styles.css",
  "CNAME",
  "assets\\.gitkeep",
  "assets\\creator-workspace.webp",
  "functions\\api\\subscribe.ts",
  "schema.sql",
  "package.json",
  "scripts\\init-local-d1.ps1",
  "scripts\\init-remote-d1.ps1",
  "posts\\shipping-fast.html",
  "posts\\ai-native-builder.html",
  "posts\\point-of-view.html",
  "assets\\blog-systems.svg",
  "assets\\blog-map.svg",
  "assets\\blog-point-of-view.svg"
)

foreach ($relativePath in $requiredFiles) {
  $fullPath = Join-Path $root $relativePath
  if (-not (Test-Path -LiteralPath $fullPath)) {
    throw "Missing required file: $relativePath"
  }
}

$index = Get-Content -Raw -Encoding UTF8 (Join-Path $root "index.html")
if ($index -notmatch "Ra1ndr0op") { throw "index.html must contain site title" }
if ($index -notmatch "styles.css\?v=blog-links-20260529") { throw "index.html must load the current cache-busted stylesheet" }
if ($index -notmatch 'id="waitlist-form"') { throw "index.html must contain waitlist form" }
if ($index -notmatch 'type="email"') { throw "index.html must contain email input" }
if ($index -notmatch "/api/subscribe") { throw "index.html must submit to /api/subscribe" }
foreach ($requiredCopy in @("Resources", "Writing", "Who Is Ra1ndr0op?", "Subscribe")) {
  if ($index -notmatch $requiredCopy) {
    throw "index.html must contain personal site section: $requiredCopy"
  }
}
$subscribeCopy = -join ([char[]](0x83B7, 0x53D6, 0x66F4, 0x65B0))
if ($index -notmatch $subscribeCopy) { throw "index.html must contain readable Chinese subscribe copy" }
foreach ($requiredCopy in @("Cloudflare", "Codex", "AI Native Builder", "Build With AI", "assets/creator-workspace.webp")) {
  if ($index -notmatch [regex]::Escape($requiredCopy)) {
    throw "index.html must contain richer personal site copy: $requiredCopy"
  }
}
foreach ($requiredCopy in @("Explore Your Curiosity", "Read More Post", "posts/shipping-fast.html", "posts/ai-native-builder.html", "posts/point-of-view.html")) {
  if ($index -notmatch [regex]::Escape($requiredCopy)) {
    throw "index.html must contain blog card copy/link: $requiredCopy"
  }
}
if (([regex]::Matches($index, 'class="blog-main-link"')).Count -lt 6) {
  throw "index.html must make each blog image/title/abstract clickable"
}
if (([regex]::Matches($index, 'class="read-more"')).Count -lt 6) {
  throw "index.html must keep each Read More Post link"
}
foreach ($requiredCopy in @("A B O U T&nbsp;&nbsp; M E", "Who Is Ra1ndr0op?", "Hey,", "Ra1ndr0op.", "portrait-orb", "social-icons")) {
  if ($index -notmatch [regex]::Escape($requiredCopy)) {
    throw "index.html must contain who section copy/structure: $requiredCopy"
  }
}

$styles = Get-Content -Raw -Encoding UTF8 (Join-Path $root "styles.css")
if ($styles -notmatch ":root") { throw "styles.css must define root variables" }
if ($styles -notmatch "subscribe-form") { throw "styles.css must style the subscribe form" }
if ($styles -notmatch "resource-grid") { throw "styles.css must style resource cards" }
if ($styles -notmatch "card-visual") { throw "styles.css must style visual cards" }
if ($styles -notmatch "blog-grid") { throw "styles.css must style blog cards" }
if ($styles -notmatch "letter-page") { throw "styles.css must style post letter pages" }
if ($styles -notmatch "who-layout") { throw "styles.css must style who section" }
if ($styles -notmatch "portrait-orb") { throw "styles.css must style portrait block" }
if ($styles -notmatch "color-scheme: dark") { throw "styles.css must use the dark creator style" }

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

foreach ($postName in @("shipping-fast.html", "ai-native-builder.html", "point-of-view.html")) {
  $post = Get-Content -Raw -Encoding UTF8 (Join-Path $root "posts\$postName")
  foreach ($requiredCopy in @("letter-page", "letter-subscribe", "letter-article", "letter-meta", "Not A Subscriber?", "Read The Ra1ndr0op Notes")) {
    if ($post -notmatch [regex]::Escape($requiredCopy)) {
      throw "post page $postName must contain letter structure: $requiredCopy"
    }
  }
}

Write-Host "Verification passed"
