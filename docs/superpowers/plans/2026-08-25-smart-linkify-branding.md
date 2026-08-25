# Smart Linkify Branding Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将所有面向用户展示的旧英文产品名统一为 `Smart Linkify – Instant hyperlink conversion`。

**Architecture:** 这是一次品牌与链接同步，不改变运行逻辑、数据流或依赖。通过精确替换已盘点的旧品牌文本、仓库 slug 和官网 URL，保留中文名称与功能描述。

**Tech Stack:** Markdown、静态 HTML、原生 JavaScript 国际化字典、Chrome Extension Manifest 文案。

## Global Constraints

- 仅更新用户可见的英文产品名。
- 保留中文产品名称及中文翻译文本。
- GitHub 仓库 slug 使用 `Smart-Linkify`，官网 URL 使用 `smart-linkify.vercel.app`。
- 保留仅描述功能而非产品名称的英文句子，例如扩展 description。
- 不新增依赖，不修改 CSS、运行逻辑或资源文件。

---

### Task 1: Replace stale English product names

**Files:**
- Modify: `README.md`
- Modify: `README.zh-CN.md`
- Modify: `LICENSE`
- Modify: `test.html`
- Modify: `extension/i18n.js`
- Modify: `extension/options.html`
- Modify: `extension/popup.html`
- Modify: `extension/welcome.html`
- Modify: `website/index.html`
- Modify: `website/docs.html`
- Modify: `website/privacy.html`
- Modify: `website/changelog.html`
- Modify: `website/README.md`
- Modify: `website/js/i18n.js`

**Interfaces:**
- Consumes: Existing occurrences of `Smart Text-to-Link Converter` and `Smart Hyperlink Recognition`.
- Produces: User-visible occurrences using `Smart Linkify – Instant hyperlink conversion`; technical identifiers and functional descriptions remain unchanged.

- [ ] **Step 1: Capture the stale-name baseline**

Run:

```bash
rg -n "Smart Text-to-Link Converter|Smart Hyperlink Recognition" README.md README.zh-CN.md LICENSE test.html extension website
```

Expected: output lists the previously identified user-visible occurrences and no unrelated source tree.

- [ ] **Step 2: Apply the minimal text replacements**

Replace each product-name occurrence in the listed files with:

```text
Smart Linkify – Instant hyperlink conversion
```

Update repository links, website links, and repository directory examples to the new identifiers; preserve Chinese product names and functional descriptions.

- [ ] **Step 3: Verify stale names and preserved identifiers**

Run:

```bash
rg -n "Smart Text-to-Link Converter|Smart Hyperlink Recognition" README.md README.zh-CN.md LICENSE test.html extension website
rg -n "Smart Linkify – Instant hyperlink conversion" README.md website extension LICENSE test.html
rg -n "SmartHyperlinkRecognition|smart-hyperlink-recognition\\.vercel\\.app" README.md README.zh-CN.md extension website package.json CHANGELOG.md
```

Expected: stale-name output contains no user-visible old product names; new-name output contains all intended surfaces; repository and URL identifiers remain present.

- [ ] **Step 4: Review the content-only diff**

Run:

```bash
git diff --check
git diff --stat
git diff -- README.md README.zh-CN.md LICENSE test.html extension website
```

Expected: only intended English branding text changes appear; no CSS, JavaScript behavior, dependency, URL, or Chinese-content changes are present.

- [ ] **Step 5: Commit the implementation**

Run:

```bash
git add README.md README.zh-CN.md LICENSE test.html extension website
git commit -m "docs: sync Smart Linkify branding"
```

Expected: one commit containing only the branding update.

### Task 2: Run repository validation

**Files:**
- Test: repository scripts and the final branding diff

**Interfaces:**
- Consumes: The committed branding-only changes from Task 1.
- Produces: Fresh validation evidence for the pull request.

- [ ] **Step 1: Run the configured lint command**

Run:

```bash
npm run lint
```

Expected: exit code 0.

- [ ] **Step 2: Run the requested TypeScript lint command**

Run:

```bash
npm run lint:tsc
```

Expected: exit code 0; if the script is not defined, record that limitation and continue with available validation.

- [ ] **Step 3: Run the requested lint-fix command**

Run:

```bash
npm run lint:fix
```

Expected: exit code 0; if the script is not defined, record that limitation and confirm it made no changes.

- [ ] **Step 4: Verify repository state after validation**

Run:

```bash
git status --short
git log -2 --oneline
```

Expected: no unexpected generated changes; the branding commit is present.

- [ ] **Step 5: Push the branch**

Run:

```bash
git push -u origin cursor/update-smart-linkify-branding-998f
```

Expected: branch is available on `origin` for the pull request.
