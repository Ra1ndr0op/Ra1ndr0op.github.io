---
name: consulting-cover-prompt
description: Use when turning a business topic, article title, report theme, PPT cover need, X cover, public-account cover, or consulting analysis page into a premium strategy-consulting style image-generation prompt.
---

# Consulting Cover Prompt

## Overview

Create concise, production-ready prompts for a single consulting-style cover or one-page infographic. Treat the output as one visual page, not a full PPT deck.

Core principle: convert vague "premium, rational, clean" taste into prioritized constraints that image models can execute.

## Workflow

1. Identify the output type from the user's use case.
   - Cover: X cover, PPT cover, report cover, portfolio cover, public-account cover.
   - One-page infographic: consulting analysis page, methodology diagram, process map, matrix, flowchart.
2. Extract the title system.
   - A-layer: 2-8 Chinese characters or 1-4 English words as the giant core word.
   - B-layer: complete title as small subtitle or edge title.
   - C-layer: 1-3 restrained labels such as STRATEGY, MARKET INSIGHT, GROWTH SYSTEM, 2026.
3. Choose exactly one main metaphor and at most one supporting graphic language.
4. Specify layout, typography, palette, and text-accuracy rules.
5. Add a negative prompt and a short self-check.

## Decision Rules

For covers, prioritize: core word > whitespace > single metaphor > restrained subtitle system. Do not create complete funnels, multi-step methods, dense matrices, or full analysis pages.

For one-page infographics, allow 3-6 modules and one clear reading path, but keep every module short and tied to one business conclusion.

For image models that struggle with text, reduce visible text to the main title, short subtitle, and 1-3 labels. Require accurate, readable text and forbid pseudo-text or malformed Chinese.

Avoid naming specific consulting firms as a style target. Prefer "top-tier strategy consulting report", "executive strategy report", "Swiss corporate editorial design", and "typography-led consulting design".

## Metaphor Selection

Use the theme meaning to pick the metaphor:

| Theme signal | Main metaphor options |
| --- | --- |
| growth | upward path, expansion, flywheel, compound curve |
| conversion | convergence, filter, funnel, path |
| strategy | coordinate system, fork, decision path |
| system | modules, links, nodes, architecture |
| risk | threshold, defense line, fault line, grading |
| market | window, blocks, competitive map |
| value | ladder, scale, container, exchange |
| efficiency | compression, acceleration, flow, automation |
| opportunity | opening, breakthrough point, growth corridor |
| organization | hierarchy, collaboration network, governance |

## Common Fixes

- Too long or repetitive: compress repeated adjectives into one style line and keep hard constraints separate.
- Unclear target: state whether the answer should directly generate an image or output a reusable image prompt.
- Overloaded title treatment: choose one text reconstruction method, not a grab bag of cutting, matrices, paths, nodes, and funnels.
- Generic consulting imitation: remove firm names and describe the design language.
- Bad text rendering risk: explicitly require readable text and limit visible copy.

## Template

When the user wants a complete reusable prompt, load `references/prompt-template.md` and adapt it to the provided topic.
