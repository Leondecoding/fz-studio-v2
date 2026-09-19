# FZ Studio 商品新增与更新手册（中文版）

这份手册适用于你现在的 `fz-studio-v2` 网站。

重点不是“替换旧产品”，而是：

**保留已经发布的产品，继续新增第 5、第 6、第 7……个产品。**

你现在已经有 4 个商品文件：

- `_products/peach-study.md`
- `_products/toucan-in-bloom.md`
- `_products/violet-bloom.md`
- `_products/amalfi-watercolour-paper-sample-pack.md`

以后新增产品时，不删除、不覆盖这些旧文件。

---

## 一、商品资料放在哪里

所有商品资料都放在：

`fz-studio-v2/_products/`

每个商品对应一个 `.md` 文件。

例如：

`_products/peach-study.md`

这个文件负责连接：

- 独立商品页
- Art Prints 商品列表（如果 category 是 Art Prints）
- Google Product Schema
- GA4 `view_item`
- GA4 `add_to_cart`
- sitemap
- Merchant Center feed
- 商品价格、库存、availability 等资料

---

## 二、商品图片放在哪里

所有商品主图统一放在：

`fz-studio-v2/assets/images/products/`

建议文件名：

- 全部英文小写
- 单词之间用 `-`
- 不要空格
- 不要中文
- 不要括号或特殊符号

例如：

`red-flower-study.jpg`

`blue-bird-print.jpg`

`amalfi-paper-pack.jpg`

---

# 三、新增一个 Art Print

假设你以后要新增第 4 个 Art Print，作品名叫：

**Red Garden**

不要修改 Peach / Toucan / Violet。

而是复制一个现有 Art Print 商品文件。

最方便的是复制：

`_products/peach-study.md`

然后把副本改名为：

`red-garden.md`

新的文件仍然放在：

`fz-studio-v2/_products/`

所以最终会变成：

- `peach-study.md`
- `toucan-in-bloom.md`
- `violet-bloom.md`
- `red-garden.md`

这表示原来的三个 Print 继续保留，新作品成为第 4 个 Print。

---

# 四、文件名非常重要

商品文件名会决定商品网址。

例如：

`red-garden.md`

会自动生成：

`https://fz-studio.co.uk/products/red-garden/`

所以文件一旦正式发布并被 Google 收录以后，尽量不要再改文件名。

否则商品网址也会改变。

推荐规则：

作品名：Red Garden  
文件名：

`red-garden.md`

作品名：Blue Flower Study  
文件名：

`blue-flower-study.md`

---

# 五、先在 PayPal 建立新商品

新增真正可以买的商品时，先去 PayPal 创建新的 Hosted Product / Add to Cart 商品。

需要设置：

- 商品名称
- 商品价格
- shipping 设置
- quantity / maximum quantity（如适用）

然后 PayPal 会给你一个新的 Hosted ID。

例如：

`ABC123XYZ`

这个 ID 要填进新商品文件里的：

`paypal_id: ABC123XYZ`

**每一个商品必须使用自己的 PayPal Hosted ID。**

不要把旧商品的 PayPal ID 留在新商品文件里。

否则顾客点击购买时可能买到错误商品。

---

# 六、新 Art Print 商品文件需要改什么

复制 `peach-study.md` 后，打开新的 `.md` 文件。

你会看到类似下面的结构：

```yaml
---
title: Peach Study
seo_title: Peach Study Watercolour Fine Art Print | FZ Studio
description: Fine art giclée print of Peach Study...
product_id: peach-study
category: Art Prints
product_type: Fine Art Print
order: 10
price: "35.00"
currency: GBP
brand: FZ Studio
paypal_id: XXXXX
availability: in_stock
condition: new
identifier_exists: false
merchant_enabled: true
stock:
image:
image_alt: ...
gallery_images: []
facts:
  - 10 × 12 in / 25 × 30 cm
  - 315gsm Cold Press textured fine-art paper
  - Archival pigment giclée print
  - Unframed
  - Printed to order by FZ Studio
  - Open edition
  - UK delivery included
note: ...
---
商品正文介绍写在这里。
```

新增产品时，重点修改下面这些字段。

---

## title

顾客看到的商品名称。

例如：

`title: Red Garden`

---

## seo_title

Google 搜索使用的 SEO 标题。

例如：

`seo_title: Red Garden Watercolour Fine Art Print | FZ Studio`

---

## description

简短商品说明，也是 Google / Product Schema 会读取的资料之一。

例如：

`description: Fine art giclée print of Red Garden, an original FZ Studio watercolour. 10 × 12 in on 315gsm cold press textured fine-art paper.`

---

## product_id

每个商品都必须唯一。

例如：

