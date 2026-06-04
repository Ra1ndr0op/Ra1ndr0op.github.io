$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $MyInvocation.MyCommand.Path

function Read-Text($relativePath) {
  return Get-Content -Raw -Encoding UTF8 (Join-Path $root $relativePath)
}

function Assert-File($relativePath) {
  $fullPath = Join-Path $root $relativePath
  if (-not (Test-Path -LiteralPath $fullPath)) {
    throw "Missing required file: $relativePath"
  }
}

function Assert-Contains($text, $needle, $message) {
  if ($text -notmatch [regex]::Escape($needle)) {
    throw $message
  }
}

$requiredFiles = @(
  "index.html",
  "styles.css",
  "CNAME",
  "functions\api\subscribe.ts",
  "functions\api\download-skill.ts",
  "schema.sql",
  "package.json",
  "posts\ai-native-builder.html",
  "posts\doubao-clear-question.html",
  "posts\ai-build-artifacts.html",
  "posts\ai-cannot-publish.html",
  "projects\stardew-valley-poster.html",
  "projects\minecraft-voxel-poster.html",
  "assets\blog-ai-artifact-thumb.jpg",
  "assets\blog-ai-cannot-publish-thumb.jpg",
  "assets\ai-artifact-framework.svg",
  "assets\ai-judgment-framework.jpg",
  "assets\project-stardew-valley-poster.jpg",
  "assets\project-minecraft-voxel-poster.jpg",
  "assets\blog-doubao-clear-question-thumb.jpg",
  "assets\doubao-clear-question-framework.svg",
  "downloads\skills\stardew-valley-poster\SKILL.md",
  "downloads\skills\minecraft-voxel-poster\SKILL.md"
)

foreach ($file in $requiredFiles) {
  Assert-File $file
}

$index = Read-Text "index.html"
foreach ($needle in @(
  "Ra1ndrop",
  "styles.css?v=poster-projects-20260529",
  "id=""waitlist-form""",
  "/api/subscribe",
  "Join The",
  "New 1%",
  "stardew-valley-poster",
  "minecraft-voxel-poster",
  "/api/download-skill?name=stardew-valley-poster",
  "/api/download-skill?name=minecraft-voxel-poster",
  "posts/doubao-clear-question.html",
  "assets/blog-doubao-clear-question-thumb.jpg",
  "posts/ai-build-artifacts.html",
  "assets/blog-ai-artifact-thumb.jpg",
  "posts/ai-cannot-publish.html",
  "Explore Your Curiosity",
  "Read More Post",
  "Who Is Ra1ndrop?"
)) {
  Assert-Contains $index $needle "index.html must contain: $needle"
}

if (([regex]::Matches($index, 'class="blog-main-link"')).Count -lt 3) {
  throw "index.html must make blog image/title/abstract clickable"
}
if (([regex]::Matches($index, 'class="read-more"')).Count -lt 3) {
  throw "index.html must keep Read More Post links"
}

$styles = Read-Text "styles.css"
foreach ($needle in @(
  ":root",
  "color-scheme: dark",
  "resource-grid",
  "blog-grid",
  "letter-page",
  "letter-figure",
  "letter-callout",
  "letter-list",
  "download-card",
  "who-layout"
)) {
  Assert-Contains $styles $needle "styles.css must contain: $needle"
}

$subscribeApi = Read-Text "functions\api\subscribe.ts"
foreach ($needle in @("waitlist_db", "INSERT INTO emails", "UNIQUE")) {
  Assert-Contains $subscribeApi $needle "subscribe.ts must contain: $needle"
}

$downloadApi = Read-Text "functions\api\download-skill.ts"
foreach ($needle in @(
  "Content-Type",
  "text/markdown; charset=UTF-8",
  "Content-Disposition",
  "attachment",
  "SKILL.md",
  "stardew-valley-poster",
  "minecraft-voxel-poster",
  "downloads/skills"
)) {
  Assert-Contains $downloadApi $needle "download-skill.ts must contain: $needle"
}

$schema = Read-Text "schema.sql"
foreach ($needle in @("CREATE TABLE IF NOT EXISTS emails", "email TEXT UNIQUE NOT NULL")) {
  Assert-Contains $schema $needle "schema.sql must contain: $needle"
}

$package = Read-Text "package.json" | ConvertFrom-Json
foreach ($scriptName in @("dev", "db:init:local", "db:init:remote", "verify")) {
  if (-not $package.scripts.PSObject.Properties.Name.Contains($scriptName)) {
    throw "package.json must define script: $scriptName"
  }
}

$cname = (Read-Text "CNAME").Trim()
if ($cname -ne "www.raindropcn.com") {
  throw "CNAME must equal www.raindropcn.com"
}

foreach ($postName in @("ai-native-builder.html", "doubao-clear-question.html", "ai-build-artifacts.html", "ai-cannot-publish.html")) {
  $post = Read-Text "posts\$postName"
  foreach ($needle in @("letter-page", "letter-subscribe", "letter-article", "letter-meta", "Not A Subscriber?", "Read The")) {
    Assert-Contains $post $needle "post page $postName must contain: $needle"
  }
}

$artifactPost = Read-Text "posts\ai-build-artifacts.html"
foreach ($needle in @("assets/ai-artifact-framework.svg", "letter-figure", "letter-callout", "letter-list")) {
  Assert-Contains $artifactPost $needle "artifact article must contain: $needle"
}

$doubaoPost = Read-Text "posts\doubao-clear-question.html"
foreach ($needle in @("assets/doubao-clear-question-framework.svg", "letter-figure", "letter-callout", "letter-list")) {
  Assert-Contains $doubaoPost $needle "doubao article must contain: $needle"
}

$oldAiPost = Read-Text "posts\ai-cannot-publish.html"
foreach ($needle in @("assets/ai-judgment-framework.jpg", "letter-figure", "letter-callout", "letter-list")) {
  Assert-Contains $oldAiPost $needle "AI article must contain: $needle"
}

foreach ($projectName in @("stardew-valley-poster.html", "minecraft-voxel-poster.html")) {
  $project = Read-Text "projects\$projectName"
  foreach ($needle in @("project-page", "project-summary", "letter-figure", "letter-callout", "letter-list", "download-card", "/api/download-skill?name=", "GitHub Raw", "Back to projects")) {
    Assert-Contains $project $needle "project page $projectName must contain: $needle"
  }
}

$stardewSkill = Read-Text "downloads\skills\stardew-valley-poster\SKILL.md"
Assert-Contains $stardewSkill "Stardew Valley Poster" "stardew skill download must contain skill body"
$voxelSkill = Read-Text "downloads\skills\minecraft-voxel-poster\SKILL.md"
Assert-Contains $voxelSkill "Minecraft Voxel Poster" "minecraft skill download must contain skill body"

Write-Host "Verification passed"
