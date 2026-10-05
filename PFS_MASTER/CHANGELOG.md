# PFS_MASTER CHANGELOG

## 2026-09-19

### ADDED
- 🔒 STAY → LIVE → BUILD｜停留 → 生活 → 建造的核心体验逻辑。
- 🔒 BUILDING = Learning + Making + Building Practice，并包含对空间与材料的认识。
- 🔒 Brand Language Extraction Rule：先保存原话，再分类，最后可选 AI Draft。
- 🔒 Brand Language Direction：优先描述人、空间、材料与建造的具体过程；抽象品牌用语须有来源或确认。

### CHANGED
- Learning / Making 不再作为与 Building 平级的核心体验阶段。

### PAUSED
- 🟡 “真的一起造”当前网站与品牌执行。

### SOURCE PRESERVED
- 🟢 现有网站文案：“在PFS，通过停留、生活、学习、制作与参与建造，认识空间与材料。”
- 🟢 历史体验结构：Arrival → Living → Learning → Making → Leaving。
- 🟡 “认识空间与材料”作为 LANGUAGE CANDIDATE。

### AFFECTS
- STAY、BUILDING、Brand Language、Content Logic。

### NO CHANGE
- Party Friend Ship 命名、PFS 建造学校主体、五个顶部导航、Homepage IA、九节点地图、SHOP、WORK WITH US、课程及产品 SOURCE FACTS。

## 2026-09-19 — Workflow protocol

### ADDED
- `CURRENT_STATE.md` 当前状态入口；`CODEX_PROTOCOL.md` 固定执行与 MASTER PATCH 流程；`TBC_QUEUE.md` 待确认问题队列。
- `PFS_视觉资产整理/ASSET_MANIFEST.md` 视觉来源与用途清单；视觉修改后的 `pfs/qa/` 截图机制。

### CHANGED
- AI 执行入口改为 CURRENT_STATE → CHANGELOG → AFFECTS → 受影响文件；旧执行说明指向新协议。默认做相关回归，不做每次全站 Audit。
- Changelog 后续只记增量，按 DATE / ADDED / CHANGED / LOCKED / PAUSED / DEPRECATED / SOURCE PRESERVED / AFFECTS / NO CHANGE 记录适用事项；无变化的状态写“无”。

### LOCKED
- Master 永久原地维护；MASTER PATCH 按影响范围更新 Master、Decision Log、Changelog 和必要的状态 / TBC 文件，按需同步网站、build 与回归检查。

### PAUSED
- 无新增。

### DEPRECATED
- 工作流层面禁止以 `PFS_MASTER_Vx`、新 Master ZIP 或每次新 Sitemap 替代增量维护；不改变既有内容状态标记。

### SOURCE PRESERVED
- 现有 Master 及视觉资产的来源与历史记录继续保留，未升级状态。

### AFFECTS
- Master 工作流、增量记录、待确认队列、视觉资产登记、网站变更后的 QA 与报告格式；本次不触发网站实现修改。

### NO CHANGE
- Party Friend Ship 命名、PFS 建造学校主体、Stay → Live → Build、五个顶部导航、Homepage IA、九节点地图、SHOP、WORK WITH US、课程及产品 SOURCE FACTS；网站视觉不变。

## 2026-09-19 — Website improvement patch

### ADDED
- Header 分级交互规则；大角怪 Building Kit 来源事实与来源视觉；近期平面图 provenance；首页交互插画地图执行规则。

### CHANGED
- WORK WITH US 当前五路径；SHOP 的 ONLINE SHOP 子分类及 Building Kit 详情；首页地图视觉与互动。

### LOCKED
- 五导航与首页层级保持不变；桌面 hover / focus、手机 Accordion、键盘操作、View All；九节点交互地图保留示意定位与准确性标识。

### PAUSED
- 不执行远期地图、NOW / FUTURE 切换；“真的一起造”继续暂停。

### DEPRECATED
- Space Use 当前网站入口（历史资料保留）。

### SOURCE PRESERVED
- 大角怪数字盖房套件原文、套件内容与视觉；《平面图.pdf》近期及远期来源。

### AFFECTS
- Header、STAY / BUILDING 菜单、SHOP / BUILDING KITS、WORK WITH US、Homepage Explore PFS Map、视觉资产登记、TBC 与网站 QA。

### NO CHANGE
- Party Friend Ship / The Spaceship 命名、五个一级导航、Homepage 模块、九个地图节点、既有课程与产品来源事实。

## 2026-09-19 — Website completion sprint

