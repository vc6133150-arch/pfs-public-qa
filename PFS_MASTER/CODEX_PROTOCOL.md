# CODEX PROTOCOL｜PFS 固定工作协议

## Workspace and authority
`codex_test/pfs/` 是当前网站；`codex_test/PFS_MASTER/` 是唯一事实与决策源；`codex_test/PFS_视觉资产整理/` 是视觉资产池。Master 永久原地维护，不通过版本目录或 ZIP 替换。

优先级：**MASTER > 当前明确指令 > 历史资料 > AI inference**。当前任务的明确指令不能静默改写已有 LOCKED 决定；出现真正冲突时保留冲突并交由人判断。Codex 不自行重新定义 PFS 品牌战略或信息架构。

## 每次执行
1. 读取 `CURRENT_STATE.md`。
2. 读取 `CHANGELOG.md`，查找最新增量的 AFFECTS。
3. 只读取受影响的 Master 文件；按需核对 `DECISION_LOG.md`、来源和状态。
4. 只修改受影响的网站实现，不改变无关 LOCKED 内容。
5. 不执行 DRAFT，不推断 TBC，不恢复 DEPRECATED；保存 ORIGINAL 与 SOURCE 的 provenance。
6. 网站修改后运行 build 与相关回归检查。
7. 明显视觉修改时，如环境支持浏览器截图，自动生成或更新 `../pfs/qa/` 验收截图；至少覆盖 `home-desktop.png`、`home-mobile.png`、`visit-desktop.png`、`stay-desktop.png`、`building-desktop.png`、`shop-desktop.png`、`work-with-us-desktop.png`。如环境不支持，报告具体限制。截图是 QA 材料，不是正式网站资产。
8. 只报告有意义的变化、FAIL、TBC 和意外变化。

不在每次任务重新进行全站需求分析。只有用户明确要求、Master 核心 IA 改变、大规模重构，或有证据怀疑实现严重偏离 Master 时，才做 full audit。

## MASTER PATCH
新确认决定增量写入现有 Master：判断受影响文件 → 原地修改 → 更新 `99_DECISIONS/DECISION_LOG.md` → 更新 `CHANGELOG.md` 的 AFFECTS → 核心状态变化时更新 `CURRENT_STATE.md` → 涉及待确认项时更新 `TBC_QUEUE.md` → 按 AFFECTS 判断网站是否需要同步。网站需要同步时，只修改相关部分并运行 build、回归检查和必要的视觉 QA。

禁止创建 `PFS_MASTER_Vx`、新的 Master ZIP、每次重新建立 Sitemap、重写无关 Master 文件，或因局部 Patch 重构整个网站。

## TBC resolution
AI 不补全 TBC。人类提供答案后，保留旧记录并标记 RESOLVED，按证据与确认程度升级为 SOURCE FACT 或 LOCKED；同时更新对应 Master、Decision Log、Changelog、TBC_QUEUE。网站可显示必要的“待确认”，不得为视觉完整而虚构答案。

## 默认报告
仅列 `CHANGED`、`FAIL`、`TBC`、`UNEXPECTED`、`BUILD: PASS / FAIL`、`FILES`。无失败写 `FAIL: None`；不重复未变化的 PASS 项。

## 责任分工
- ChatGPT / Human：Discovery、内容提取、品牌理解、决策、LOCK / TBC / DEPRECATED 判断、视觉与品牌 QA。
- PFS_MASTER：Single Source of Truth、当前决定、provenance、变更历史、TBC。
- Codex：Master 维护、网站实现、机械 QA、build、回归检查、截图生成。

## 标准指令
“应用最新 Master Patch” = 读 CURRENT_STATE → 读 CHANGELOG → 按最新 AFFECTS 应用增量 → 必要时同步实现 → build → 回归检查 → 视觉修改时生成 QA 截图 → 简短报告。无需重新发送完整项目说明。

## GitHub independent QA sync
网站 QA 完成后，覆盖 `../pfs/qa/screenshots/latest/`，并将该目录、`../pfs/qa/QA_REPORT.md` 与当前 `PFS_MASTER/` 同步到 `vc6133150-arch/pfs-public-qa`。提交后必须通过 GitHub 验证真实路径。Codex 的技术报告不替代外部 reviewer 的最终视觉验收。
