# Anker Eufy E28 Top 20 问题 — 周生产手册（编导&执行版）
> 方法论：**六类资产库 + Collector 监控 + 以问题为中心的分发/投放**  
> 用途：指导编导/摄制/后期在 1 周周期内，从 Top 20 QID 里选择 3–5 个问题高效产出“可被引用 + 可验证 + 可投放”的素材组合（Long/Shorts/Blog/JSON-LD），并与问法广告组联动。

- 版本：v1.0（{date.today().isoformat()}）
- 适用：Eufy E28（可横向复用至同品类型号）
- 上游：**Top20_QID 清单**、**锚点词典**、**A3 人群标签**
- 下游：素材包（Long/Shorts/缩略图/字幕）、置顶评、Blog/FAQ、JSON-LD、问法广告组、周报

---
## 1. 周节奏（滚动制）
**产能门槛（周）**：Long ≥2｜Shorts ≥6｜Blog ≥2｜JSON-LD ≥3

**周一｜选题会（60–90min）**
1) 打开 Collector 看板：查看 AIO 缺口与 A3 信号（收藏/完播/评论意图词）。  
2) 从 Top20 里锁定 **3–5 个 QID**（优先级= AIO 缺口 > A3 高光 > 转化意图）。  
3) 每个 QID 产出《脚本一页纸》（问题句/一句话答案+锚点词/证据/CTA/Related QID）。

**周二｜分镜 & 通告**
- 完成《分镜表》与《通告单》，明确机位/灯光/道具/证据入画与安全方案。  
- GEO 工程出 **JSON-LD 占位**（FAQPage/HowTo/QAPage/Product，绑定 QID）。  
- 置顶评草案：答案→证据→CTA→Related QID×2。

**周三｜拍摄日**
- Long 主线 + Shorts 钩子镜头并行；**证据点必须“可见可审”**（参数截图/仪表读数/前后对比板）。  
- 现场记录：实测数值、异常与补拍项。

**周四｜后期**
- v1 粗剪→内测→v2 定版；产出多尺寸（9:16 / 1:1 / 16:9 静音友好）。  
- 字幕三套（中/英/静音版术语替代口播）。

**周五｜上线 & 投放 & 周报**
- 同步 Blog/FAQ/PDP/JSON-LD；YouTube/Shorts/TT/IG 发布并置顶评。  
- 问法广告开组（绑定 QID 素材与落地页）；Reddit 实测帖发布。  
- 更新周报与下周候选 QID。

---
## 2. 选题优先级（按 QID）
1) **AIO 缺口**：Top20 中未出现/覆盖低的问题。  
2) **A3 高光**：历史切片的收藏/完播/评论意图词命中。  
3) **转化意图**：含价格/维护成本/对比/兼容性/安装等强意图问法。

---
## 3. 脚本一页纸（QID 绑定）
- **问题句**（至少 1 个同/近义问法）。  
- **一句话答案**（必须含锚点词）。  
- **证据点**（规格/手册/第三方评测/实测截图）。  
- **CTA**（PDP/对比页/教程/客服）。  
- **Related QID ×2**（描述区/置顶评联动）。

**Long 结构（60–90s）**：0–3s 钩子 → 3–12s 答案+证据 → 12–60s HowTo/Compare/原理 → 60–90s CTA。  
**Shorts 结构（15–30s）**：2s 问题 → 6–12s 证据 → 3s CTA（含链接提示）。

---
## 4. 分镜与拍摄要点
- 每个镜头绑定 QID；在《分镜表》中标注：景别/机位、时长、字幕要点、锚点词、证据点、道具/注意。  
- **证据入画**：参数浮层、规格页截图、第三方评测水印、实测仪表读数、前后对比板。  
- 缩略图：**问题句大字 + 反差画面**；首帧静音可懂（图标/参数/箭头）。

---
## 5. 置顶评（Pinned）模板
一句话答案（含锚点词） → 证据（来源） → CTA（购买/教程/对比） → Related QID x2
例：一次通过把地毯里的宠物毛“抠”出来 → 20000Pa + 防缠绕刷。证据：规格页 & 评测。
CTA：购买/教程见描述区。延伸：Q04 避障小物 | Q05 边角清洁。

yaml
Always show details

Copy code

---

