# Ra1ndrop Pixel2Motion Spec

## Source

- Raster source: `assets/ra1ndrop-main-logo-web.png`
- Source size: 1083 x 1380 transparent PNG
- Final integration target: `home.html` hero logo
- Static fallback assets kept: `assets/ra1ndrop-main-logo-transparent.png` and `assets/ra1ndrop-avatar-transparent.png`

## Motion brief

- Personality words: premium, calm, alive.
- Usage context: homepage hero reveal plus a very quiet idle ember.
- Timing preset: Elegant / Premium from the Pixel2Motion personality mapping.
- Total reveal duration: 1600ms.
- Timeline shape: 20% anticipation, 50% action, 30% follow-through.

## Semantic parts

- `#mark`: the full raindrop/flame form.
- `#ribbon-left`: the taller left ribbon.
- `#ribbon-right`: the smaller counter-ribbon.
- `#dot`: the warm ember point.
- `#dot-glow`: secondary action for the ember.
- `#wordmark`: serif Ra1ndrop wordmark.

## Choreography

1. The mark begins as a faint low silhouette so the homepage never has a blank logo area.
2. The left ribbon rises first, then the right ribbon follows with a slight delay.
3. The ember dot arrives late with a restrained overshoot.
4. The wordmark rises after the mark is readable.
5. The final state lands on the same static SVG geometry.
6. After reveal, only the ember breathes subtly.

## Principles applied

- Staging: the viewer sees the mark before the wordmark.
- Timing: 1600ms keeps the motion premium rather than startup-fast.
- Slow in / slow out: all reveal segments use literal cubic-bezier easing.
- Follow-through: ribbons and dot settle after their arrival.
- Secondary action: the ember glow breathes quietly after the reveal.
- Appeal: no squash on the main mark; the small colored dot carries life.

## QA notes

- Homepage uses inline SVG, not the raster PNG, so the animated parts are addressable.
- Reduced motion falls back to the final static state immediately.
- The standalone `logo_motion.html` includes `#logo-root`, replay, slow mode, speed control, `?t=<ms>`, `?static=1`, and a ready hook. It attempts `window.__p2mReady` and also sets `data-p2m-ready="true"` for runtimes that keep `window` non-extensible.
- The vector is a minimal smooth redraw of the raster source rather than an auto-trace; this protects edge smoothness and makes the geometry animatable.
