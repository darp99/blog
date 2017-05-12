# 通用约定

#### 代码组织
- 以组件为单位组织代码段；
- 制定一致的注释规范；
- `组件块和子组件块`以及`声明块`之间使用**一空行**分隔，`子组件块`之间**三空行**分隔；
- 如果使用了多个 CSS 文件，将其按照组件而非页面的形式分拆，因为页面会被重组，而组件只会被移动；

良好的注释是非常重要的。请留出时间来描述组件（component）的工作方式、局限性和构建它们的方法。不要让你的团队其它成员 来猜测一段不通用或不明显的代码的目的。

提示：通过配置编辑器，可以提供快捷键来输出一致认可的注释模式。

```css
/* ==========================================================================
   组件块
 ============================================================================ */

/* 子组件块
 ============================================================================ */
.selector {
  padding: 15px;
  margin-bottom: 15px;
}



/* 子组件块
 ============================================================================ */
.selector-secondary {
  display: block; /* 注释*/
}

.selector-three {
  display: span;
}
```

#### Class 和 ID
- 使用语义化、通用的命名方式；
- 使用连字符 - 作为 ID、Class 名称界定符，不要驼峰命名法和下划线；
- 避免选择器嵌套层级过多，尽量少于 3 级；
- 避免选择器和 Class、ID 叠加使用；