## 6. JSON-LD 协作（与 GEO 工程）
- 每个 QID 最少 1 个结构化：FAQPage / HowTo / QAPage / Product。  
- 统一命名与目录 `/JSONLD/QID_*.json`，发布前做结构化校验。  
- 视频描述区 ↔ Blog/FAQ/PDP 互链；置顶评含 Related QID。

---

## 7. QA / 合规（发布前 12 条快检）
1) 标题或首屏含**问题句**；2) 一句话答案含**锚点词**；3) **证据可见可审**；4) 数值与画面一致；  
5) JSON-LD 通过；6) 置顶评三要素齐；7) 描述区含 Related QID；8) 缩略图问题句可读；  
9) 首帧静音友好；10) 中英字幕无误；11) 版权合规；12) 命名规范与目录就位。

---

## 8. A3 & 加推（数据协同）
- 触发阈值（任一达标即标“高光”）：收藏≥2.0%｜完播≥45%｜评论含意图词。  
- 高光切片：3–7s / 7–12s 峰值 → 问法广告组（AI Max Search/YT）与再营销；多尺寸导出。

---

## 9. 周报与复盘
- 字段：QID｜渠道｜版本｜A3（藏/完播/评论）｜高光片段秒段｜加推状态｜投放表现（CPC/ROAS）｜问题与下一步。  
- 产出：Long/Shorts/Blog/JSON-LD 实际完成 vs 计划；AIO 覆盖截图抽样。

---

## 10. 命名与目录
`[渠道]-[形态]-[QID]-[主题]-v[主.次]-[YYYYMMDD]`  
例：`YT-LONG-Q01-20000PaPetHair-v1.0-20250901`

/GEO_Weekly/
/Scripts/ /Shotlists/ /CallSheets/ /Footage_RAW/ /Edits/ /Captions/ /JSONLD/ /Thumbnails/ /Reports_Collector/ /QA/

pgsql
Always show details

Copy code

---
## 11. 风险与返拍触发
- 证据不可复现/仪表读数不稳定/对比板不可信 → 返拍；  
- A3 不达阈值 → 重写钩子 + 置顶评；  
- JSON-LD 未生效 → 精简字段 + 补证据；  
- 问法组跑偏 → 收紧匹配、回流高光切片。

