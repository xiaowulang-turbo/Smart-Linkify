# Icon assets

The extension ships these PNG assets, all of which are referenced by
`extension/manifest.json`:

- `icon16.png` — 16×16 toolbar icon
- `icon48.png` — 48×48 extension management icon
- `icon128.png` — 128×128 installation and Chrome Web Store icon

No standalone SVG files are shipped in this directory. The SVGs used by the
extension UI are inline markup and are separate from the manifest icon assets.

## Validation guidance and results

For every replacement export, check each size for:

1. A recognizable mark without relying on fine detail.
2. Adequate contrast on light and dark surfaces.
3. Crisp edges, transparent-background behavior, and consistent padding.

Current shipped-file checks:

- `icon16.png`: present, valid PNG, 16×16.
- `icon48.png`: present, valid PNG, 48×48.
- `icon128.png`: present, valid PNG, 128×128.

The current exports render as solid teal squares at all three sizes. Their
presence, format, dimensions, and manifest references are valid; review the
mark's recognizability and padding if the artwork is replaced.