### ADDED
- About 与 Project Archive 的实际内容框架；内容可 TBC 但页面设计完整；CN / EN 对等规则。

### CHANGED
- 主要页面以编辑式编排与页面内定位降低分类页跳转；Rooms 回到 STAY 住宿信息内部；课程、产品、档案详情采用不同逻辑。

### LOCKED
- Concept Logic ≠ Website Copy；Preview before Page；只有内容充足才建立详情；建设中场地不使用虚构完工图片。

### PAUSED
- 无新增。

### DEPRECATED
- 当前 STAY 对外平行五阶段呈现；无意义的中间分类页作为必要访问路径。

### SOURCE PRESERVED
- 历史五阶段、公众号项目记录与图像各自保留年份及项目出处。
- Project Archive 逐项记录 2018 船厂造船、2019 新疆建造招募（仅招募/方案证据）、2022 OPENBIKE 夜校、2023 上海松山改造、2024 历史数字家具商店；富柜历史产品图、尺寸图与 400 × 400 × 500 mm 原资料均保留出处，不推断当前供应或项目完成状态。

### AFFECTS
- VISIT、STAY、BUILDING、SHOP、WORK WITH US、ABOUT、PROJECT ARCHIVE、DETAIL、HEADER、FOOTER、LANGUAGE、ASSETS、QA。

### NO CHANGE
- 五个顶部导航、Homepage IA、Hero 文案与图片顺序、九节点、Party Friend Ship 与 The Spaceship 命名。

## 2026-09-21 — IA consolidation

### ADDED
- Canonical PROJECT / COURSE / EVENT / PRODUCT / SPACE / INFO system；ONE OBJECT = ONE CANONICAL RECORD；全站 Search。

### CHANGED
- VISIT 合并为 practical visitor page；STAY 由 Accommodation → Living → While You're Here → Practical 组织；BUILDING 直接聚合具体对象；SHOP 分类改为 filters；WHAT'S ON 与 STAY 共用 EVENT dataset。

### LOCKED
- 五个一级入口代表 USER INTENT；Category / Tag / Relationship 分工；新增层级与详情页须通过必要性、互斥性和内容充分性判断。

### PAUSED
- “¥88/人 + 自助游览公共空间 + 一杯咖啡”保持 DRAFT / TBC，不发布。

### DEPRECATED
- BUILDING 的 TRY / JOIN / COURSES / BUILD 强制并列导航；LEARN / MAKE / BUILD 与 Courses / Real Builds 互斥分类。

### SOURCE PRESERVED
- 现有课程、项目、商品、空间与历史图片来源不变；缺失事实保持 null / empty / TBC。

### AFFECTS
- Header / Search、VISIT、STAY、BUILDING、WHAT'S ON、SHOP、WORK WITH US、Footer、structured content、QA。

### NO CHANGE
- HOME visual composition、Hero、Map、About、Project Archive、现有成熟详情视觉、五个一级导航名称。

## 2026-09-21 — Public art direction

### ADDED
- Field Guide / Living Archive / Independent Editorial 视觉执行规则；公开文案内部术语禁用规则。

### CHANGED
- 真实摄影成为主要叙事；VISIT、STAY、BUILDING、SHOP、WORK WITH US、Map 与 Archive 采用不同编辑式构图；移动端单独重组节奏。

### LOCKED
- 未知事实在公开页面隐藏；内部 SOURCE / CANONICAL / TBC / pending / database 语言不对外展示。

### PAUSED
- 无新增。

### DEPRECATED
- 公开页面的系统状态标签、重复 card grid、dashboard / startup / hotel / generic store 表达。

### SOURCE PRESERVED
- 所有图片、项目、课程、产品和空间 provenance 继续保留在 Master 与 structured content。

### AFFECTS
- Global visual language、HOME、Map、VISIT、STAY、BUILDING、SHOP、WORK WITH US、Archive、Detail、Mobile、public copy、QA。

### NO CHANGE
- IA、五导航、canonical data model、Search architecture、EVENT dataset、HOME section order、Map system、Archive system。

## 2026-09-23 — One-shot content completion

### ADDED
- P-CUT 单一 canonical 页面及 SHOP / WORK WITH US 双入口；P-CUT Search 记录与 verified relationships。
- BUILDING participation formats：DAY BUILD / BUILD WEEKEND / BUILD RESIDENCY（作为 attributes，不是分类）。
- 只使用已确认事实的 practical FAQ。

### CHANGED
- BUILDING Master 中过时的 TRY / JOIN / COURSES / BUILD 强制结构改为 canonical COURSE / PROJECT / EVENT 聚合规则。
- Search canonical IDs 去重并补充 boat / OPENBIKE / digital joinery / P-CUT 等明确关系。