—— 搭配随附的 XLSX 模板使用：把 Top20_QID 映射到“QID 任务板”，每周拉 3–5 个 QID 进入生产。
""").strip()

md_path = "/mnt/data/EufyE28_周生产手册_编导执行版.md"
with open(md_path, "w", encoding="utf-8") as f:
    f.write(md)

# ---------- XLSX workbook templates ----------
# 1) 周排期
week_plan = pd.DataFrame([
    ["周一", "选题会：锁 QID 3–5；脚本一页纸（锚点词/证据/CTA）；AIO 缺口优先"],
    ["周二", "分镜/通告：机位灯光道具；置顶评草案；JSON-LD 占位草案"],
    ["周三", "拍摄：Long 主线 + Shorts 钩子；证据入画；现场实测记录"],
    ["周四", "后期：v1→评审→v2；三语字幕；多尺寸导出"],
    ["周五", "上线与投放：Blog/FAQ/PDP/JSON-LD 同步；问法组；Reddit；周报"]
], columns=["Day", "Focus"])

# 2) QID 任务板
qid_board_cols = [
    "QID","问题句（从Top20导入）","优先级（AIO/A3/转化）","负责人（编导）","素材形态（Long/Shorts/Blog/JSON-LD）",
    "脚本状态","分镜状态","拍摄状态","后期状态","JSON-LD 状态","置顶评状态",
    "A3 指标（收藏/完播/评论）","高光片段（秒段）","投放动作（问法组/再营）","备注"
]
qid_board = pd.DataFrame(columns=qid_board_cols)

# 3) 分镜表模板
shotlist_cols = ["QID","场次","镜号","景别/机位","时长","口播/字幕要点","关键画面","锚点词","证据点","道具/注意","备选 B-Roll"]
shotlist = pd.DataFrame(columns=shotlist_cols)

# 4) 通告单模板
callsheet_cols = ["QID","主题","日期","场地","时段","噪音风险","团队分工","设备清单","关键镜头（分镜号）","证据与合规清单","风险与备选","现场记录"]
callsheet = pd.DataFrame(columns=callsheet_cols)

# 5) 发布检查清单
publish_cols = [
    "QID","渠道","版本名","标题含问题句","答案含锚点词","证据可审","JSON-LD 通过","置顶评齐全","描述含 Related QID",
    "缩略图问题句","首帧静音友好","字幕OK","版权OK","命名/目录OK","Collector 登记","完成时间","审核人"
]
publish_check = pd.DataFrame(columns=publish_cols)

# 6) 周报模板
weekly_cols = ["周期","负责人","QID","渠道","版本","A3（藏/完播/评论）","高光片段（秒段）","加推状态","投放表现（CPC/ROAS）","问题与下一步"]
weekly = pd.DataFrame(columns=weekly_cols)

# Write to Excel
xlsx_path = "/mnt/data/EufyE28_周生产手册模板.xlsx"
with pd.ExcelWriter(xlsx_path, engine="xlsxwriter") as writer:
    week_plan.to_excel(writer, index=False, sheet_name="周排期")
    qid_board.to_excel(writer, index=False, sheet_name="QID任务板")
    shotlist.to_excel(writer, index=False, sheet_name="分镜表模板")
    callsheet.to_excel(writer, index=False, sheet_name="通告单模板")
    publish_check.to_excel(writer, index=False, sheet_name="发布检查")
    weekly.to_excel(writer, index=False, sheet_name="周报")

md_path, xlsx_path
Result
('/mnt/data/EufyE28_周生产手册_编导执行版.md', '/mnt/data/EufyE28_周生产手册模板.xlsx')
搞定！已为 Anker Eufy E28 Top 20 问题 出一套「周生产手册（编导&执行版）」+ 可直接用的 XLSX 看板模板：

手册（Markdown）：下载

周生产看板（XLSX，多表）：下载

这套内容包括：

周一到周五端到端 SOP（选题→分镜通告→拍摄→后期→上线投放→周报）；

“脚本一页纸”格式（问题句/答案+锚点词/证据/CTA/Related QID）；

分镜表/通告单/发布检查/周报的可填模板；

A3 高光触发与切片加推策略、JSON-LD 协作规范、命名与目录约定；

风险与返拍触发条件。

要不要我把你们现有的 Top20_QID 清单 预填进“QID任务板”那张表里（带优先级/AIO 缺口标注），顺手生成本周的排期草案？










Sources
You said:
手册（Markdown）：下载

周生产看板（XLSX，多表）：下载 >>以上两个文档“file not found”


ChatGPT said:

Analyzed
python
Always show details

Copy code
# Re-create manual & templates and add ASCII-filename copies for reliable downloading
import pandas as pd
from textwrap import dedent
from datetime import date

# ---------- Markdown manual content ----------
md = dedent(f"""
# Anker Eufy E28 Top 20 问题 — 周生产手册（编导&执行版）
> 方法论：**六类资产库 + Collector 监控 + 以问题为中心的分发/投放**  
> 用途：指导编导/摄制/后期在 1 周周期内，从 Top 20 QID 里选择 3–5 个问题高效产出“可被引用 + 可验证 + 可投放”的素材组合（Long/Shorts/Blog/JSON-LD），并与问法广告组联动。

- 版本：v1.0（{date.today().isoformat()}）
- 适用：Eufy E28（可横向复用至同品类型号）
- 上游：**Top20_QID 清单**、**锚点词典**、**A3 人群标签**
- 下游：素材包（Long/Shorts/缩略图/字幕）、置顶评、Blog/FAQ、JSON-LD、问法广告组、周报

---
## 1. 周节奏（滚动制）
**产能门槛（周）**：Long ≥2｜Shorts ≥6｜Blog ≥2｜JSON-LD ≥3

**周一｜选题会（60–90min）**
1) 打开 Collector 看板：查看 AIO 缺口与 A3 信号（收藏/完播/评论意图词）。  
2) 从 Top20 里锁定 **3–5 个 QID**（优先级= AIO 缺口 > A3 高光 > 转化意图）。  
3) 每个 QID 产出《脚本一页纸》（问题句/一句话答案+锚点词/证据/CTA/Related QID）。

**周二｜分镜 & 通告**
- 完成《分镜表》与《通告单》，明确机位/灯光/道具/证据入画与安全方案。  
- GEO 工程出 **JSON-LD 占位**（FAQPage/HowTo/QAPage/Product，绑定 QID）。  
- 置顶评草案：答案→证据→CTA→Related QID×2。

