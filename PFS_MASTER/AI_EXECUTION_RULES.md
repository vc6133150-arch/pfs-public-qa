# AI EXECUTION RULES
执行入口与步骤以 `CURRENT_STATE.md`、`CHANGELOG.md` 和 `CODEX_PROTOCOL.md` 为准；按 AFFECTS 读取对应 Master，必要时核对 START_HERE、DECISION_LOG、CONFLICTS、DEPRECATED；视觉任务再读 ASSET_POLICY。只有协议规定的情形才进行 full audit。

必须：
- 不改变 LOCKED
- 不覆盖 ORIGINAL
- 不执行未确认 DRAFT
- 不补全 TBC
- 不恢复 DEPRECATED
- CONFLICT 等人工决定
- 可自动补充 REFERENCE VISUAL，但明确标记
- 外部参考不得当 PFS 事实
- 网站执行后针对受影响内容做 Master vs Implementation 回归检查，只修可确定的 FAIL；明显视觉修改按协议生成 QA 截图
