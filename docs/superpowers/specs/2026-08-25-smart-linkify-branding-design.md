# Smart Linkify Branding Update Design

## Goal

统一项目中面向用户展示的英文产品名称为 `Smart Linkify – Instant hyperlink conversion`，使官网、README 和扩展界面与当前已发布的英文名称一致。

## Scope

更新以下用户可见内容中的旧英文产品名：

- `README.md` 和 `README.zh-CN.md` 中的英文标题、介绍、版权和署名
- `website/` 官网首页、文档、隐私政策、更新日志及其英文国际化文案
- 扩展 Popup、Options、Welcome 页面及英文界面翻译
- `test.html` 中的测试页标题
- `LICENSE` 中的版权名称

同步更新以下项目标识：

- GitHub 仓库 slug 为 `Smart-Linkify`
- 官网 URL 为 `smart-linkify.vercel.app`

保留中文产品名称、中文翻译文本，以及仅描述功能而非产品名称的英文句子，例如扩展 description。

## Implementation

对旧名称进行全仓库检索并逐处判断：

- `Smart Text-to-Link Converter` 作为产品名时替换为新标题
- `Smart Hyperlink Recognition` 作为英文产品名时替换为新标题
- 不修改仅描述功能的文案及中文产品名称；所有仓库链接、官网链接和相关路径统一使用新标识

替换后再次检索两类旧产品名，确保用户可见范围不再残留；检查新标题在 README、官网英文文案和扩展英文界面中均可找到。

## Validation

- 运行 `npm run lint`
- 运行 `npm run lint:tsc`
- 运行 `npm run lint:fix`
- 运行全仓库旧名称检索，确认结果符合保留范围
- 查看 Git diff，确认仅包含品牌文案和本设计/计划文档的预期变更
