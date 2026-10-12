$ErrorActionPreference = "Stop"
Import-Module Microsoft.PowerShell.Utility
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
  "_headers",
  "downloads\books\low-ego-expanded.docx",
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
  "posts\low-ego-world-exam.html",
  "projects\stardew-valley-poster.html",
  "projects\minecraft-voxel-poster.html",
  "projects\electric-poster.html",
  "projects\consulting-cover-prompt.html",
  "projects\aiti-ai-type-indicator.html",
  "projects\quick-capture.html",
  "quick-capture\index.html",
  "quick-response\index.html",
  "quick-response\landing.css",
  "quick-response\landing.js",
  "quick-response\workbench-preview.png",
  "quick-response\favicon.svg",
  "quick-response\app\index.html",
  "quick-response\app\app.css",
  "quick-response\app\demo.js",
  "quick-response\app\demo-data.js",
  "functions\api\quick-response-demo.ts",
  "quick-capture\quick-capture-preview.png",
  "quick-capture\quick-capture-logo.png",
  "assets\blog-ai-artifact-thumb.jpg",
  "assets\blog-ai-cannot-publish-thumb.jpg",
  "assets\blog-low-ego-cover.jpg",
  "assets\ai-artifact-framework.svg",
  "assets\ai-judgment-framework.jpg",
  "assets\product-aiti-cover-ios.jpg",
  "assets\product-aiti-chatgpt.png",
  "assets\product-quick-capture-cover-ios.jpg",
  "assets\product-quick-capture-icon.png",
  "assets\product-quick-response-cover-3d.jpg",
  "assets\project-stardew-valley-poster.jpg",
  "assets\project-minecraft-voxel-poster.jpg",
  "assets\project-consulting-cover-prompt.jpg",
  "assets\electric-poster.css",
  "assets\project-electric-poster.jpg",
  "assets\electric-poster-build-in-public.jpg",
  "assets\electric-poster-creative-session.jpg",
  "assets\blog-doubao-clear-question-thumb.jpg",
  "assets\doubao-clear-question-framework.svg",
  "assets\ra1ndrop-main-logo-black.png",
  "assets\ra1ndrop-main-logo-transparent.png",
  "assets\ra1ndrop-main-logo-web.png",
  "assets\ra1ndrop-avatar-black.png",
  "assets\ra1ndrop-avatar-transparent.png",
  "assets\ra1ndrop-avatar-web.png",
  "downloads\skills\stardew-valley-poster\SKILL.md",
  "downloads\skills\minecraft-voxel-poster\SKILL.md",
  "downloads\skills\consulting-cover-prompt\SKILL.md",
  "downloads\skills\consulting-cover-prompt\references\prompt-template.md",
  "downloads\skills\electric-poster.zip",
  "downloads\skills\electric-poster\SKILL.md",
  "downloads\skills\electric-poster\agents\openai.yaml",
  "downloads\skills\electric-poster\references\style-bible.md",
  "downloads\skills\electric-poster\references\text-layout-rules.md",
  "downloads\skills\electric-poster\references\prompt-templates.md",
  "downloads\skills\electric-poster\assets\reference-01.jpg",
  "downloads\skills\electric-poster\assets\reference-02.jpg",
  "downloads\skills\electric-poster\assets\reference-03.jpg",
  "downloads\skills\electric-poster\assets\reference-04.jpg",
  "downloads\apps\quick-capture\quick-capture-0.1.0-minimize-hotkey-fix-windows-x64.zip"
)

foreach ($file in $requiredFiles) {
  Assert-File $file
}

