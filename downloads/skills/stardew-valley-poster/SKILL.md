---
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
| Aspect ratio | Support `5:2`, `3:2`, `4:5`, `1:1`; infer from use case when omitted. |
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

```text
Create a high-end Stardew Valley-inspired 2D cozy farming pixel art poster, [aspect ratio/use case].
The large main title "[A-layer exact text]" is drawn into the scene as [chosen reconstruction mode], not flat overlay text and not voxel/block-built text.
[One-sentence visual metaphor tying the theme to farm life, village community, harvest, mine discovery, seasons, or renewal.]
Include [1-3 theme anchors] arranged around the title, with [small pixel character/path/props] for scale and story.
Use [subtitle/full title] as a wooden sign / quest board / calendar label / pixel UI footer: "[exact B/C text]".
Warm saturated-but-soft palette, golden sunlight, cozy rural 2D pixel game-cover composition, flower beds, crop rows, wood textures, lanterns, soft shadows, readable pixel typography, handcrafted sprite-like details, strong depth through layered 2D planes.
Avoid: flat pasted text, misspelled text, unreadable letters, clutter, dull colors, excessive realism, generic anime look, voxel art, cubes, block-built structures, 3D render, Minecraft-like style, official Stardew Valley logo or characters, copied UI/sprites, unrelated props, [user banned elements].
```

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
