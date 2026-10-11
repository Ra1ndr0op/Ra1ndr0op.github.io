# Text and Layout Rules

Use these rules whenever the poster contains required wording.

## Text budget

Image models are most reliable with:

- one exact main title;
- one short exact subtitle;
- two to six short labels or tags.

Keep paragraphs, long quotations, dense footnotes, and QR payloads out of the first image pass. Reserve them for a typesetting pass unless the user explicitly accepts approximate text.

## Hierarchy

Assign every text block a role before writing the prompt:

- **Anchor** — the largest title and the main visual object.
- **Support** — subtitle or event descriptor that establishes meaning.
- **Rhythm** — short English tags, category labels, dates, or repeated words.
- **Texture** — tiny fragments used sparingly as graphic material.

Use no more than two anchor blocks in one poster. Give the anchor a clear location and color. Do not ask the model to make every text element equally large.

## Prompt wording

Write required wording in quotation marks and say `render exactly, with correct spelling`. List all allowed text in one place. State `do not add any other readable text` when text accuracy matters.

For Chinese text, mention the desired type behavior rather than relying on a font name alone:

```text
heavy condensed Chinese display typography, bold black sans-serif construction,
slightly compressed characters, tight spacing, clean readable glyph structure
```

If a title must be visibly distorted, request controlled transformations after establishing legibility:

```text
keep the Chinese title legible while applying horizontal stretch,
shallow perspective skew, sliced offsets, and dark duplicate extrusion layers
```

## Layout specification

Always pair text with location, scale, color, and depth. For example:

```text
Place the exact headline “夜生活观察报告” across the upper third,
very large hot-magenta type, slightly skewed, with a dark navy offset copy behind it.
Place the exact subtitle “记录、偏见与狂欢” near the center-left,
medium black type partially overlapped by the foreground line drawing.
```

## Post-generation decision

If the user needs a publication-ready poster with many exact Chinese words, generate a clean base image with the principal title and leave clear areas for typesetting. Add the remaining wording in Figma, Illustrator, Photoshop, or another layout tool. Report this as a finishing note rather than silently dropping required text.
