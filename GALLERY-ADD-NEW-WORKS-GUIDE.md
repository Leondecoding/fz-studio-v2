# FZ Studio Gallery 新作品上传手册

这份手册只讲一件事：

**以后发布新的 Gallery 作品时，是继续往后增加第 4、第 5、第 6……个作品，不替换已经发布的第 1、第 2、第 3 个。**

当前 Gallery 已经有 3 件作品：

1. Petals
2. Whale
3. Flore Body

以后下一次 release，就是新增第 4、第 5、第 6 件。

---

## 一、每次新增作品要做两件事

每增加一件 Gallery 作品，只需要：

1. 把新图片放进  
   `fz-studio-v2/assets/images/gallery/`

2. 在  
   `fz-studio-v2/gallery.html`  
   里增加一整段新的 Gallery item。

原来的作品不要删除，也不要覆盖。

---

## 二、新图片怎么命名

建议使用：

- 全部英文小写
- 单词之间用 `-`
- 不要空格
- 不要中文
- 不要括号和特殊符号

例如：

作品名：Blue Garden  
图片文件名：

`blue-garden.jpg`

作品名：Red Petals II  
图片文件名：

`red-petals-ii.jpg`

作品名：Study No. 4  
图片文件名：

`study-no-4.jpg`

---

## 三、新图片放在哪里

所有 Gallery 图片统一放到：

`fz-studio-v2/assets/images/gallery/`

例如下一次 release 有 3 张：

- `blue-garden.jpg`
- `red-petals.jpg`
- `green-form.jpg`

就把这 3 张全部放进：

`assets/images/gallery/`

不要删除原来的：

- `petals-1.jpg`
- `whale-1.jpg`
- `flore-body.png`

---

## 四、怎样新增第 4 个作品

打开：

`fz-studio-v2/gallery.html`

找到现有第 3 个作品的这一整段：

```html
<figure class="gallery-item">
  ...
</figure>
```

完整复制这一整段。

然后粘贴到第 3 个作品后面。

这时就形成第 4 个作品。

你只改 4 个地方：

### 1. aria-label

例如：

`Open Blue Garden`

### 2. 图片路径

例如：

`/assets/images/gallery/blue-garden.jpg`

### 3. alt text

例如：

`Blue Garden, original watercolour artwork by FZ Studio`

### 4. 页面显示标题

例如：

`Blue Garden`

---

## 五、第 4 个作品完整例子

```html
<figure class="gallery-item">
  <button class="gallery-frame gallery-open" type="button" aria-label="Open Blue Garden">
    <img
      src="{{ '/assets/images/gallery/blue-garden.jpg' | relative_url }}"
      alt="Blue Garden, original watercolour artwork by FZ Studio"
    >
  </button>
  <figcaption>
    <p class="gallery-title">Blue Garden</p>
  </figcaption>
</figure>
```

把它放在第 3 个作品后面，就是第 4 个作品。

---

## 六、第 5、第 6 个作品怎么加

方法完全一样。

每一个新作品：

1. 复制一整段 `<figure class="gallery-item"> ... </figure>`
2. 粘贴到最后一个作品后面
3. 改图片文件名
4. 改作品标题
5. 改 aria-label
6. 改 alt text

所以一次 release 3 个新作品时，就是连续新增 3 段。

结构会变成：

- 第 1 件 Petals
- 第 2 件 Whale
- 第 3 件 Flore Body
- 第 4 件 新作品 A
- 第 5 件 新作品 B
- 第 6 件 新作品 C

下次 release 再继续：

- 第 7 件
- 第 8 件
- 第 9 件

**永远往后加，不覆盖以前的作品。**

---

## 七、Gallery 会不会自动排版

会。

当前 `gallery.html` 的 Gallery 网格已经设置好了。

只要新的作品继续使用：

`class="gallery-item"`

它就会自动排到现有作品后面。

不需要为了第 4、第 5、第 6 个作品重新改 CSS。

Lightbox 放大功能也会继续适用于新增作品。

---

## 八、一次 release 3 个作品时的完整流程

假设下一次 release 是：

- Blue Garden
- Red Form
- Green Study

### 第一步：准备图片

改名：

- `blue-garden.jpg`
- `red-form.jpg`
- `green-study.jpg`

### 第二步：放入 Gallery 图片文件夹

全部放进：

`fz-studio-v2/assets/images/gallery/`

### 第三步：修改 gallery.html

复制现有 Gallery item 三次。

依次改成：

- Blue Garden
- Red Form
- Green Study

并分别对应自己的图片路径。

### 第四步：保存

保存 `gallery.html`。

### 第五步：打开 GitHub Desktop

正常应该看到：

- `gallery.html` 修改
- `blue-garden.jpg` 新增
- `red-form.jpg` 新增
- `green-study.jpg` 新增

如果出现 `.DS_Store`，取消勾选即可。

### 第六步：Commit

Summary 可以写：

`Add gallery release 2`

### 第七步：Push origin

Push 后打开：

`https://fz-studio.co.uk/gallery/`

确认现在有 6 件作品。

---

## 九、上传完以后要检查什么

每次新增作品后检查：

1. 新图片是否正常显示
2. 新作品是否排在旧作品后面
3. 作品标题是否正确
4. 点击新图片是否能打开 Lightbox
5. 手机上是否正常
6. 老作品有没有被误删

---

## 十、什么时候才需要替换旧作品

只有两种情况才替换旧图片：

1. 同一件作品重新扫描，得到更高质量图片
2. 原图颜色或裁切有问题，需要换成更好的版本

如果只是发布新作品：

**绝对不要覆盖旧文件，也不要删除旧 Gallery item。**

---

## 十一、你以后最需要记住的一句话

Gallery 的更新方式是：

**新图片放进 `assets/images/gallery/`  
＋  
在 `gallery.html` 最后继续新增新的 `<figure>`**

不是替换旧作品。