### LOCKED
- P-CUT one body / dual entry；未知设备、费用、材料与申请流程继续隐藏。

### PAUSED
- 无新增。

### DEPRECATED
- 无新增；既有废弃 IA 继续禁止恢复。

### SOURCE PRESERVED
- 历史数字家具商店 CNC 过程图继续作为历史项目影像，不代表当前 P-CUT 设备。

### AFFECTS
- BUILDING、SHOP、WORK WITH US、P-CUT、SEARCH、FAQ、STAY request、canonical data、QA。

### NO CHANGE
- 五个顶部导航、Homepage IA、九节点地图、Party Friend Ship / The Spaceship 命名、11 个产品、EVENT 单一数据源。

## 2026-09-23 — Full Content Fill V2

### ADDED
- VISIT 三条直接路径与完整 practical information structure；STAY 房型说明、Daily Breakfast、STAY + BUILDING 与询问准备路径。
- 课程详情的已知对象、时长、过程、Stay 与空间关系；P-CUT 文件 / 想法分流；WORK WITH US 五路径实质说明；分领域 FAQ。
- 七张用户已提供图片的 `SOURCE PROVIDED — LOCAL HANDOFF PENDING` 资产交接记录。

### CHANGED
- 公开 Search 摘要移除内部待确认语言；九节点说明改为对象关系与已知用途。
- 内容完成采用 FACT / APPROVED LOGIC / RECOMMENDATION / TBC PARAMETER 模型；未知值隐藏但保留访客任务结构。

### LOCKED
- Daily Breakfast 是 STAY 内容；Build Weekend 仍为参与形式，不是新 COURSE。
- P-CUT 与 Bring Your Idea 按“已有可加工文件 / 仍需设计”分流。

### PAUSED
- P-CUT 的 FILE → CHECK → QUOTE → CUT → PICK UP / SHIP → BUILD 完整运营流程仍为建议，不宣传为现行政策。

### DEPRECATED
- 无新增；现有废弃 IA 与 Space Use 继续禁止恢复。

### SOURCE PRESERVED
- 历史课程时长、对象和步骤；现有五个可核验项目详情；V2 历史项目池名称；七张对话来源图片的使用边界。

### AFFECTS
- VISIT、STAY、BUILDING、COURSE DETAIL、P-CUT、WORK WITH US、SEARCH、FAQ、MAP descriptions、ASSET MANIFEST、QA。

### NO CHANGE
- 五个顶部导航、Homepage IA、九个地图节点、canonical types、Hero、SHOP 商品数量、Footer 结构、Party Friend Ship / The Spaceship 命名。

### ASSET HANDOFF RESOLVED — 2026-09-23
- 七张用户提供图片已复制到 `pfs/src/assets/` 并建立 ASCII 文件绑定；Manifest 状态更新为 `PFS SOURCE ASSET — LOCAL BOUND`。
- CNC Router 绑定 P-CUT；建造过程绑定 BUILDING；团队建造近景绑定 WORK WITH US；夏令营记录绑定未来建筑师；商店与团队绑定历史数字家具项目。安吉离岛与团队工作图保留本地来源，等待精确项目归属后再公开绑定。

## 2026-09-23 — V3 Master content recovery

### ADDED
- 已确认地址、AMAP POI / 坐标、OPEN DAILY 10:00–18:00。
- STAY check-in / check-out / breakfast 时间与 inclusion；确认联系渠道。
- publicOperatingStatus、planning / recommended vs actual / public、form delivery、Screenshot Truth 与六张必显图片验收规则。

### CHANGED
- 课程由“无日期即不可用”修正为所有现有当前课程 OPEN FOR ENROLLMENT；COURSE 与 EVENT 分离。
- 11 件当前产品状态为 AVAILABLE TO BUY；购买状态与库存数量分离。
- SHOP → P-CUT 恢复为独立入口；canonical 去重不再删除合法入口。

### LOCKED
- SHOP menu / Landing、WORK WITH US、SEARCH 均进入同一 P-CUT canonical route。
- 表单无真实后端时不得显示已送达；六张 REQUIRED 图必须有实际 desktop / mobile render，安吉离岛图 HOLD。

### PAUSED
- 所有 recommendedPrice / planningUnits / recommended capacity 与流程继续属于 review / planning，不作为现行公共事实。

### DEPRECATED
- 无新增；旧五阶段、TRY / JOIN / COURSES / BUILD、Space Use、旧门店与旧首页入口继续禁止恢复。

