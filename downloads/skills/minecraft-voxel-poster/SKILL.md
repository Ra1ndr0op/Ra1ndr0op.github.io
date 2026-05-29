---
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
| Aspect ratio | Support `5:2`, `3:2`, `4:5`, `1:1`; infer from use case when omitted. |
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

```text
Create a high-end Minecraft-inspired voxel world poster, [aspect ratio/use case].
The giant main title "[A-layer exact text]" is physically constructed from thousands of bright cubic blocks as [chosen reconstruction mode], not flat overlay text.
[One-sentence visual metaphor tying theme to scene.]
Include [1-3 theme anchors] arranged around the title, with [small figure/path/props] for scale.
Use [subtitle/full title] as small pixel signboard / quest panel / UI label: "[exact B/C text]".
Bright sunny saturated color palette, blue sky, block clouds, grass blocks, glass/wood/ore/glowstone, soft shadows, cinematic game-cover composition, strong depth, playful editorial poster, crisp readable block typography.
Avoid: flat pasted text, misspelled text, unreadable letters, clutter, dull colors, excessive realism, toy-like low-quality cartoon, unrelated props, official Minecraft logo or characters, [user banned elements].
```

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