$entry = Read-Text "index.html"
foreach ($needle in @(
  "Ra1ndrop",
  "styles.css?v=logo-20260614",
  "entry-page",
  "entry-shell",
  "entry-glass",
  "logo-mark-link",
  "assets/ra1ndrop-avatar-transparent.png",
  "assets/ra1ndrop-avatar-web.png",
  "assets/ra1ndrop-main-logo-web.png",
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
  "styles.css?v=products-20261011",
  "home-page",
  "home-shell",
  "logo-mark-link",
  "assets/ra1ndrop-avatar-transparent.png",
  "assets/ra1ndrop-avatar-web.png",
  "assets/ra1ndrop-main-logo-web.png",
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
  "Quick Response",
  "quick-response/",
  "quick-response/app/",
  "assets/product-quick-response-cover-3d.jpg",
  "quick-capture/",
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
  "/api/download-skill?name=electric-poster",
  "projects/electric-poster.html",
  "posts/doubao-clear-question.html",
  "assets/blog-doubao-clear-question-thumb.jpg",
  "posts/ai-build-artifacts.html",
  "assets/blog-ai-artifact-thumb.jpg",
  "posts/ai-cannot-publish.html",
  "posts/low-ego-world-exam.html",
  "assets/blog-low-ego-cover.jpg",
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
  "logo-mark-link",
  "entry-brand-logo",
  "home-brand-logo",
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
  "electric-poster.zip",
  "application/zip",
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

foreach ($postName in @("ai-native-builder.html", "doubao-clear-question.html", "ai-build-artifacts.html", "ai-cannot-publish.html", "low-ego-world-exam.html")) {
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

$lowEgoPost = Read-Text "posts\low-ego-world-exam.html"
foreach ($needle in @("assets/blog-low-ego-cover.jpg", "letter-callout", "letter-list", "data-post-slug=""low-ego-world-exam""", "低 Ego：一个人如何不再把世界当考场", "datetime=""2026-10-12""", "../downloads/books/low-ego-expanded.docx", "download=""低Ego_一个人如何不再把世界当考场_扩写版.docx""")) {
  Assert-Contains $lowEgoPost $needle "Low Ego article must contain: $needle"
}

$bookHeaders = Read-Text "_headers"
foreach ($needle in @("/downloads/books/low-ego-expanded.docx", "Content-Type: application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Content-Disposition: attachment; filename=""low-ego-expanded.docx""", "filename*=UTF-8''")) {
  Assert-Contains $bookHeaders $needle "Book download headers must contain: $needle"
}

foreach ($projectName in @("stardew-valley-poster.html", "minecraft-voxel-poster.html", "consulting-cover-prompt.html", "electric-poster.html")) {
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
foreach ($needle in @("Quick Capture", "../assets/product-quick-capture-icon.png", "Tauri + Svelte + Rust + DeepSeek", "Download Windows App", "/api/download-quick-capture", "quick-capture-0.1.0-windows-x64-setup.exe", "Obsidian Markdown")) {
  Assert-Contains $quickCapturePage $needle "Quick Capture page must contain: $needle"
}

$quickCaptureDownload = Read-Text "functions\api\download-quick-capture.ts"
foreach ($needle in @("QUICK_CAPTURE_DOWNLOADS", "quick-capture/quick-capture-0.1.0-windows-x64-setup.exe", "application/octet-stream", "Content-Disposition", "attachment; filename=")) {
  Assert-Contains $quickCaptureDownload $needle "Quick Capture download endpoint must contain: $needle"
}

$quickCaptureLanding = Read-Text "quick-capture\index.html"
foreach ($needle in @("Quick Capture", "/quick-capture/assets/", "./quick-capture-logo.png", "让 AI 记住你的想法")) {
  Assert-Contains $quickCaptureLanding $needle "Quick Capture landing page must contain: $needle"
}

$quickResponseLanding = Read-Text "quick-response\index.html"
foreach ($needle in @("Quick Response", "./landing.css?v=20261011", "./landing.js?v=20261011", "./workbench-preview.png", "./favicon.svg", "/home.html#products", "https://www.raindropcn.com/quick-response/", "demoForm", "recordPanel")) {
  Assert-Contains $quickResponseLanding $needle "Quick Response landing page must contain: $needle"
}
if ($quickResponseLanding -match '/static/|href="/app"') {
  throw "Quick Response must not link to unhosted source backend routes"
}
$quickResponseScript = Read-Text "quick-response\landing.js"
Assert-Contains $quickResponseScript "/api/quick-response-demo" "Quick Response form must use the hosted endpoint"
$quickResponseApi = Read-Text "functions\api\quick-response-demo.ts"
foreach ($needle in @("waitlist_db", "quick_response_demo_requests")) {
  Assert-Contains $quickResponseApi $needle "Quick Response API must contain: $needle"
}
Assert-Contains $schema "quick_response_demo_requests" "schema.sql must define the Quick Response request table"

Assert-Contains $quickResponseLanding "./app/" "Quick Response must offer a workbench demo entry"
$quickResponseDemo = Read-Text "quick-response\app\index.html"
foreach ($needle in @("Quick Response", "预设场景演示", "未调用实时 AI", "输入不会上传", "./app.css?v=demo-20261011", "./demo.js?v=20261011", "type=""module""", "conversationList", "messageInput", "knowledgeView", "data-scenario=""refund""", "data-scenario=""delivery""", "data-scenario=""technical""", "data-scenario=""handoff""")) {
  Assert-Contains $quickResponseDemo $needle "Quick Response demo must contain: $needle"
}
if ($quickResponseDemo -match '/static/|authForm|type="file"') {
  throw "Quick Response demo must not include unavailable backend actions"
}

$stardewSkill = Read-Text "downloads\skills\stardew-valley-poster\SKILL.md"
Assert-Contains $stardewSkill "Stardew Valley Poster" "stardew skill download must contain skill body"
$voxelSkill = Read-Text "downloads\skills\minecraft-voxel-poster\SKILL.md"
Assert-Contains $voxelSkill "Minecraft Voxel Poster" "minecraft skill download must contain skill body"
$consultingSkill = Read-Text "downloads\skills\consulting-cover-prompt\SKILL.md"
Assert-Contains $consultingSkill "Consulting Cover Prompt" "consulting skill download must contain skill body"
$consultingTemplate = Read-Text "downloads\skills\consulting-cover-prompt\references\prompt-template.md"
Assert-Contains $consultingTemplate "Consulting Cover Prompt Template" "consulting prompt template must contain template body"

$electricSkill = Read-Text "downloads\skills\electric-poster\SKILL.md"
foreach ($needle in @("name: electric-poster", "references/style-bible.md", "references/text-layout-rules.md", "references/prompt-templates.md")) {
  Assert-Contains $electricSkill $needle "Electric Poster must preserve its full skill and reference paths"
}
$electricProject = Read-Text "projects\electric-poster.html"
foreach ($needle in @("/api/download-skill?name=electric-poster", "electric-poster.zip", "Download Skill (.zip)", "GitHub Raw", "project-electric-poster.jpg", "electric-poster-build-in-public.jpg", "electric-poster-creative-session.jpg", "electric-poster.css?v=generated-20261011")) {
  Assert-Contains $electricProject $needle "Electric Poster page must contain: $needle"
}
Assert-Contains $index "assets/project-electric-poster.jpg" "Electric Poster home cover must show artwork generated with the skill"
if ($electricProject -match "随包附带的风格参考|downloads/skills/electric-poster/assets/reference-" -or $index -match "downloads/skills/electric-poster/assets/reference-") {
  throw "Electric Poster pages must show generated examples instead of the internal reference images"
}

# Ensure the full download stays installable and matches the published skill files.
Add-Type -AssemblyName System.IO.Compression.FileSystem
$electricEntries = @("SKILL.md", "agents/openai.yaml", "references/style-bible.md", "references/text-layout-rules.md", "references/prompt-templates.md", "assets/reference-01.jpg", "assets/reference-02.jpg", "assets/reference-03.jpg", "assets/reference-04.jpg")
$electricZip = [IO.Compression.ZipFile]::OpenRead((Join-Path $root "downloads\skills\electric-poster.zip"))
try {
  if ($electricZip.Entries.Count -ne $electricEntries.Count) { throw "Electric Poster ZIP must contain all 9 skill files" }
  foreach ($relativePath in $electricEntries) {
    $entry = $electricZip.GetEntry("electric-poster/$relativePath")
    if ($null -eq $entry) { throw "Electric Poster ZIP is missing: $relativePath" }
    $entryStream = $entry.Open()
    $entryHash = [Security.Cryptography.SHA256]::Create()
    try { $zipHash = [BitConverter]::ToString($entryHash.ComputeHash($entryStream)).Replace("-", "") }
    finally { $entryStream.Dispose(); $entryHash.Dispose() }
    $diskHash = (Get-FileHash -Algorithm SHA256 -LiteralPath (Join-Path $root "downloads/skills/electric-poster/$relativePath")).Hash
    if ($zipHash -ne $diskHash) { throw "Electric Poster ZIP differs from the published skill: $relativePath" }
  }
}
finally { $electricZip.Dispose() }

Write-Host "Verification passed"
