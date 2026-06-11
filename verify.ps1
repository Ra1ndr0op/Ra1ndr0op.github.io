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
  "home.html",
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
  "projects\aiti-ai-type-indicator.html",
  "projects\quick-capture.html",
  "assets\blog-ai-artifact-thumb.jpg",
  "assets\blog-ai-cannot-publish-thumb.jpg",
  "assets\ai-artifact-framework.svg",
  "assets\ai-judgment-framework.jpg",
  "assets\product-aiti-cover-ios.jpg",
  "assets\product-aiti-chatgpt.png",
  "assets\product-quick-capture-cover-ios.jpg",
  "assets\product-quick-capture-icon.png",
  "assets\project-stardew-valley-poster-ios.jpg",
  "assets\project-minecraft-voxel-poster-ios.jpg",
  "assets\project-consulting-cover-prompt-ios.jpg",
  "assets\blog-doubao-clear-question-thumb.jpg",
  "assets\doubao-clear-question-framework.svg",
  "downloads\skills\stardew-valley-poster\SKILL.md",
  "downloads\skills\minecraft-voxel-poster\SKILL.md",
  "downloads\skills\consulting-cover-prompt\SKILL.md",
  "downloads\skills\consulting-cover-prompt\references\prompt-template.md",
  "downloads\apps\quick-capture\quick-capture-0.1.0-minimize-hotkey-fix-windows-x64.zip"
)

foreach ($file in $requiredFiles) {
  Assert-File $file
}

$entry = Read-Text "index.html"
foreach ($needle in @(
  "Ra1ndrop",
  "styles.css?v=entry-20260611",
  "entry-page",
  "entry-shell",
  "entry-glass",
  "R A 1 N D R O P",
  "Enter Site",
  "home.html",
  "home.html#products",
  "home.html#skills",
  "home.html#notes",
  "Products / Skills / Notes",
  "Build With AI"
)) {
  Assert-Contains $entry $needle "index.html entry page must contain: $needle"
}

foreach ($needle in @("home.html#resources", "home.html#writing", "Projects / Blog / About / Subscribe")) {
  if ($entry -match [regex]::Escape($needle)) {
    throw "index.html entry page must not keep old primary navigation: $needle"
  }
}

$index = Read-Text "home.html"
foreach ($needle in @(
  "Ra1ndrop",
  "Products, Skills, And Notes",
  "styles.css?v=comments-20260605",
  "home-page",
  "home-shell",
  "latest-updates",
  "Recently Updated",
  "data-latest-updates",
  "data-update-card",
  "data-updated=""2026-06-12""",
  "data-update-type=""Product""",
  "renderLatestUpdates",
  "querySelectorAll(""[data-update-card]"")",
  "latest-update-item",
  "posts/ai-build-artifacts.html",
  "consulting-cover-prompt",
  "projects/consulting-cover-prompt.html",
  "href=""#products""",
  "href=""#skills""",
  "href=""#notes""",
  "One-person Products",
  "products-section",
  "product-card",
  "product-main-link",
  "AITI / AI Type Indicator",
  "projects/aiti-ai-type-indicator.html",
  "assets/product-aiti-cover-ios.jpg",
  "assets/product-aiti-chatgpt.png",
  "Quick Capture",
  "projects/quick-capture.html",
  "assets/product-quick-capture-cover-ios.jpg",
  "assets/product-quick-capture-icon.png",
  "id=""resources""",
  "id=""skills""",
  "id=""writing""",
  "id=""notes""",
  "id=""waitlist-form""",
  "/api/subscribe",
  "Skills",
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
  "Notes",
  "Read More Post",
  "Who Is Ra1ndrop?"
)) {
  Assert-Contains $index $needle "home.html must contain: $needle"
}

foreach ($needle in @("href=""#resources"">Projects", "href=""#writing"">Notes", "href=""#subscribe"">Subscribe", "Join The", "New 1%", "Explore Your Curiosity")) {
  if ($index -match [regex]::Escape($needle)) {
    throw "home.html must not keep old primary structure wording: $needle"
  }
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
  "comment-card",
  "circle-field",
  "rounded-surface",
  "home-hero",
  "latest-update-item",
  "products-section",
  "section-heading-row",
  "product-grid",
  "product-card",
  "product-main-link",
  "product-cover",
  "product-card-top",
  "product-detail-page",
  "product-hero-figure",
  "legacy-anchor",
  "border-radius",
  "radial-gradient"
)) {
  Assert-Contains $styles $needle "styles.css must contain: $needle"
}

$subscribeApi = Read-Text "functions\api\subscribe.ts"
foreach ($needle in @("waitlist_db", "INSERT INTO emails", "UNIQUE")) {
  Assert-Contains $subscribeApi $needle "subscribe.ts must contain: $needle"
}

$commentsApi = Read-Text "functions\api\comments.ts"
foreach ($needle in @("waitlist_db", "CREATE TABLE IF NOT EXISTS comments", "CREATE INDEX IF NOT EXISTS idx_comments_post_created_at", "SELECT id, post_slug, author, body, created_at FROM comments", "INSERT INTO comments", "const author", "cleanBody", "return await readComments", "return await createComment")) {
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
foreach ($needle in @("/api/comments", "Ra1ndropCommentSystem", "textContent", "dataset.postSlug", "readJson", "Content-Type")) {
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
  foreach ($needle in @("letter-page", "letter-subscribe", "letter-article", "letter-meta", "Not A Subscriber?", "Read The", "../assets/comments.js", "../home.html#writing", "../home.html#subscribe")) {
    Assert-Contains $post $needle "post page $postName must contain: $needle"
  }
  if ($post -match "\.\./index\.html#") {
    throw "post page $postName must not link section anchors to index.html"
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
  foreach ($needle in @("project-page", "project-summary", "letter-figure", "letter-callout", "letter-list", "download-card", "/api/download-skill?name=", "GitHub Raw", "Back to projects", "../home.html#resources", "../home.html#subscribe")) {
    Assert-Contains $project $needle "project page $projectName must contain: $needle"
  }
  if ($project -match "\.\./index\.html#") {
    throw "project page $projectName must not link section anchors to index.html"
  }
}

foreach ($productPage in @("aiti-ai-type-indicator.html", "quick-capture.html")) {
  $product = Read-Text "projects\$productPage"
  foreach ($needle in @("project-page", "product-detail-page", "project-summary", "letter-figure", "letter-callout", "letter-list", "download-card", "../home.html#products", "../home.html#skills", "../home.html#notes", "../home.html#subscribe", "Back To Products")) {
    Assert-Contains $product $needle "product page $productPage must contain: $needle"
  }
  if ($product -match "\.\./index\.html#") {
    throw "product page $productPage must not link section anchors to index.html"
  }
}

$aitiPage = Read-Text "projects\aiti-ai-type-indicator.html"
foreach ($needle in @("AITI / AI Type Indicator", "https://aiti.raindropcn.com", "../assets/product-aiti-chatgpt.png", "Chinese AI personality quiz", "Cloudflare Pages")) {
  Assert-Contains $aitiPage $needle "AITI page must contain: $needle"
}

$quickCapturePage = Read-Text "projects\quick-capture.html"
foreach ($needle in @("Quick Capture", "../assets/product-quick-capture-icon.png", "Tauri + Svelte + Rust + DeepSeek", "Download ZIP", "../downloads/apps/quick-capture/quick-capture-0.1.0-minimize-hotkey-fix-windows-x64.zip", "Obsidian Markdown")) {
  Assert-Contains $quickCapturePage $needle "Quick Capture page must contain: $needle"
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
