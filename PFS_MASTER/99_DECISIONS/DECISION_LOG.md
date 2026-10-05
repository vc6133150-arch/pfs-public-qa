# DECISION LOG — 2026-09-19
- 🔒 PFS 建造学校 = 当前 PFS 场地主体；住宿包含其中。
- 🟣 保存用户提供的三条 ORIGINAL。
- 🔒 顶部导航 = VISIT / STAY / BUILDING / SHOP / WORK WITH US。
- 🔒 中文 = WORK WITH US｜与 PFS 共创。
- 🔒 Homepage = Hero → WHAT'S ON → Explore PFS Map → Footer。
- 🔒 场地空间、PFS 建造学校均不成为第六导航。
- 🔒 Offline Shop = PFS船厂大厅。
- ⚫ 首页五个一级导航卡片废弃。
- ⚫ 汉阳店/嘉兴店当前网站执行废弃。
- ⚫ LEARN & MAKE｜学 & 做 旧导航废弃。
- ⚫ WORK WITH US｜和 PFS 一起做 旧中文废弃。
- 🟡 DRAFT 未确认不得执行。
- 🔵 AI 可自动补充参考图片/示意地图，但不得冒充真实资产/实测地图。

- 🔒 [MAP] Explore PFS Map 保留停车场，当前锁定为 9 个节点。
- 🔒 [PRODUCT/MATERIAL] “新西兰松木多层板”英文采用 LVL / Laminated Veneer Lumber。
- 🔒 [TECH] 当前技术资料空缺暂不填补，等待直接 PFS 技术来源。

- 🔒 [NAMING] 派对朋友的飞船 = Party Friend Ship；项目名称不得改为 Spaceship，也不得被 Building Camp / Building School 替代。
- 🔒 [NAMING/SPACE] 大飞船 = The Spaceship；The Spaceship 仅指该空间节点。
- 🔒 [ASSET] Logo 使用官方/用户确认的 PFS 官方资产；Logo 更新不得改变 LOCKED 网站结构与内容。
- 🟢 [SHOP/SOURCE] 软手包 = 数字家具材料包 / DIY KITS；历史整理资料记录可在线售卖，具体交易信息仍 TBC。
- 🟢 [ASSET/HISTORY] 汉阳数字榫卯商店为 PFS 历史空间，当前不得作为线下实体/到访入口。
- 🟢 [ASSET/HISTORY] 2019 新疆木构零件只证明历史工法，不证明当前 BUILDING KITS 可售。

## MASTER PATCH — 2026-09-19
- 🔒 [EXPERIENCE] 当前核心体验逻辑 = STAY → LIVE → BUILD｜停留 → 生活 → 建造；Learning、Making、Building Practice 归入 BUILDING。BUILDING 也包含对空间与材料的认识，不限于狭义施工。
- 🟢 [HISTORICAL SOURCE] Arrival → Living → Learning → Making → Leaving 保留为历史来源；不作为当前 Website IA 的五个平级核心模块。
- 🟡 [PAUSED / DRAFT] “BUILD｜真的一起造”保留历史来源；“真的一起造”不作为当前 slogan、BUILDING 核心表达、栏目标题、Hero copy 或主要传播语言。
- 🟢 [SOURCE COPY] “在PFS，通过停留、生活、学习、制作与参与建造，认识空间与材料。”为现有网站来源文案，不升级 ORIGINAL / LOCKED。
- 🟡 [LANGUAGE CANDIDATE] “认识空间与材料”待更多原始资料判断。
- 🔒 [BRAND LANGUAGE] 提取品牌语言先保存原话、再分类、最后可选 AI Draft；AI Draft 不得覆盖 Original。内容优先描述人的行动、空间使用、生活、学习、制作、建造与材料过程，抽象术语须有原始来源或 LOCKED 决定。
- 🔒 [NO STRUCTURAL SIDE EFFECT] Party Friend Ship 命名、PFS 建造学校主体、五导航、Homepage IA、九节点地图、SHOP、WORK WITH US、课程及产品 SOURCE FACTS 均不变。