出于[性能考量](http://www.stevesouders.com/blog/2009/06/18/simplifying-css-selectors/)，在没有必要的情况下避免元素选择器叠加 Class、ID  使用。

元素选择器和 ID、Class 混合使用也违反关注分离原则。如果HTML标签修改了，就要再去修改 CSS 代码，不利于后期维护。
```css
/* Not recommended */
.red {}
.box_green {}
.page .header .login #username input {}
ul#example {}

/* Recommended */
#nav {}
.box-video {}
#username input {}
#example {}
```

#### 声明块格式
- 选择器分组时，保持独立的选择器占用一行；
- 声明块的左括号 `{` 前添加一个空格；
- 声明块的右括号 `}` 应单独成行；
- 声明语句中的 `:` 后应添加一个空格；
- 声明语句应以分号 `;` 结尾；
- 一般以逗号分隔的属性值，每个逗号后应添加一个空格；
- `rgb()`、`rgba()`、`hsl()`、`hsla()` 或 `rect()`  括号内的值，逗号分隔，但逗号后不添加一个空格；
- 对于属性值或颜色参数，省略小于 1 的小数前面的 0 （例如，`.5` 代替 `0.5`；`-.5px` 代替 `-0.5px`）；
- 十六进制值应该全部小写和尽量简写，例如，`#fff` 代替 `#ffffff`；
- 避免为 0 值指定单位，例如，用 `margin: 0;` 代替 `margin: 0px;`；

```css
/*  Not recommended  */
.selector, .selector-secondary, .selector[type=text] {
  padding:15px;
  margin:0px 0px 15px;
  background-color:rgba(0, 0, 0, 0.5);
  box-shadow:0px 1px 2px #CCC,inset 0 1px 0 #FFFFFF
}

/* Recommended */
.selector,
.selector-secondary,
.selector[type="text"] {
  padding: 15px;
  margin-bottom: 15px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 1px 2px #ccc, inset 0 1px 0 #fff;
}
```

#### 声明顺序
相关属性应为一组，推荐的样式编写顺序
1. Positioning
2. Box model
3. Typographic
4. Visual

由于定位（positioning）可以从正常的文档流中移除元素，并且还能覆盖盒模型（box model）相关的样式，因此排在首位。盒模型决定了组件的尺寸和位置，因此排在第二位。

其他属性只是影响组件的内部（inside）或者是不影响前两组属性，因此排在后面。

```css
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  /* Box model */
  display: block;
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  margin: 10px;
  float: right;
  overflow: hidden;

  /* Typographic */
  font: normal 13px "Helvetica Neue", sans-serif;
  line-height: 1.5;
  text-align: center;

  /* Visual */
  background-color: #f5f5f5;
  color: #fff;
  opacity: .8;

  /* Other */
  cursor: pointer;
}
```

#### 引号使用
`url()` 、属性选择符、属性值使用双引号。
参考 [Is quoting the value of url() really necessary?](http://stackoverflow.com/questions/2168855/is-quoting-the-value-of-url-really-necessary)
```css
/* Not recommended */
@import url(//www.google.com/css/maia.css);

html {
  font-family: 'open sans', arial, sans-serif;
}

/* Recommended */
@import url("//www.google.com/css/maia.css");

html {
  font-family: "open sans", arial, sans-serif;
}

.selector[type="text"] {

}
```

#### 媒体查询（Media query）的位置
将媒体查询放在尽可能相关规则的附近。不要将他们打包放在一个单一样式文件中或者放在文档底部。如果你把他们分开了，将来只会被大家遗忘。

```css
.element { ... }
.element-avatar { ... }
.element-selected { ... }

@media (max-width: 768px) {
  .element { ...}
  .element-avatar { ... }
  .element-selected { ... }
}
```

#### 不要使用 `@import`
与 `<link>` 相比，`@import` 要慢很多，不光增加额外的请求数，还会导致不可预料的问题。

替代办法：
- 使用多个 <link> 元素；
- 通过 Sass 或 Less 类似的 CSS 预处理器将多个 CSS 文件编译为一个文件；
- 其他 CSS 文件合并工具；

参考 [don’t use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/)；

#### 链接的样式顺序：
`a:link -> a:visited -> a:hover -> a:active（LoVeHAte）`

#### 无需添加浏览器厂商前缀
使用 [Autoprefixer](https://github.com/postcss/autoprefixer) 自动添加浏览器厂商前缀，编写 CSS 时不需要添加浏览器前缀，直接使用标准的 CSS 编写。

Autoprefixer 通过 [Can I use](http://caniuse.com/)，按兼容的要求，对相应的 CSS 代码添加浏览器厂商前缀。

# 模块组织

任何超过 1000 行的 CSS 代码，你都曾经历过这样的体验：
1. 这个 class 到底是什么意思呢？
2. 这个 class 在哪里被使用呢？
3. 如果我创建一个 `xxoo` class，会造成冲突吗？

`Reasonable System for CSS Stylesheet Structure` 的目标就是解决以上问题，它不是一个框架，而是通过规范，让你构建更健壮和可维护的 CSS 代码。

#### Components（组件）
![Components](https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-example.png)

从 `Components` 的角度思考，将网站的模块都作为一个独立的 `Components`。

##### Naming components （组件命名）
`Components` **最少以两个单词命名**，通过 `-` 分离，例如：
- 点赞按钮 (`.like-button`)
- 搜索框 (`.search-form`)
- 文章卡片 (`.article-card`)

#### Elements （元素）
![Elements](https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-elements.png)

`Elements` 是 `Components` 中的元素

##### Naming elements （元素命名）
`Elements` 的类名应尽可能仅有一个单词。
```css
 .search-form {
    > .field { /* ... */ }
    > .action { /* ... */ }
  }
```

##### On multiple words （多个单词）
对于倘若需要两个或以上单词表达的 `Elements` 类名，不应使用中划线和下划线连接，应**直接连接**。
```css
  .profile-box {
    > .firstname { /* ... */ }
    > .lastname { /* ... */ }
    > .avatar { /* ... */ }
  }
```

##### Avoid tag selectors （避免标签选择器）
任何时候尽可能使用 `classnames`。标签选择器在使用上没有问题，但是其性能上稍弱，并且表意不明确。
```css
  .article-card {
    > h3    { /* ✗ avoid */ }
    > .name { /* ✓ better */ }
  }
```

#### Variants （变体）
![Variants](https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/component-modifiers.png)

`Components` 和 `Elements` 可能都会拥有 `Variants`。

##### Naming variants （变体命名）
`Variants` 的 `classname` 应带有前缀中划线 `-`
```css
  .like-button {
    &.-wide { /* ... */ }
    &.-short { /* ... */ }
    &.-disabled { /* ... */ }
  }
```

##### Element variants （元素变体）
```css
  .shopping-card {
    > .title { /* ... */ }
    > .title.-small { /* ... */ }
  }
```

##### Dash prefixes （中划线前缀）
为什么使用中划线作为变体的前缀？
- 它可以避免歧义与 `Elements`
- CSS class 仅能以单词和 `_` 或 `-` 开头
- 中划线比下划线更容易输出

#### Layout （布局）
![Layout](https://raw.githubusercontent.com/rstacruz/rscss/master/docs/images/layouts.png)

##### Avoid positioning properties （避免定位属性）
Components 应该在不同的上下文中都可以复用，所以应避免设置以下属性：
- Positioning (position, top, left, right, bottom)
- Floats (float, clear)
- Margins (margin)
- Dimensions (width, height) *

##### Fixed dimensions （固定尺寸）
头像和 logos 这些元素应该设置固定尺寸（宽度，高度...）。

##### Define positioning in parents （在父元素中设置定位）
倘若你需要为组件设置定位，应将在组件的上下文（父元素）中进行处理，比如以下例子中，将 `widths` 和 `floats` 应用在 `list component(.article-list)` 当中，而不是 `component(.article-card)` 自身。
```css
  .article-list {
    & {
      @include clearfix;
    }

    > .article-card {
      width: 33.3%;
      float: left;
    }
  }

  .article-card {
    & { /* ... */ }
    > .image { /* ... */ }
    > .title { /* ... */ }
    > .category { /* ... */ }
  }
```

#### Avoid over-nesting （避免过分嵌套）
当出现多个嵌套的时候容易失去控制，应保持不超过一个嵌套。
```css
  /* ✗ Avoid: 3 levels of nesting */
  .image-frame {
    > .description {
      /* ... */

      > .icon {
        /* ... */
      }
    }
  }

  /* ✓ Better: 2 levels */
  .image-frame {
    > .description { /* ... */ }
    > .description > .icon { /* ... */ }
  }
```

#### Apprehensions （顾虑）
- **中划线`-`是一坨糟糕的玩意**：其实你可以选择性的使用，只要将 `Components, Elements, Variants` 记在心上即可。
- **我有时候想不出两个单词唉**：有些组件的确使用一个单词就能表意，比如 `aleter` 。但其实你可以使用后缀，使其意识更加明确。

比如块级元素：
 * .alert-box
 * .alert-card
 * .alert-block

或行内级元素
 * .link-button
 * .link-span

#### Terminologies （术语）
RSCSS 与其他 CSS 模块组织系统相似的概念

| RSCSS | BEM | SMACSS |
| -- | -- | -- |
| Component	| Block | Module |
| Element	| Element |	? |
| Layout	| ?	| Layout |
| Variant	| Modifier | Theme & State |

#### Summary （总结）
- 以 `Components` 的角度思考，以两个单词命名（`.screenshot-image`）
- `Components` 中的 `Elements`，以一个单词命名（`.blog-post .title`）
- `Variants`，以中划线`-`作为前缀（`.shop-banner.-with-icon`）
- `Components` 可以互相嵌套
- 记住，你可以通过继承让事情变得更简单

---
[译自:Reasonable System for CSS Stylesheet Structure](https://github.com/rstacruz/rscss#readme)

# 性能优化

#### 慎重选择高消耗的样式

高消耗属性在绘制前需要浏览器进行大量计算：
* box-shadows
* border-radius
* transparency
* transforms
* CSS filters（性能杀手）

#### 避免过分重排
当发生重排的时候，浏览器需要重新计算布局位置与大小，[更多详情](http://www.jianshu.com/p/e305ace24ddf)。

常见的重排元素:
* width
* height
* padding
* margin
* display
* border-width
* position
* top
* left
* right
* bottom
* font-size
* float
* text-align
* overflow-y
* font-weight
* overflow
* font-family
* line-height
* vertical-align
* clear
* white-space
* min-height

#### 正确使用 Display 的属性
Display 属性会影响页面的渲染，请合理使用。

* display: inline后不应该再使用 width、height、margin、padding 以及 float；

* display: inline-block 后不应该再使用 float；

* display: block 后不应该再使用 vertical-align；

* display: table-* 后不应该再使用 margin 或者 float；

#### 不滥用 Float

Float在渲染时计算量比较大，尽量减少使用。

#### 动画性能优化
动画的实现原理，是利用了人眼的“视觉暂留”现象，在短时间内连续播放数幅静止的画面，使肉眼因视觉残象产生错觉，而误以为画面在“动”。

动画的基本概念：

* 帧：在动画过程中，每一幅静止画面即为一“帧”;
* 帧率：即每秒钟播放的静止画面的数量，单位是fps(Frame per second);
* 帧时长：即每一幅静止画面的停留时间，单位一般是ms(毫秒);
* 跳帧(掉帧/丢帧)：在帧率固定的动画中，某一帧的时长远高于平均帧时长，导致其后续数帧被挤压而丢失的现象。

一般浏览器的渲染刷新频率是 60 fps，所以在网页当中，帧率如果达到 50-60 fps 的动画将会相当流畅，让人感到舒适。

* 如果使用基于 javaScript 的动画，尽量使用 requestAnimationFrame. 避免使用 setTimeout, setInterval.
* 避免通过类似 jQuery animate()-style 改变每帧的样式，使用 CSS 声明动画会得到更好的浏览器优化。
* 使用 translate 取代 absolute 定位就会得到更好的 fps，动画会更顺滑。

![High Performance Animations](https://raw.githubusercontent.com/Zhangjd/Front-End-Style-Guide/master/img/cheap-operations.jpg)

#### 多利用硬件能力，如通过 3D 变形开启 GPU 加速
一般在 Chrome 中，3D或透视变换（perspective transform）CSS属性和对 opacity 进行 CSS 动画会创建新的图层，在硬件加速渲染通道的优化下，GPU 完成 3D 变形等操作后，将图层进行复合操作（Compesite Layers），从而避免触发浏览器大面积重绘和重排。

注：3D 变形会消耗更多的内存和功耗。

使用 translate3d 右移 500px 的动画流畅度要明显优于直接使用 left：
```css
.ball-1 {
  transition: -webkit-transform .5s ease;
  -webkit-transform: translate3d(0, 0, 0);
}
.ball-1.slidein{
  -webkit-transform: translate3d(500px, 0, 0);
}
.ball-2 {
  transition: left .5s ease; left：0;
}
.ball-2.slidein {
  left：500px;
}
```

#### 提升 CSS 选择器性能
CSS 选择器对性能的影响源于浏览器匹配选择器和文档元素时所消耗的时间，所以优化选择器的原则是应尽量避免使用消耗更多匹配时间的选择器。而在这之前我们需要了解 CSS 选择器匹配的机制， 如子选择器规则：

```css
#header > a {font-weight:blod;}
```

我们中的大多数人都是从左到右的阅读习惯，会习惯性的设定浏览器也是从左到右的方式进行匹配规则，推测这条规则的开销并不高。

我们会假设浏览器以这样的方式工作：寻找 id 为 header 的元素，然后将样式规则应用到直系子元素中的 a 元素上。我们知道文档中只有一个 id 为 header 的元素，并且它只有几个 a 元素的子节点，所以这个 CSS 选择器应该相当高效。

事实上，却恰恰相反，CSS 选择器是从右到左进行规则匹配。了解这个机制后，例子中看似高效的选择器在实际中的匹配开销是很高的，浏览器必须遍历页面中所有的 a 元素并且确定其父元素的 id 是否为 header 。

如果把例子的子选择器改为后代选择器则会开销更多，在遍历页面中所有 a 元素后还需向其上级遍历直到根节点。

```css
#header  a {font-weight:blod;}
```

理解了CSS选择器从右到左匹配的机制后，明白只要当前选择符的左边还有其他选择符，样式系统就会继续向左移动，直到找到和规则匹配的选择符，或者因为不匹配而退出。我们把最右边选择符称之为**关键选择器**。——[更多详情](http://www.jianshu.com/p/268c7f3dd7a6)

1、避免使用通用选择器
```css
/* Not recommended */
.content * {color: red;}
```

浏览器匹配文档中所有的元素后分别向上逐级匹配 class 为 content 的元素，直到文档的根节点。因此其匹配开销是非常大的，所以应避免使用关键选择器是通配选择器的情况。

2、避免使用标签或 class 选择器限制 id 选择器
```css
/* Not recommended */
button#backButton {…}
/* Recommended */
#newMenuIcon {…}
```

3、避免使用标签限制 class 选择器
```css
/* Not recommended */
treecell.indented {…}
/* Recommended */
.treecell-indented {…}
/* Much to recommended */
.hierarchy-deep {…}
```

4、避免使用多层标签选择器。使用 class 选择器替换，减少css查找
```css
/* Not recommended */
treeitem[mailfolder="true"] > treerow > treecell {…}
/* Recommended */
.treecell-mailfolder {…}
```

5、避免使用子选择器
```css
/* Not recommended */
treehead treerow treecell {…}
/* Recommended */
treehead > treerow > treecell {…}
/* Much to recommended */
.treecell-header {…}
```

6、使用继承
```css
/* Not recommended */
#bookmarkMenuItem > .menu-left { list-style-image: url(blah) }
/* Recommended */
#bookmarkMenuItem { list-style-image: url(blah) }
```

# 网页字体排印指南
#### 关于

网页上百分之九十五的信息是「文字」，大多数人浏览网页的状态就是阅读，也就是你目前正在做的事情. 因此作为一名前端工程师，让文字更好地在网页显示，是一件极其重要的工作.

字体排印有两种形式，一种称为 Creative Typography，另一种称为 Technical Typography. 前者倾向于设计，比如选择的字体表达的情绪，字间距的设定带来的视觉影响. 而后者更倾向于技术，以一套有迹可循的规则进行应用，比如实现「齐头尾」如何避免中西文混排造成的字间距拉伸，以及选择什么样的 font-family 可以在多平台上最优显示等等.

本文主要围绕 Technical Typography 进行讨论.

#### 选择字体
在 Web 上应用字体，是一门技术，同时也是一门艺术. 由于计算机历史发展的原因，西文有大量优秀的字体可供选择，可对于中文来说就是一项挑战. 主流操作系统提供的本地中文字体极少，另一方面中文字体组成的特殊性，其体积过于庞大，无法良好地使用 webfont. 所以编写健壮的 font-family 是一件需要深思熟虑的事情.

以下列出各种平台下合适的中西文字体：

桌面端 Mac, Windows, Linux 上适合网页显示的优秀中文字体
|Mac|	Windows|	Linux|
|---|---|---|
冬青黑体 Hiragino Sans GB|中易宋体 SimSun|文泉驿微米黑 WenQuanYi Microhei|
黑体-简（华文黑体）Heiti SC (STHeiti)	微软雅黑 Microsoft YaHei	宋体-简（华文宋体）Songti SC (STSong)		

移动端 iOS, Android 上适合网页显示的优秀中文字体
|iOS|	Android|
|---|---|
|黑体-简（华文黑体）Heiti SC (STHeiti)|	思源黑体 Noto Sans| CJK SC|
||Droid Sans Fallback|
主流操作系统上适合网页显示的优秀西文字体
|无衬线|	衬线	|等宽|
|---|---|
|Lucida Grande|	Georgia	Menlo|
|Helvetica Neue	|Times New Roman	|Courier|
|Arial|||		

抛开宋/明体长时间作为系统默认字体，所产生的审美疲劳，宋/明体相比黑体是更合适作为内文字体. 大多的宋/明体针对内文设计，横细直粗，造型方正，笔画在小字号的情况下，不会糊在一起，给人一种素雅的感觉. 而黑体笔画粗壮有力，引人注目，更适合作为标题使用.

但大部分人已经习惯在网页上阅读黑体，以及宋/明体在字重过大的情况下，显示效果还是不太理想. 所以内文默认提供黑体，可选择性的切换宋/明体.

按照以上表格提供的中文字体，为此我为内文和标题编写两套 font-family. 关于这两套 font-family 的选择和排序，等空闲时，再写一篇文章谈下.

```css
 p {
  font-family: "Georgia", "Times New Roman", "Songti SC", "SimSun", serif;
}

h6 {
    font-family: "Lucida Grande", "Helvetica Neue", "Arial", "Hiragino Sans GB", "Noto Sans CJK SC", "Heiti SC", "Microsoft YaHei", "WenQuanYi Microhei", sans-serif;
}
```
## 垂直的旋律
### 音阶
Robert Bringhurst 在《The Elements of Typographic Style》谈到字号大小之间的比例，形似于音乐中的音阶. 作曲时以某个特定的音阶为基础，才会形成特定的风格. 字号的排版同样如此，有规律的字号变化，才会形成特定的排版风格.

将内文以 16px 作为字号 
标题 h1, h2, h3, h4, h5, h6 以 16px 作为字号基础，按同比例的递减

```css
p  { font-size: 16px; }
h1 { font-size: 2em; }
h2 { font-size: 1.8em; }
h3 { font-size: 1.6em; }
h4 { font-size: 1.4em; }
h5, h6 { font-size: 1.2em; }
```

## 节拍

此外，Robert Bringhurst 还谈到版式中的空间就像音乐中的时间(Space in typography is like time in music)，言下之意，把握间距（行高）就如把握节拍. 节拍是对时间的分割，倘若抢拍便失去节奏. 文字的间距（行高）亦是对空间的分割，不一致间距（行高）比例，便会失去「垂直的旋律」.

将内文以 1.7em 作为行高
标题 h1, h2, h3, h4, h5, h6 以 1.5em 作为行高.

```css
p { line-height: 1.7em; }
h1, h2, h3, h4, h5, h6 { line-height: 1.5em; }
```

## 段首缩进 VS 段落间距
段落分隔对于中文排版而言也是特别重要，主要以「段首缩进」和「段落间距」两种方式表现，它们的唯一目的就是将段落分隔.

「段首缩进」主要用于印刷书籍，节省纵向空间，保持文本连贯，但一般在网页上的阅读速度较快，会使文字过于密集产生压力. 相反「段落间距」主要用于网页，充分利用网页无限的纵向空间，保障文本块的整洁，同时给予长篇阅读休息的间隙. 所以一般网页排版，会考虑选择「段落间距」，可以设置以下属性实现「段落间距」.

```css
p { margin-bottom: 1.7em; }
h1, h2, h3, h4, h5, h6 {
  margin-top: .7em;
  margin-bottom: 0.2em;
}
```

## 对齐
汉字的方块性质构成了汉字独有的艺术美感，使其具有工整的特点，从而显现出中文排版的重要原则：所有元素都是正方体. 但从二十世纪开始使用标点后，以及中西文混排的情况越来越多，为了保证「禁则处理」和「齐头尾」实现，可能需要在不同条件下进行适当的断词处理.

>「禁則」是来自日语的排版术语，主要指的就是禁止一些标点等字符出现在行首或行尾的规则，大致相当于汉语常说的「避头尾」.

可以设置以下属性实现「齐头尾」，其中inter-ideographic意思是「通过调整单词和字符之间的留白来实现两端对齐」.

```css
p {
text-align: justify;
text-justify: inter-ideographic;
}
```

但这样的「齐头尾」并不是完美的，主要由于技术遗留原因，在 Windows 和 Linux 上的 webkit 浏览器并没有实现 inter-ideographic 导致中西文混排的时候，容易出现过度拉伸字间距的情况.

![image](https://cloud.githubusercontent.com/assets/24730006/25987746/d6439c3e-3727-11e7-9dcd-18ecce9990db.png)  

左侧: inter-ideographic | 右侧: break-all  

为此有一种不优雅的解决方案，在极易出现字间距拉伸的小尺寸屏幕（手机）上使用「断词处理」，避免字间距拉伸，可是这样也带来「无视避头尾规则」和「西文单词断词」的坏毛病. 这是用一种不优雅解决另一种不优雅，按需抉择吧.

可以设置以下属性进行「断词处理」

`p { word-break: break-all; }`

#### 未作说明...
- 单行字数
- 没有斜体
- 图片样式
- 引用文字
- Kerning
- 有序/无序列表
- 「.」作为句号相比「。」的优势

#### 参见：
- [Technical Web Typography: Guidelines and Techniques](http://www.smashingmagazine.com/2011/03/14/technical-web-typography-guidelines-and-techniques/#tt-face)
- [Web Design is 95% Typography](https://ia.net/blog/the-web-is-all-about-typography-period)
- [The Elements of Typographic Style](http://book.douban.com/subject/1466932/)
- [Best Practices for Chinese Layout](https://medium.com/@bobtung/best-practice-in-chinese-layout-f933aff1728f)
- [JUSTFONT BLOG](http://blog.justfont.com/)
- [Google](https://www.google.com/)
- [维基百科](http://www.wikipedia.org/)
- [知乎](http://www.zhihu.com/)