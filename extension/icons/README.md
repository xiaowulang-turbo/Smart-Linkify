# Icon guidance

The extension expects these PNG assets:

- `icon16.png` — toolbar icon
- `icon48.png` — extension management page
- `icon128.png` — installation and Chrome Web Store

## Source SVG contract

When creating the source artwork:

- Use a `24 24` viewBox so the mark aligns with the UI icon system.
- Prefer rounded line SVGs with `stroke="currentColor"`, `fill="none"`,
  `stroke-linecap="round"`, and `stroke-linejoin="round"`.
- Keep the mark simple and legible at toolbar size.
- Use the shared restrained teal accent only when a filled export is required;
  avoid gradients and baked-in theme-specific colors.

Example source structure:

```svg
<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="..." stroke="currentColor" stroke-width="2"
    stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```

## Asset validation

Before adding final assets, validate each export at `16x16`, `48x48`, and
`128x128`:

1. Confirm the mark remains recognizable without relying on fine detail.
2. Check transparent or solid backgrounds against light and dark surfaces.
3. Confirm crisp edges and correct padding at all three sizes.
4. Keep the PNG files in this directory and update the manifest references
   only when the assets are ready.

Final PNG/SVG assets are intentionally not generated in this task.