## WORKFLOW PROTOCOL — 2026-09-19
- 🔒 [PROCESS] `PFS_MASTER/` 永久原地维护；CURRENT_STATE → CHANGELOG → AFFECTS → 受影响文件是默认执行入口。不得以版本目录或 ZIP 替换 Master。
- 🔒 [PROCESS] MASTER PATCH 增量更新相关 Master、Decision Log、Changelog；核心状态变化更新 CURRENT_STATE，待确认事项更新 TBC_QUEUE；按 AFFECTS 决定是否同步网站。不得因局部 Patch 重做全站需求分析或无关架构。
- 🔒 [QA] 网站修改运行 build 与相关回归检查；明显视觉修改且环境支持时生成或更新 `pfs/qa/` 截图作为验收材料，不作为正式资产。
- 🔒 [PROVENANCE/TBC] `TBC_QUEUE.md` 汇总需要人类确认的事项；解决后保留 RESOLVED 记录并同步相关文件。`PFS_视觉资产整理/ASSET_MANIFEST.md` 登记视觉来源与使用边界。
- 🔒 [RESPONSIBILITY/REPORT] 人类负责品牌与决策，Codex 负责维护和实现；默认只报告变化、FAIL、TBC、意外变化、build 与文件。
- 🔒 [NO CHANGE] 本次仅建立工作流机制；原有命名、体验逻辑、Website IA、Homepage、Map、Shop、Work With Us、课程和产品决定不变。

## WEBSITE IMPROVEMENT PATCH — 2026-09-19
- 🔒 [HEADER] 五个一级导航不变；桌面 hover / focus 分级、手机 Accordion、键盘 Tab / Enter / Escape、各一级 View All。课程归属 COURSES；商品归属 ONLINE SHOP 分类；STAY 菜单依 Stay → Live → Build。
- 🔒 [WORK WITH US] 当前五路径为 Volunteer / Venue Hire / P-CUT / Bring Your Idea / Build With PFS；Space Use = ⚫ DEPRECATED，历史来源保留。
- 🟢 [BUILDING KITS] 大角怪数字盖房套件及英文源标题 Open Source Building Kit、原文描述、应用场景、组成与“Make a room!”按 PFS SOURCE FACT 保存；交易状态与现行技术规格 TBC。
- 🟢 [ASSET/PLAN] 大角怪来源视觉为 PFS SOURCE ASSET；《平面图.pdf》第 1 页“近期”是插画地图的空间关系来源，第 2 页“远期”仅为来源记录。
- 🔒 [MAP] 九节点名称不变；以近期图为参考重绘交互插画地图，无法对应的节点保留示意定位，桌面侧栏/手机底部面板；不得将远期或面积表作为当前首页地图内容。
- 🔒 [NO IA CHANGE] 五导航、Homepage 四层内容、Party Friend Ship / The Spaceship 命名均不变。

## WEBSITE COMPLETION SPRINT — 2026-09-19
- 🔒 内容事实可以 TBC，页面视觉框架必须完成；Concept Logic ≠ Website Copy；主要页面直接呈现内容，Preview before Page，只有有实质内容的对象建立详情。
- 🔒 Rooms 属于 STAY 内住宿信息，非 Stay / Live / Build 同级；历史五阶段不在当前 STAY 页面机械公开为平行流程。
- 🔒 About 与 Project Archive 为活跃的 Footer / secondary 内容系统；中英主要内容需完整对等；视觉采用多尺度建筑编辑式构图，避免重复模块。
- 🔒 当前场地仍在建设；历史 PFS 项目、施工图像可按来源展示，不得冒充当前已完工房间、餐饮或设施。
- 🟢 五个历史项目档案及富柜产品资料按 `03_CONTENT/ARCHIVE_PROJECT_SOURCE_FACTS.md` 保存来源；2019 新疆资料为招募/方案记录，不据此宣称建成。
- 🔒 五导航、Homepage IA、Hero 文案和顺序、九节点及来源状态继续保持。

## IA CONSOLIDATION — 2026-09-21
- 🔒 五个顶部入口表达 USER INTENT；底层 canonical types = PROJECT / COURSE / EVENT / PRODUCT / SPACE / INFO，不自动成为主导航。
- 🔒 ONE OBJECT = ONE CANONICAL RECORD；其他页面仅 preview / aggregation / filter / search / related link。Category 管归属，Tag 管检索，Relationship 管连接。
- ⚫ BUILDING 的 TRY / JOIN / COURSES / BUILD 强制并列导航、LEARN / MAKE / BUILD 互斥分类、Courses & Workshops / Real Builds 互斥分类均 DEPRECATED；具体 COURSE / PROJECT / EVENT 可同页聚合。
- 🔒 VISIT 为单一 practical visitor page，不复制 HOME 的互动地图；STAY 房型归 Accommodation，While You're Here 读取统一 EVENT 数据；WHAT'S ON List / Calendar 读取同一 EVENT 数据。
- 🔒 Header 保留五入口并增加全站 Search；SHOP 使用 ALL / DIY KITS / BUILDING KITS / PFS GOODS filter，PFS船厂大厅继续为 OFFLINE SHOP；WORK WITH US 保留五条同级用户意图。
- 🟡/🟠 “¥88/人 + 自助游览公共空间 + 一杯咖啡”仅为页面逻辑 DRAFT，运营事实 TBC，禁止发布为已确认内容。