`product_id: red-garden`

不要重复使用：

`peach-study`

也不要把一个旧商品的 product_id 给另一个新商品。

---

## category

Art Print 保持：

`category: Art Prints`

这样新商品会自动进入 Art Prints 系统。

---

## product_type

Art Print 保持：

`product_type: Fine Art Print`

---

## order

控制商品排列顺序。

你现在的三个 Art Prints 是：

- Peach Study → `order: 10`
- Toucan in Bloom → `order: 20`
- Violet Bloom → `order: 30`

所以第 4 个 Art Print 可以写：

`order: 40`

第 5 个：

`order: 50`

第 6 个：

`order: 60`

这样以后作品会按 release 顺序继续往后排。

---

## price

例如 £35：

`price: "35.00"`

注意：

**价格变化时必须同时改 PayPal 和这里。**

如果 PayPal 是 £38，而商品文件仍然是 £35，Google / GA4 / 页面资料就会和实际付款价格不一致。

---

## currency

英国销售保持：

`currency: GBP`

---

## brand

自己的 Art Print 保持：

`brand: FZ Studio`

---

## paypal_id

填这个新商品在 PayPal 新建后得到的 Hosted ID。

例如：

`paypal_id: ABC123XYZ`

不要使用旧作品的 Hosted ID。

---

## availability

正常销售：

`availability: in_stock`

售罄：

`availability: out_of_stock`

预售：

`availability: preorder`

缺货等待补货：

`availability: backorder`

---

## stock

### Art Prints

你现在 Art Prints 是 printed to order，所以通常留空：

`stock:`

### 有限库存商品

例如有 40 包：

`stock: 40`

卖掉一包以后手工改成：

`stock: 39`

再 Commit + Push。

---

## image

商品主图路径。

例如图片文件是：

`assets/images/products/red-garden.jpg`

那么商品文件里写：

`image: /assets/images/products/red-garden.jpg`

如果这里为空，Merchant feed 会暂时不把这个商品提交给 Google。

所以正式发布到 Merchant Center 前，最好准备好真实商品主图。

---

## image_alt

简短描述图片本身。

例如：

`image_alt: Red and pink abstract botanical watercolour artwork on white paper`

不要堆关键词。

---

## facts

这里是商品页下方的规格。

Art Print 可以继续使用：

```yaml
facts:
  - 10 × 12 in / 25 × 30 cm
  - 315gsm Cold Press textured fine-art paper
  - Archival pigment giclée print
  - Unframed
  - Printed to order by FZ Studio
  - Open edition
  - UK delivery included
```

如果以后尺寸或纸张变化，就在这里改。

---

## note

可以写一条补充说明。

例如：

`note: Fine art giclée print from an original FZ Studio watercolour.`

---

## 最下面的正文

第二个 `---` 后面是商品介绍。

例如：

```text
An original watercolour exploring...
```

这是商品页上的主要作品介绍。

---

# 七、新增商品图片

假设新产品文件是：

`red-garden.md`

主图准备成：

`red-garden.jpg`

把图片放进：

`fz-studio-v2/assets/images/products/`

然后在 `red-garden.md` 里写：

`image: /assets/images/products/red-garden.jpg`

文件名必须完全一致：

- 大小写一致
- `.jpg` / `.png` 一致
- `-` 一致

否则商品页和 Google 会找不到图片。

---

# 八、新增 Art Print 后哪些东西会自动完成

如果：

- 新 `.md` 文件已经放进 `_products/`
- `category: Art Prints`
- PayPal ID 正确
- 图片路径正确
- GitHub 已 Push

系统会自动完成：

- 新独立商品页
- `/products/新文件名/`
- Product Schema
- GA4 `view_item`
- GA4 `add_to_cart`
- sitemap
- Merchant feed（有真实图片时）
- Art Prints 商品列表

所以以后新增一个 Art Print，不需要重新去写 GA4 或 Product Schema。

---

# 九、新增 Studio Materials 产品

如果以后新增第二种纸、颜料或其他 Studio Materials：

可以复制：

`_products/amalfi-watercolour-paper-sample-pack.md`

然后重命名，例如：

`new-paper-sample-pack.md`

同样放在：

`_products/`

并修改：

- title
- description
- product_id
- product_type
- order
- price
- brand
- paypal_id
- stock
- image
- image_alt
- facts
- 正文

category 保持：

`category: Studio Materials`

---

# 十、Studio Materials 有一个特殊点

现在你的 `Studio Materials` 主页面为了保留原来的 `Try the Paper` 版面，是手工排版的。

所以新 Studio Materials 商品加入 `_products/` 后，会自动获得：

- 独立商品页
- Product Schema
- GA4
- sitemap
- Merchant feed

