# Prompt Templates

Use the smallest template that fits the task. Replace bracketed fields and remove unused lines.

## Prompt-only template

```text
Create a [canvas ratio] experimental editorial poster about [subject].

Style: 2.5D graphic depth, experimental magazine cover, rave flyer, digital zine,
new-brutalist collage, asymmetric high-density layout. Use a saturated electric-blue
background, hot-magenta display typography, deep navy and black rear planes, and small
acid-green registration accents. The colors should look like matte fluorescent screen-print
ink: flat, hard, saturated, and tactile rather than glossy, metallic, or glassy.

Composition: [describe the main reading path and locations]. Use three depth planes:
low-opacity blue-black [rear subject] in the background, large typography and graphic blocks
in the middle, and crisp hot-magenta continuous line art plus [foreground symbols] on top.
Create depth through scale, occlusion, blur separation, dark offset duplicate layers,
shallow perspective skew, forced perspective, and selective cast-shadow shapes.

Typography: render the following wording exactly and keep it readable:
Main title: “[main title]”
Subtitle: “[subtitle]”
Labels: “[label 1]”, “[label 2]”, “[label 3]”
Use heavy condensed Chinese display type and bold Latin grotesk type. Distort the main title
with controlled horizontal stretch, vertical compression, sliced offsets, and dark navy
extrusion copies. Do not add any other readable text.

Surface: selective screen-print grain, rough photocopy edges, small color-registration errors,
local sliced glitches, and restrained rear-layer motion blur. Keep the hierarchy intentional.
Do not use generic cyberpunk, chrome, glass, pastel colors, glossy CGI, symmetrical layout,
corporate branding, random logos, watermark, or meaningless text.
```

## Reference-guided template

```text
Use the attached reference image(s) only as visual guidance. Extract the shared visual grammar:
[palette], [typography behavior], [layer structure], [line-art language], [print treatment],
and [composition density]. Redesign the subject, wording, symbols, and arrangement for this brief:
[new brief].

Do not copy the reference's exact text, logo, QR code, character pose, illustration, or unique
composition. Render these requested words exactly: “[main title]”, “[subtitle]”, “[labels]”.
Preserve a clear three-plane 2.5D relationship between rear imagery, middle typography, and
foreground line art. Keep the electric-blue / hot-magenta / blue-black palette and matte print
behavior unless the brief overrides them.
```

## Strong physical 3D variant

Add this only when the user asks for object-like 3D:

```text
Make the main title into thick extruded typographic blocks with visible side faces,
sharp bevels, a strong perspective camera angle, layered depth, partial occlusion,
and directional cast shadows. Keep the material matte fluorescent ink rather than chrome.
The physical depth must support the editorial poster composition.
```

## API-oriented input record

Use this structure when an image-generation tool accepts separate prompt and image inputs:

```yaml
mode: spec-first | composition-calibration | style-calibration | reference-guided-edit
canvas: 3:4
subject: ""
main_title: ""
subtitle: ""
labels: []
text_density: low | medium | high
depth: flat | 2.5d | strong-3d
reference_images: []
preserve_reference_composition: false
post_typeset: true
```

When `reference_images` is empty, use the style specification only. When it contains one to four
images, attach only the images needed by the selected mode; do not assume that internal asset paths
are automatically included in the model request.