## PUBLIC ART DIRECTION — 2026-09-21
- 🔒 [VISUAL] 网站定位为 Field Guide / Living Archive / Independent Editorial；真实 PFS 图像承担主要叙事，版式强调图像、字体、留白、年份、地点、材料与过程。
- 🔒 [PUBLIC COPY] 公开页面不显示 SOURCE / SOURCE RECORD / CANONICAL / TBC / pending / database 等内部语言；未知事实隐藏，provenance 在 Master 中完整保留。
- 🔒 [PAGE ROLE] HOME=Arrival；VISIT=Orientation；STAY=Living；BUILDING=Making；SHOP=Objects made at PFS；WORK WITH US=Collaboration；Archive 按 Year → Project → Story → Images 阅读。
- 🔒 [NO IA CHANGE] 五个用户入口、Search、canonical types/data、EVENT dataset、Map 与 Archive system 均不改变。

## ONE-SHOT CONTENT COMPLETION — 2026-09-23
- 🔒 [P-CUT] P-CUT 使用一个 canonical INFO record / detail page，由 SHOP 与 WORK WITH US 双入口共同指向；Search 仅索引一次。
- 🔒 [BUILDING] DAY BUILD / BUILD WEEKEND / BUILD RESIDENCY 作为 participation format / package attribute，不建立新的 IA 分类；运营日期、价格和报名仍依赖已确认 EVENT。
- 🔒 [FAQ] FAQ 只公开已确认的项目命名、房型、统一活动数据、Building 逻辑、商品交易边界与九节点地图准确性说明；不公开内部 TBC 语言。
- 🟢 [ASSET] `archive-digital-shop-making.jpg` 可作为 P-CUT 的历史 CNC 加工过程语境，必须标明历史项目，不作为当前设备、能力或服务规格证明。
- 🟠 [SOURCE GAP] `PFS_FINAL_CONTENT_REGISTRY.md`、2025 project source 与独立 approved CNC Router asset 在当前 workspace 中未找到；不得推断补齐。

## FULL CONTENT FILL V2 — 2026-09-23
- 🔒 [STATUS MODEL] 页面内容按 FACT / APPROVED LOGIC / RECOMMENDATION / TBC PARAMETER 判定；未知值隐藏，但不得因此删除访客完成任务所需的结构。
- 🔒 [PUBLIC COMPLETENESS] VISIT、STAY、BUILDING、SHOP、P-CUT、WORK WITH US、Archive、Map、Search 与 FAQ 必须显示具体选择、差异、证据关系和可用下一步；公开页面禁止内部状态语言。
- 🔒 [STAY] Single / Double / Shared 保留；Daily Breakfast 作为当前 STAY 内容事实；STAY + BUILDING 连接已记录课程，BUILD WEEKEND 是参与形式而非新课程。
- 🔒 [P-CUT] 有可加工文件进入 P-CUT；仍需设计进入 Bring Your Idea。未知加工参数隐藏，单一 canonical 页面与双入口不变。
- 🟢 [ARCHIVE POOL] V2 记录的历史项目池保存为来源事实；只有具备实际来源内容与图片的项目通过 detail gate 发布独立详情。
- 🟠 [ASSET HANDOFF] 七张用户已提供图片统一登记为 SOURCE PROVIDED — LOCAL HANDOFF PENDING；不得记为未提供，不得以无关图片替代。

## V3 MASTER CONTENT RECOVERY — 2026-09-23
- 🔒 [VISIT] OPEN DAILY 10:00–18:00；太仓璜泾镇孟河村地址、AMAP POI「派对朋友的飞船」与坐标 121.075687, 31.671134 已确认。
- 🔒 [STAY] Check-in 14:00；Check-out 12:00；Breakfast 08:00–10:00，included。Single / Double / Shared 不变；planningUnits 与 recommendedPrice 不得冒充实际库存 / 公开价格。
- 🔒 [COURSE/EVENT] 所有现有当前课程开放报名；COURSE 是长期内容，EVENT 是有日期实例；开放报名不制造假日期。
- 🔒 [PRODUCT/STOCK] 11 件当前产品可购买；AVAILABLE TO BUY 不等于 IN STOCK；未知价格和库存数量不取消购买询问。
- 🔒 [P-CUT ENTRY] SHOP menu / SHOP Landing / WORK WITH US / SEARCH 四入口均指向一个 canonical P-CUT。Canonical deduplication ≠ entry deduplication。
- 🔒 [CONTACT] info@pfs.cool；partyfriendship@126.com；WeChat / Xiaohongshu pfspfs000；WeChat Official Account PFS4YOU。
- 🔒 [FORMS] 表单 UI / validation 与 delivery 分开验收；未连接后端时不得显示虚假成功，使用结构化 email / contact handoff 并如实记录 delivery。
- 🔒 [SCREENSHOT TRUTH] 当前构建的实际 desktop / mobile render 决定视觉 PASS；data binding、route 与 build 不能单独证明页面完成。
- 🔒 [ASSETS] 六张 REQUIRED 图须在指定 primary home 实际可见；安吉离岛图 HOLD，等待项目 provenance。
## 2026-09-23 — Complete content review build