**周三｜拍摄日**
- Long 主线 + Shorts 钩子镜头并行；**证据点必须“可见可审”**（参数截图/仪表读数/前后对比板）。  
- 现场记录：实测数值、异常与补拍项。

**周四｜后期**
- v1 粗剪→内测→v2 定版；产出多尺寸（9:16 / 1:1 / 16:9 静音友好）。  
- 字幕三套（中/英/静音版术语替代口播）。

**周五｜上线 & 投放 & 周报**
- 同步 Blog/FAQ/PDP/JSON-LD；YouTube/Shorts/TT/IG 发布并置顶评。  
- 问法广告开组（绑定 QID 素材与落地页）；Reddit 实测帖发布。  
- 更新周报与下周候选 QID。

---
## 2. 选题优先级（按 QID）
1) **AIO 缺口**：Top20 中未出现/覆盖低的问题。  
2) **A3 高光**：历史切片的收藏/完播/评论意图词命中。  
3) **转化意图**：含价格/维护成本/对比/兼容性/安装等强意图问法。

---
## 3. 脚本一页纸（QID 绑定）
- **问题句**（至少 1 个同/近义问法）。  
- **一句话答案**（必须含锚点词）。  
- **证据点**（规格/手册/第三方评测/实测截图）。  
- **CTA**（PDP/对比页/教程/客服）。  
- **Related QID ×2**（描述区/置顶评联动）。

**Long 结构（60–90s）**：0–3s 钩子 → 3–12s 答案+证据 → 12–60s HowTo/Compare/原理 → 60–90s CTA。  
**Shorts 结构（15–30s）**：2s 问题 → 6–12s 证据 → 3s CTA（含链接提示）。

---
## 4. 分镜与拍摄要点
- 每个镜头绑定 QID；在《分镜表》中标注：景别/机位、时长、字幕要点、锚点词、证据点、道具/注意。  
- **证据入画**：参数浮层、规格页截图、第三方评测水印、实测仪表读数、前后对比板。  
- 缩略图：**问题句大字 + 反差画面**；首帧静音可懂（图标/参数/箭头）。

---
## 5. 置顶评（Pinned）模板
一句话答案（含锚点词） → 证据（来源） → CTA（购买/教程/对比） → Related QID x2
例：一次通过把地毯里的宠物毛“抠”出来 → 20000Pa + 防缠绕刷。证据：规格页 & 评测。
CTA：购买/教程见描述区。延伸：Q04 避障小物 | Q05 边角清洁。

yaml
Always show details

Copy code

---

## 6. JSON-LD 协作（与 GEO 工程）
- 每个 QID 最少 1 个结构化：FAQPage / HowTo / QAPage / Product。  
- 统一命名与目录 `/JSONLD/QID_*.json`，发布前做结构化校验。  
- 视频描述区 ↔ Blog/FAQ/PDP 互链；置顶评含 Related QID。

---

## 7. QA / 合规（发布前 12 条快检）
1) 标题或首屏含**问题句**；2) 一句话答案含**锚点词**；3) **证据可见可审**；4) 数值与画面一致；  
5) JSON-LD 通过；6) 置顶评三要素齐；7) 描述区含 Related QID；8) 缩略图问题句可读；  
9) 首帧静音友好；10) 中英字幕无误；11) 版权合规；12) 命名规范与目录就位。

---

## 8. A3 & 加推（数据协同）
- 触发阈值（任一达标即标“高光”）：收藏≥2.0%｜完播≥45%｜评论含意图词。  
- 高光切片：3–7s / 7–12s 峰值 → 问法广告组（AI Max Search/YT）与再营销；多尺寸导出。

---

## 9. 周报与复盘
- 字段：QID｜渠道｜版本｜A3（藏/完播/评论）｜高光片段秒段｜加推状态｜投放表现（CPC/ROAS）｜问题与下一步。  
- 产出：Long/Shorts/Blog/JSON-LD 实际完成 vs 计划；AIO 覆盖截图抽样。

---

## 10. 命名与目录
`[渠道]-[形态]-[QID]-[主题]-v[主.次]-[YYYYMMDD]`  
例：`YT-LONG-Q01-20000PaPetHair-v1.0-20250901`

