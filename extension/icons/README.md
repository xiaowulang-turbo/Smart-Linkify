# Icon assets

The extension ships these transparent RGBA PNG assets, all of which are
referenced by `extension/manifest.json`:

- `icon16.png` — 16×16 toolbar icon
- `icon48.png` — 48×48 extension management icon
- `icon128.png` — 128×128 installation and Chrome Web Store icon

The canonical source is `shared/icons/link-2.svg`. It uses the shared 24×24
icon contract: `currentColor`, linear stroke, 2.25px width, and round caps and
joins. The PNG exports use the existing `#0f766e` accent for the mark and a
transparent background; fully transparent pixels retain neutral RGB values for
predictable previews.

## Validation guidance and results

The exports were generated locally with a deterministic supersampled renderer
using only Python's standard library; no runtime image dependency is required.
Each size was inspected visually and checked programmatically for:

1. Valid PNG signature and exact dimensions.
2. Nonuniform transparent, partially covered, and opaque regions.
3. A padded alpha bounding box rather than a full-canvas fill.
4. Two connected link bodies remaining distinguishable in the 16×16 export.

Current shipped-file checks:

- `icon16.png`: valid PNG, 16×16, padded two-link mark readable at toolbar size.
- `icon48.png`: valid PNG, 48×48, crisp two-link mark.
- `icon128.png`: valid PNG, 128×128, crisp two-link mark.
- `../../website/images/icon512.png`: valid PNG, 512×512, crisp two-link mark.
