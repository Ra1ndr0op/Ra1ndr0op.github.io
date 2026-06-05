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
  "functions\api\comments.ts",
  "schema.sql",
  "package.json",
  "assets\comments.js",
  "posts\ai-native-builder.html",
  "posts\doubao-clear-question.html",
  "posts\ai-build-artifacts.html",
  "posts\ai-cannot-publish.html",
  "projects\stardew-valley-poster.html",
  "projects\minecraft-voxel-poster.html",
  "projects\consulting-cover-prompt.html",
  "assets\blog-ai-artifact-thumb.jpg",
  "assets\blog-ai-cannot-publish-thumb.jpg",
  "assets\ai-artifact-framework.svg",
  "assets\ai-judgment-framework.jpg",
  "assets\project-stardew-valley-poster.jpg",
  "assets\project-minecraft-voxel-poster.jpg",
  "assets\project-consulting-cover-prompt.jpg",
  "assets\blog-doubao-clear-question-thumb.jpg",
  "assets\doubao-clear-question-framework.svg",
  "downloads\skills\stardew-valley-poster\SKILL.md",
  "downloads\skills\minecraft-voxel-poster\SKILL.md",
  "downloads\skills\consulting-cover-prompt\SKILL.md",
  "downloads\skills\consulting-cover-prompt\references\prompt-template.md"
)

foreach ($file in $requiredFiles) {
  Assert-File $file
}

$index = Read-Text "index.html"
foreach ($needle in @(
  "Ra1ndrop",
  "styles.css?v=comments-20260605",
  "id=""waitlist-form""",
  "/api/subscribe",
  "Join The",
  "New 1%",
  "stardew-valley-poster",
  "minecraft-voxel-poster",
  "consulting-cover-prompt",
  "/api/download-skill?name=stardew-valley-poster",
  "/api/download-skill?name=minecraft-voxel-poster",
  "/api/download-skill?name=consulting-cover-prompt",
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
  "who-layout",
  "comments-section",
  "comment-card"
)) {
  Assert-Contains $styles $needle "styles.css must contain: $needle"
}

$subscribeApi = Read-Text "functions\api\subscribe.ts"
foreach ($needle in @("waitlist_db", "INSERT INTO emails", "UNIQUE")) {
  Assert-Contains $subscribeApi $needle "subscribe.ts must contain: $needle"
}

$commentsApi = Read-Text "functions\api\comments.ts"
foreach ($needle in @("waitlist_db", "SELECT id, post_slug, author, body, created_at FROM comments", "INSERT INTO comments", "const author", "cleanBody")) {
  Assert-Contains $commentsApi $needle "comments.ts must contain: $needle"
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
  "consulting-cover-prompt",
  "downloads/skills"
)) {
  Assert-Contains $downloadApi $needle "download-skill.ts must contain: $needle"
}

$schema = Read-Text "schema.sql"
foreach ($needle in @("CREATE TABLE IF NOT EXISTS emails", "email TEXT UNIQUE NOT NULL", "CREATE TABLE IF NOT EXISTS comments", "post_slug TEXT NOT NULL", "body TEXT NOT NULL")) {
  Assert-Contains $schema $needle "schema.sql must contain: $needle"
}

$commentsJs = Read-Text "assets\comments.js"
foreach ($needle in @("/api/comments", "Ra1ndropCommentSystem", "textContent", "dataset.postSlug")) {
  Assert-Contains $commentsJs $needle "comments.js must contain: $needle"
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
  foreach ($needle in @("letter-page", "letter-subscribe", "letter-article", "letter-meta", "Not A Subscriber?", "Read The", "../assets/comments.js")) {
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

foreach ($projectName in @("stardew-valley-poster.html", "minecraft-voxel-poster.html", "consulting-cover-prompt.html")) {
  $project = Read-Text "projects\$projectName"
  foreach ($needle in @("project-page", "project-summary", "letter-figure", "letter-callout", "letter-list", "download-card", "/api/download-skill?name=", "GitHub Raw", "Back to projects")) {
    Assert-Contains $project $needle "project page $projectName must contain: $needle"
  }
}

$stardewSkill = Read-Text "downloads\skills\stardew-valley-poster\SKILL.md"
Assert-Contains $stardewSkill "Stardew Valley Poster" "stardew skill download must contain skill body"
$voxelSkill = Read-Text "downloads\skills\minecraft-voxel-poster\SKILL.md"
Assert-Contains $voxelSkill "Minecraft Voxel Poster" "minecraft skill download must contain skill body"
$consultingSkill = Read-Text "downloads\skills\consulting-cover-prompt\SKILL.md"
Assert-Contains $consultingSkill "Consulting Cover Prompt" "consulting skill download must contain skill body"
$consultingTemplate = Read-Text "downloads\skills\consulting-cover-prompt\references\prompt-template.md"
Assert-Contains $consultingTemplate "Consulting Cover Prompt Template" "consulting prompt template must contain template body"

Write-Host "Verification passed"