/GEO_Weekly/
/Scripts/ /Shotlists/ /CallSheets/ /Footage_RAW/ /Edits/ /Captions/ /JSONLD/ /Thumbnails/ /Reports_Collector/ /QA/

bash
Always show details

Copy code

---
## 11. 风险与返拍触发
- 证据不可复现/仪表读数不稳定/对比板不可信 → 返拍；  
- A3 不达阈值 → 重写钩子 + 置顶评；  
- JSON-LD 未生效 → 精简字段 + 补证据；  
- 问法组跑偏 → 收紧匹配、回流高光切片。
""").strip()

# Save CN filename and ASCII fallback
paths = []
for p in ["/mnt/data/EufyE28_周生产手册_编导执行版.md",
          "/mnt/data/EufyE28_Weekly_Manual_DirectorOps.md"]:
    with open(p, "w", encoding="utf-8") as f:
        f.write(md)
    paths.append(p)

# ---------- Excel templates ----------
import pandas as pd
week_plan = pd.DataFrame([
    ["周一", "选题会：锁 QID 3–5；脚本一页纸（锚点词/证据/CTA）；AIO 缺口优先"],
    ["周二", "分镜/通告：机位灯光道具；置顶评草案；JSON-LD 占位草案"],
    ["周三", "拍摄：Long 主线 + Shorts 钩子；证据入画；现场实测记录"],
    ["周四", "后期：v1→评审→v2；三语字幕；多尺寸导出"],
    ["周五", "上线与投放：Blog/FAQ/PDP/JSON-LD 同步；问法组；Reddit；周报"]
], columns=["Day", "Focus"])

qid_board_cols = [
    "QID","问题句（从Top20导入）","优先级（AIO/A3/转化）","负责人（编导）","素材形态（Long/Shorts/Blog/JSON-LD）",
    "脚本状态","分镜状态","拍摄状态","后期状态","JSON-LD 状态","置顶评状态",
    "A3 指标（收藏/完播/评论）","高光片段（秒段）","投放动作（问法组/再营）","备注"
]
qid_board = pd.DataFrame(columns=qid_board_cols)

shotlist_cols = ["QID","场次","镜号","景别/机位","时长","口播/字幕要点","关键画面","锚点词","证据点","道具/注意","备选 B-Roll"]
shotlist = pd.DataFrame(columns=shotlist_cols)

callsheet_cols = ["QID","主题","日期","场地","时段","噪音风险","团队分工","设备清单","关键镜头（分镜号）","证据与合规清单","风险与备选","现场记录"]
callsheet = pd.DataFrame(columns=callsheet_cols)

publish_cols = [
    "QID","渠道","版本名","标题含问题句","答案含锚点词","证据可审","JSON-LD 通过","置顶评齐全","描述含 Related QID",
    "缩略图问题句","首帧静音友好","字幕OK","版权OK","命名/目录OK","Collector 登记","完成时间","审核人"
]
publish_check = pd.DataFrame(columns=publish_cols)

weekly_cols = ["周期","负责人","QID","渠道","版本","A3（藏/完播/评论）","高光片段（秒段）","加推状态","投放表现（CPC/ROAS）","问题与下一步"]
weekly = pd.DataFrame(columns=weekly_cols)

for x in [("/mnt/data/EufyE28_周生产手册模板.xlsx"),
          ("/mnt/data/EufyE28_Weekly_Templates.xlsx")]:
    with pd.ExcelWriter(x, engine="xlsxwriter") as writer:
        week_plan.to_excel(writer, index=False, sheet_name="周排期")
        qid_board.to_excel(writer, index=False, sheet_name="QID任务板")
        shotlist.to_excel(writer, index=False, sheet_name="分镜表模板")
        callsheet.to_excel(writer, index=False, sheet_name="通告单模板")
        publish_check.to_excel(writer, index=False, sheet_name="发布检查")
        weekly.to_excel(writer, index=False, sheet_name="周报")

paths + ["/mnt/data/EufyE28_周生产手册模板.xlsx", "/mnt/data/EufyE28_Weekly_Templates.xlsx"]
Result
['/mnt/data/EufyE28_周生产手册_编导执行版.md',
 '/mnt/data/EufyE28_Weekly_Manual_DirectorOps.md',
 '/mnt/data/EufyE28_周生产手册模板.xlsx',
 '/mnt/data/EufyE28_Weekly_Templates.xlsx']