- 🔒 DIY KITS = 软手包；review build applies DIY / Ready-to-use to all 11 current products without duplicating Product records.
- 🔒 DIY paths: Ship Home or Make at PFS; both explain sanding / assembly / recolor. Ready-to-use: delivery or PFS pickup.
- 🟢 SOURCE RULE: pickup at 95% of standard price. The review build displays it; final production validity remains separately confirmable.
- 🟢 P-CUT SOURCE: neighbourhood digital furniture shop / CNC warehouse; FIND → DOWNLOAD → user PREPARE → CUT → MAKE; ¥800 / sheet including material + cutting.
- 🔒 WORK WITH US owns five distinct paths: P-CUT / Bring Your Idea / Build With PFS / Venue Hire / Volunteer. The landing routes needs; full inquiry forms live on service details.
- 🔒 STAY review chain includes accommodation selection, Add Building, Build Weekend, longer stay, during-stay rules and one context-prefilled request.
- 🟡 REVIEW VALUES: Stay ¥480 / ¥680 / ¥280; Build Weekend ¥1,880 shared and +¥300 single upgrade; Venue Small / Medium display values. These are review parameters pending final production confirmation.
- 🔒 No public internal status vocabulary: TBC / PROVISIONAL / RECOMMENDATION / SOURCE FACT / LOCKED / DRAFT / DEPRECATED / canonical IDs.

## 2026-09-23 — V20 Content & Flow Correction
- 🔒 VISIT 当前执行：Daily Visit 无需预约；10:00–18:00；Visitor Ticket ¥88/person，含公共空间自助游览与一杯咖啡；使用轻量 Virtual Ticket。
- 🔒 STAY 当前主要行为为 BOOK YOUR STAY，采用简化预订字段；STAY + BUILDING 连接当前 Event 与 2–3 hours DIY Kits Experience。
- 🔒 BUILDING 页面按 NO BOOKING NEEDED / BOOKING REQUIRED 组织参与路径；不改变 canonical 类型和既有路由。
- 🔒 WORK WITH US 五条路径补足任务、流程和 CTA；入口数量与 IA 不变。
- 🟢 富柜材料来源：New Zealand Pine Plywood；其他产品不得由 AI 推断材质。
- 🟢 两张早餐图作为 REFERENCE VISUAL，不作为 PFS 实景证据。

## 2026-09-30 — V20 consolidated execution
- 🔒 [VISUAL] 当前主色为 BLACK / WHITE / PFS RED；真实 PFS 照片保持原色。RAW / PLAYFUL / EDITORIAL / HANDS-ON / UNFINISHED 是当前视觉原则。
- 🔒 [VISIT] 删除 Before You Come / 来之前模块；首屏承载票价、开放时间、包含内容、地址与 Ticket CTA。TODAY AT PFS 提供 LOOK AROUND / MAKE SOMETHING / WHAT'S ON / STAY LONGER。
- 🔒 [TICKET] 无支付或提交后端时仅生成清楚标记的未提交预览，不得显示付款、订单或预订成功。
- 🔒 [SEARCH] “大角怪”必须分别发现 COURSE / PRODUCT / PROJECT / SPACE，四个对象保持独立。

## 2026-10-01 — BUILDING Header navigation hotfix
- 🔒 [GLOBAL HEADER] BUILDING 在所有页面通过 hover / focus 直接显示两个二级分类，无需先进入 Landing。
- 🔒 [TAXONOMY] 正式菜单统一为“无需预订 / NO BOOKING NEEDED”与“需要预订 / BOOKING REQUIRED”。
- 🔒 [HIERARCHY] 船厂 SCHOOL → Paddle / Stitch Canoe / Stripe Canoe；荒野建造大师班 → 大角怪。子项不得提升为同级。
- 🔒 [INTERACTION] Desktop = mega menu；Mobile = BUILDING accordion + BOOKING REQUIRED nested accordion；支持 keyboard focus / Enter / Escape。
- 🔒 [COLOR] PFS red 调整为低饱和工业红参考值 #B82924，只用于编号、hover line、active state、arrow 与关键 CTA。