### SOURCE PRESERVED
- 七张用户图保留原始文件与来源边界；安吉离岛案例不在 provenance 确认前公开归入项目。

### AFFECTS
- CURRENT_STATE、VISIT、STAY、BUILDING、COURSE、SHOP、PRODUCT、P-CUT、WORK WITH US、ARCHIVE、MAP、SEARCH、FAQ、CONTACT、FOOTER、ASSETS、QA。

### NO CHANGE
- 五个一级导航、Homepage body IA、九节点、Party Friend Ship / The Spaceship 命名、canonical object types。

## 2026-09-23 — Final content completion sprint

### ADDED
- Complete public review flows for Stay, product acquisition, P-CUT, Bring Your Idea, Build With PFS and Venue Hire.
- Review display values for Stay, Build Weekend, Venue Hire and P-CUT; product DIY / ready-to-use selection and pickup rule.

### CHANGED
- SHOP restores 软手包 as the DIY acquisition mechanism for all 11 current products in this review build.
- WORK WITH US routes five distinct visitor needs to their correct canonical service or project evidence.
- STAY now exposes prices, Add Building, Build Weekend, longer stay, site access and one prefilled request flow.

### LOCKED
- One canonical object per Product / Course / Project / Space / P-CUT; multiple legitimate entry points remain allowed.
- Public pages show usable review information and never expose internal TBC / provisional / source-status labels.

### SOURCE PRESERVED
- P-CUT CNC warehouse / digital furniture shop framing; user-prepared file boundary; ¥800 / sheet including material + cutting.
- Soft Hand Pack DIY-at-home / DIY-at-PFS / ready-to-use mechanism and 95% pickup source rule.

### AFFECTS
- VISIT / STAY / BUILDING / COURSE / SHOP / PRODUCT / P-CUT / WORK WITH US / FAQ / ABOUT / CONTACT / structured content / QA.

### NO CHANGE
- Homepage IA, five primary navigation items, nine map nodes, current product list, current course records, Party Friend Ship naming.

## 2026-09-23 — V20 Content & Flow Correction

### ADDED
- VISIT Virtual Ticket、¥88 Daily Visit offer 与 Before You Come。
- STAY 简化 Booking、早餐参考视觉、Current Events 与 DIY Kits Experience。
- Product detail 的 Price / Material / Process 信息结构。

### CHANGED
- BUILDING 按 No Booking Needed / Booking Required 组织当前体验。
- STAY 主要行为由申请式流程改为 BOOK YOUR STAY。
- WORK WITH US 五路径补足具体输入、流程与 CTA。

### LOCKED
- Daily Visit 无需预约；10:00–18:00；¥88/person，含公共空间自助游览与一杯咖啡。
- Course / Product / Project 在大角怪关系中保持独立 canonical 对象。

### SOURCE PRESERVED
- 富柜 New Zealand Pine Plywood；早餐图保持 Reference Visual 标识。

### AFFECTS
- VISIT / SHOP / PRODUCT / STAY / BUILDING / COURSE / WORK WITH US / QA。

### NO CHANGE
- 顶部导航、Homepage IA、地图、routes、canonical types、Party Friend Ship / The Spaceship 命名。
## 2026-09-30 — V20 consolidated execution

### ADDED
- BLACK / WHITE / PFS RED public color system and page-specific visual personalities.
- VISIT Today at PFS paths and explicit unsubmitted visitor-ticket preview.
- 大角怪 search relationship to COURSE / PRODUCT / PROJECT / SPACE.

### CHANGED
- VISIT now opens with price, hours, inclusion, address and ticket action; Before You Come is removed.

### LOCKED
- RAW / PLAYFUL / EDITORIAL / HANDS-ON / UNFINISHED.

### AFFECTS
- VISIT / Search / public visual system / QA.

### NO CHANGE
- Top navigation / Homepage IA / Map nodes / canonical types / routes / existing source assets.
## 2026-10-01 — BUILDING Header navigation hotfix

### ADDED
- Global BUILDING workshop-index mega menu and mobile nested accordion.

### CHANGED
- BUILDING taxonomy is now visible from every route before entering the Landing.
- PFS red adjusted to muted industrial red `#B82924`.

### LOCKED
- 无需预订 / NO BOOKING NEEDED；需要预订 / BOOKING REQUIRED。
- 船厂 SCHOOL and 荒野建造大师班 child hierarchy.

### AFFECTS
- Global Header / BUILDING Landing terminology / Navigation QA.

### NO CHANGE
- Primary navigation / routes / canonical records / Homepage IA / Map / content facts.