但是：

**它不会自动出现在 `studio-materials.html` 的 Try the Paper 主页面。**

如果以后真的增加第二种材料，需要另外在 `studio-materials.html` 增加一个展示区。

Art Prints 没有这个问题，新 Art Print 会自动进入 Art Prints 列表。

---

# 十一、Merchant Center 怎么自动更新

你的 Merchant feed 地址是：

`https://fz-studio.co.uk/merchant-feed.xml`

当商品满足：

- `merchant_enabled: true`
- 有有效 `image`
- price / availability 等资料完整

它就会自动进入 Merchant feed。

以后 Merchant Center 读取这个 feed 后，会发现新商品。

你不需要每次在 Merchant Center 手工创建商品。

---

# 十二、Search Console 以后怎么办

新的 `_products/*.md` 会自动进入：

`https://fz-studio.co.uk/sitemap.xml`

所以以后新增商品后，Google 可以通过 sitemap 自动发现。

一般不需要每次都手工 Request Indexing。

如果某个重要新品刚发布，希望 Google 快一点看到，可以额外在 Search Console：

URL inspection → Request Indexing

但这是可选加速步骤，不是每次必须做。

---

# 十三、如果以后价格改变

例如：

£35 → £38

必须改两个地方。

### PayPal

把这个商品改成：

£38

### 商品 `.md`

把：

`price: "35.00"`

改成：

`price: "38.00"`

然后 Commit + Push。

不要只改其中一个。

---

# 十四、如果商品卖完

有限库存商品例如：

`stock: 1`

最后一件卖掉以后改成：

`stock: 0`

并把：

`availability: in_stock`

改成：

`availability: out_of_stock`

然后 Commit + Push。

网站、Product Schema 和 Merchant feed 会跟着更新。

---

# 十五、如果是预售

例如以后整本纸采用预售：

```yaml
availability: preorder
availability_date: 2026-10-15
```

同时在顾客看得到的商品介绍里明确写预计发货 / availability 时间。

---

# 十六、GitHub Desktop 每次新增产品的流程

完成商品文件和图片后：

1. 打开 GitHub Desktop
2. 查看 Changes
3. 确认新增的是你这次的新产品文件和图片
4. `.DS_Store` 不要勾选
5. Summary 写：
   `Add Red Garden print`
6. Commit to main
7. Push origin
8. 等 GitHub Pages 部署
9. 打开新商品 URL 测试
10. 点击 Add to Cart，确认 PayPal 商品名称和价格正确

---

# 十七、一次新增 3 个 Art Prints 的例子

假设下一次 release 是：

- Red Garden
- Blue Flower
- Green Study

那么原来的三个 Art Prints 不动。

在 `_products/` 新增：

- `red-garden.md`
- `blue-flower.md`
- `green-study.md`

在 `assets/images/products/` 新增：

- `red-garden.jpg`
- `blue-flower.jpg`
- `green-study.jpg`

order 可以写：

- Red Garden → `order: 40`
- Blue Flower → `order: 50`
- Green Study → `order: 60`

然后分别建立 3 个新的 PayPal Hosted Product ID。

Push 后，Art Prints 就会从原来的 3 个变成 6 个。

下一次再继续：

`order: 70 / 80 / 90`

旧产品永远保留。

---

# 十八、发布后检查清单

每次新增商品后检查：

- 商品图片是否正确
- 商品标题是否正确
- 页面价格是否正确
- PayPal 价格是否一致
- Add to Cart 是否买到正确商品
- UK delivery 文案是否正确
- 商品规格是否正确
- 独立商品页是否存在
- sitemap 是否出现新商品
- 有最终图片时 Merchant feed 是否出现新商品

---

# 十九、最重要的 5 条规则

1. **新增产品 = 新增新的 `_products/*.md`，不是覆盖旧商品。**
2. **PayPal 每个商品使用自己的 Hosted ID。**
3. **价格变化时 PayPal + `.md` 两边都改。**
4. **商品正式发布后尽量不要改 `.md` 文件名，因为文件名决定 URL。**
5. **商品图片统一放 `assets/images/products/`。**

---

# 二十、以后你真正需要记住的流程

### 新 Art Print

**PayPal 建商品  
→ 复制一个旧 Art Print `.md`  
→ 改成新文件名  
→ 改商品资料  
→ 加新图片  
→ Commit  
→ Push**

### 新 Studio Material

**PayPal 建商品  
→ 复制 Amalfi `.md`  
→ 改成新商品  
→ 加新图片  
→ 必要时再更新 Studio Materials 主页面  
→ Commit  
→ Push**

原来的产品不删除、不覆盖。

新 release 永远继续往后增加。
