---
name: chrome-extension-ui-regression
description: Use when changing Chrome extension UI files, Popup/Options/Welcome pages, UI localization, theme controls, or other browser-visible extension behavior.
---

# Chrome Extension UI Regression

Use a `computerUse` subagent for browser-visible changes. Do not launch it for documentation-only or non-visual maintenance changes. A changelog change triggers this skill when the changelog is rendered by a website page.

## Prepare the extension

1. Confirm the repository and extension root:
   ```bash
   REPO_ROOT="$(git rev-parse --show-toplevel)"
   test -f "$REPO_ROOT/extension/manifest.json"
   ```
2. Prefer the already-loaded unpacked extension. After source changes, use **Reload** from `chrome://extensions`.
3. If loading is required, open the file picker at `"$REPO_ROOT"` and **single-click** the `extension` folder, then click **Open/Select Folder**. The selected item must be the folder itself:
   - Do not double-click into `extension`.
   - Do not select `extension/icons` or another child folder.
   - Do not repeatedly press Return after a failed selection.
4. If the picker opens inside `extension`, or the button is disabled, cancel once. Reopen at the repository parent, single-click `extension`, and select it. If that fails, stop and report the selected path; never retry in a loop.
5. On `chrome://extensions`, verify the loaded item has no manifest error and its files come from the intended repository checkout. Close any stale Welcome tab before retesting it.

## Test matrix

- Popup: open it from the toolbar; test light and dark themes; verify essential SVG icons and labels are vertically aligned; test Settings and Refresh actions.
- Options: open the settings page; toggle themes; switch Chinese/English; verify labels, controls, and layout.
- Welcome: open `welcome.html`; verify the page loads, contains no presentation emoji, and its Settings action works.
- Content behavior: when `content.js` or related matching logic changes, open `test.html` and test both initial and dynamically added content.

## Failure protocol

Record the exact page, theme, action, visible error, and selected filesystem path. Stop after one picker recovery. Separate a loader/path failure from an extension UI failure; do not claim the UI was tested when the intended extension was not loaded.

## Report

Return: loaded extension identity/path, pages tested, theme/language combinations, actions tested, concrete results, screenshots if available, and any blocker. State explicitly when a check was skipped and why.
