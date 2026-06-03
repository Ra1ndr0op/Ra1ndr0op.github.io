type SkillName = "stardew-valley-poster" | "minecraft-voxel-poster";

const skillFiles: Record<SkillName, string> = {
  "stardew-valley-poster": "/downloads/skills/stardew-valley-poster/SKILL.md",
  "minecraft-voxel-poster": "/downloads/skills/minecraft-voxel-poster/SKILL.md",
};

const skillContent: Record<SkillName, string> = {
  "stardew-valley-poster": `---
name: stardew-valley-poster
description: Use when creating or prompting Stardew Valley-inspired 2D cozy farming pixel posters, warm rural game-cover visuals, harvest-town concept art, pixel typography scenes, or theme-word posters where the title must become part of a farm, village, mine, festival, or seasonal landscape.
---

# Stardew Valley Poster

## Overview

Create polished Stardew Valley-inspired 2D cozy farming pixel posters where the theme word is drawn into a farm, town, mine, festival, or seasonal landscape. The result should feel like a warm farming-sim game cover or social poster, not a voxel scene, 3D render, or normal illustration with flat text pasted on top.

When the user asks for a final image and image generation is available, generate the image directly. When the user asks for a prompt, output only the final image prompt.

## Required Inputs

Collect or infer these fields:

| Field | Notes |
|---|---|
| Theme / title | Required. If long, extract a 2-6 Chinese character or 1-3 English word core title for the main scenic typography. |
| Subtitle | Optional. Use as a wooden sign, quest board note, calendar label, shipping-bin tag, shop sign, or pixel UI footer. |
| Aspect ratio | Support \`5:2\`, \`3:2\`, \`4:5\`, \`1:1\`; infer from use case when omitted. |
| Language | Chinese, English, or mixed. Preserve exact spelling and avoid invented characters. |
| Use case | X cover, poster, WeChat cover, game-style cover, avatar background, etc. |
| Context, mood, banned elements | Optional. Let these steer season, location, props, palette, and exclusions. |

## Composition Workflow

1. Understand the theme silently. Do not output analysis unless asked.
2. Choose the emotional metaphor: growth, harvest, repair, community, discovery, daily routine, festival, exploration, or renewal.
3. Design three text layers:
   - A-layer: large readable core title, drawn into the scenery as the first visual focus.
   - B-layer: full title, preserved on a wooden sign, quest board, town map, calendar, shop banner, or UI label.
   - C-layer: subtitle/tags, small pixel text on a footer bar, inventory strip, mailbox note, seed packet, or signpost.
4. Make the A-layer title visually exist in the 2D/2.5D pixel scene: planted crops, flower beds, tilled soil, fences, paths, river shapes, mine walls, barn roofs, festival lights, market stalls, or greenhouse panes.
5. Add 1-3 supporting anchors that serve the theme. Keep them smaller than the title.
6. Build a clean game-cover composition with foreground detail, midground title, background town/farm/hills/sky, depth, and warm light.
7. End with quality and negative constraints.

## Title Reconstruction Modes

Pick one primary mode:

| Mode | Best for | Visual treatment |
|---|---|---|
| Crop-field title | growth, learning, productivity | Letters are planted as crop rows, flowers, tilled soil, irrigation lines, and harvest crates. |
| Wooden sign title | brands, guides, clear announcements | Letters become carved wood, shop signage, bulletin boards, painted planks, or farm entrance gates. |
| Village map title | community, systems, content | Letters form paths, houses, plaza stalls, fences, bridges, and town-map geometry. |
| Mine title | discovery, value, breakthrough | Letters are carved into warm cave walls with gems, lanterns, tracks, and glowing cracks. |
| Seasonal festival title | launches, campaigns, celebrations | Letters are built from lantern strings, banners, booths, pumpkins, flowers, snow, or fair decorations. |
| River-and-bridge title | transitions, methods, connection | Letters are shaped by streams, footbridges, stepping stones, docks, and curved paths. |
| Greenhouse title | creativity, renewal, hope | Letters grow under glass panes with vines, seedlings, sunbeams, and watering details. |
| Workshop title | tools, AI, making, automation | Letters are assembled from workbench parts, seed packets, pixel notes, crafting tools, and small UI panels. |

## Theme Anchors

Use these anchors as defaults:

| Theme type | Prefer | Avoid |
|---|---|---|
| AI / tools / tech | cozy farm computer, pixel terminal on a workbench, seed packets as prompts, glowing data fireflies, automated sprinkler grid, greenhouse control board | cold cyberpunk city, robot face, sterile blue-purple tech |
| Tutorial / guide / method | town map, signposts, calendar, quest board, stepping-stone path, beginner farm to thriving farm | classroom symbols |
| Creation / design / inspiration | easel beside crops, color-coded flower beds, craft table, seed palette, poster thumbnails on a bulletin board | generic art collage |
| Money / business / growth | shipping bin, market stall, crop crates, ledger book, gem mine, upgrade path, community board | cheap coin piles |
| Emotion / healing / hope | sunrise over repaired farm, rainy-to-sunny transition, warm cabin light, seedlings after a storm, restored bridge | gloomy realism |
| Community / content / spread | town square, bulletin board, festival booth, mailbox notes, gift bundles, speech-bubble signs | random crowded props |

## Visual Style

Always include:

- Stardew Valley-inspired cozy farming-sim 2D pixel art, warm rural game-cover composition, handcrafted pixel details.
- Use a flat 2D or gentle 2.5D farming-game view: pixel-art sprites, tile-map logic, painterly pixel clusters, and hand-placed environmental details.
- Bright but soft palette: golden sunlight, spring greens, harvest oranges, flower colors, warm wood, cream UI panels, gentle shadows.
- Clear seasonal setting when useful: spring bloom, summer abundance, autumn harvest, winter lights.
- Strong spatial hierarchy: foreground crops or path, midground scenic title, background farmhouse/town/hills/forest/sky.
- Small pixel characters only when useful for scale, action, or narrative.
- Main title large, legible, and integrated into the farm-world environment as scenic pixel lettering.

Do not use official Stardew Valley logos, characters, UI, sprites, or trademarked assets unless the user explicitly provides them. Use "Stardew Valley-inspired cozy farming pixel art" as the style language.

Strictly avoid Minecraft/voxel drift: no cubes, no block-built letters, no cubic typography, no 3D stone/glass towers, no volumetric voxel world, no isometric block construction, no realistic 3D rendering.

## Prompt Pattern

Use this structure for image generation prompts:

\`\`\`text
Create a high-end Stardew Valley-inspired 2D cozy farming pixel art poster, [aspect ratio/use case].
The large main title "[A-layer exact text]" is drawn into the scene as [chosen reconstruction mode], not flat overlay text and not voxel/block-built text.
[One-sentence visual metaphor tying the theme to farm life, village community, harvest, mine discovery, seasons, or renewal.]
Include [1-3 theme anchors] arranged around the title, with [small pixel character/path/props] for scale and story.
Use [subtitle/full title] as a wooden sign / quest board / calendar label / pixel UI footer: "[exact B/C text]".
Warm saturated-but-soft palette, golden sunlight, cozy rural 2D pixel game-cover composition, flower beds, crop rows, wood textures, lanterns, soft shadows, readable pixel typography, handcrafted sprite-like details, strong depth through layered 2D planes.
Avoid: flat pasted text, misspelled text, unreadable letters, clutter, dull colors, excessive realism, generic anime look, voxel art, cubes, block-built structures, 3D render, Minecraft-like style, official Stardew Valley logo or characters, copied UI/sprites, unrelated props, [user banned elements].
\`\`\`

If a title is long, keep the giant A-layer short and put the full title in the B-layer. Never enlarge a long full sentence so much that the poster becomes crowded.

## Quality Gate

Before finalizing, verify:

- The first read is the large core title.
- The title is part of the 2D farm/town/mine/seasonal scene, not an overlay or voxel structure.
- The metaphor communicates the theme through growth, harvest, community, discovery, repair, or renewal.
- The full requested title/subtitle is preserved somewhere legible when provided.
- The palette is warm, clean, bright, and cozy.
- The composition has depth, scale contrast, and a game-cover focal hierarchy.
- No banned element, misspelling, official asset, voxel/block style, meaningless decoration, or generic rural scene dominates.
`,
  "minecraft-voxel-poster": `---
name: minecraft-voxel-poster
description: Use when creating or prompting Minecraft-inspired voxel world posters, game-cover visuals, block-built typography scenes, bright cube-world concept art, or theme-word posters where the title must become part of the 3D block environment.
---

# Minecraft Voxel Poster

## Overview

Create polished Minecraft-inspired voxel posters where the theme word is rebuilt as a physical block-world structure. The result should feel like a bright game cover or social poster, not a normal illustration with flat text pasted on top.

When the user asks for a final image and image generation is available, generate the image directly. When the user asks for a prompt, output only the final image prompt.

## Required Inputs

Collect or infer these fields:

| Field | Notes |
|---|---|
| Theme / title | Required. If long, extract a 2-6 Chinese character or 1-3 English word core title for the giant structure. |
| Subtitle | Optional. Use as small pixel UI, signboard, task panel, bottom label, or inventory/status bar text. |
| Aspect ratio | Support \`5:2\`, \`3:2\`, \`4:5\`, \`1:1\`; infer from use case when omitted. |
| Language | Chinese, English, or mixed. Preserve exact spelling and avoid invented characters. |
| Use case | X cover, poster, WeChat cover, game-style cover, avatar background, etc. |
| Context, mood, banned elements | Optional. Let these steer metaphor, palette, props, and exclusions. |

## Composition Workflow

1. Understand the theme silently. Do not output analysis unless the user asks for it.
2. Choose the visual metaphor that best expresses the theme, not just literal decoration.
3. Design three text layers:
   - A-layer: giant core title, rebuilt from cubes as the first visual focus.
   - B-layer: full title, preserved as a pixel sign, quest panel, menu label, map label, or UI card.
   - C-layer: subtitle/tags, small pixel typography in a corner, route sign, inventory bar, task bar, or bottom strip.
4. Make the A-layer title physically part of the world: building, terrain, portal, mine, stairs, bridge, floating island, redstone machine, town, or growing landscape.
5. Add 1-3 supporting anchors that serve the metaphor. Keep them smaller than the title.
6. Build a clean game-cover composition with foreground, midground, background, depth, scale contrast, and bright sunlight.
7. End with quality and negative constraints.

## Title Reconstruction Modes

Pick one primary mode:

| Mode | Best for | Visual treatment |
|---|---|---|
| Architecture | Brands, systems, big concepts | Title becomes castle, tower, monument, entrance, city wall. |
| Terrain | Methods, maps, journeys | Title becomes road, cliff, canyon, grassland, cave entrance, map relief. |
| Portal | AI, transformation, breakthrough | Title is a glowing block portal; figures enter through the letters. |
| Mining | resources, discovery, hidden value | Title is buried ore or carved rock with glowing cracks and loose cubes. |
| Stairway | learning, growth, upgrade | Title becomes ascending block steps or platforms. |
| Bridge | connection, migration, solving problems | Title spans two regions as a traversable cube bridge. |
| Sky Island | imagination, freedom, future | Title floats as a block-built island, cloud platform, or aerial base. |
| Redstone Machine | AI, automation, tools, systems | Title is a circuit, terminal, redstone mechanism, rail, piston, data-flow structure. |
| Town | community, business, content | Title is built from shopfronts, signs, plaza blocks, colorful houses. |
| Growth | creativity, hope, healing | Title grows out of grass, trees, flowers, vines, and luminous nature blocks. |

## Theme Anchors

Use these anchors as defaults:

| Theme type | Prefer | Avoid |
|---|---|---|
| AI / prompts / tech | block computer, pixel terminal, glowing code cubes, redstone circuit, data-flow blocks, AI core cube, prompt portal | cliche robot faces, cheap blue-purple sci-fi city |
| Tutorial / guide / method | block map, route line, stairs, signposts, quest panel, new-player village to distant castle | generic classroom icons |
| Creation / design / aesthetics | colored cube canvas, pixel palette, crafting table, floating visual fragments, block font draft, poster thumbnail cubes | flat art-board collage |
| Money / business / growth | emerald ore, shop village, trading sign, upgrade stairs, treasure chest, glowing mine | cheap coin piles |
| Emotion / breakthrough / hope | light in dark mine, cracked wall, distant portal, small figure walking to title gate, sun behind clouds | gloomy realism |
| Community / content / spread | voxel crowd, pixel speech bubbles, colorful signboards, signal blocks, town square, stage | random crowded props |

## Visual Style

Always include:

- Minecraft-inspired voxel world, low-poly cube world, colorful blocky game poster.
- Saturated sunny palette with blue sky, square clouds, grass blocks, wood, ore, glass, glowstone, colored blocks.
- Soft shadows, volumetric sunlight, slight depth of field, crisp cube edges.
- Clear spatial depth: foreground path or figure, midground giant title, background village, mountains, sky island, castle, portal, or mine.
- Small voxel characters only when useful for scale, action, or narrative.
- Main title large, legible, centered or compositionally dominant.

Do not use official Minecraft logos, UI, characters, or trademarked assets unless the user explicitly provides them. Use "Minecraft-inspired voxel" as the style language.

## Prompt Pattern

Use this structure for image generation prompts:

\`\`\`text
Create a high-end Minecraft-inspired voxel world poster, [aspect ratio/use case].
The giant main title "[A-layer exact text]" is physically constructed from thousands of bright cubic blocks as [chosen reconstruction mode], not flat overlay text.
[One-sentence visual metaphor tying theme to scene.]
Include [1-3 theme anchors] arranged around the title, with [small figure/path/props] for scale.
Use [subtitle/full title] as small pixel signboard / quest panel / UI label: "[exact B/C text]".
Bright sunny saturated color palette, blue sky, block clouds, grass blocks, glass/wood/ore/glowstone, soft shadows, cinematic game-cover composition, strong depth, playful editorial poster, crisp readable block typography.
Avoid: flat pasted text, misspelled text, unreadable letters, clutter, dull colors, excessive realism, toy-like low-quality cartoon, unrelated props, official Minecraft logo or characters, [user banned elements].
\`\`\`

If a title is long, keep the giant A-layer short and put the full title in the B-layer. Never enlarge a long full sentence so much that the poster becomes crowded.

## Quality Gate

Before finalizing, verify:

- The first read is the giant core title.
- The title is a physical cube-world structure, not an overlay.
- The visual metaphor communicates the theme.
- The full requested title/subtitle is preserved somewhere legible when provided.
- The color is bright, clean, saturated, and optimistic.
- The composition has depth, scale contrast, and a game-cover focal hierarchy.
- No banned element, misspelling, meaningless decoration, or overly generic Minecraft scene dominates.
`,
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

function json(body: Record<string, string>, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json; charset=UTF-8",
    },
  });
}

function isSkillName(value: string | null): value is SkillName {
  return value === "stardew-valley-poster" || value === "minecraft-voxel-poster";
}

export const onRequest: PagesFunction = async ({ request }) => {
  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  if (request.method !== "GET" && request.method !== "HEAD") {
    return json({ error: "Only GET and HEAD are supported" }, 405);
  }

  const url = new URL(request.url);
  const name = url.searchParams.get("name");
  if (!isSkillName(name)) {
    return json({ error: "Unknown skill" }, 404);
  }

  const filename = `${name}-SKILL.md`;
  const content = skillContent[name];
  const body = request.method === "HEAD" ? null : content;
  const headers = new Headers({
    ...corsHeaders,
    "Content-Type": "text/markdown; charset=UTF-8",
    "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodeURIComponent(filename)}`,
    "Cache-Control": "public, max-age=300",
    "X-Content-Type-Options": "nosniff",
    "X-Skill-Source": skillFiles[name],
  });
  headers.set("Content-Length", new TextEncoder().encode(content).length.toString());

  return new Response(body, { status: 200, headers });
};
