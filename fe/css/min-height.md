## min-height以及百分比大小的解析

有这么一段代码，

```html
<html>

<body>
    <div>
        content
    </div>
</body>

</html>
```

如果我们要想让 `div` 元素高度设置为 100% ，因为百分比要使用父元素的高度为基准，所以必须要给 `<body>` 以及 `<html>` 设置 `height` 为 100%才生效，如下所示。

```css
html,
body {
    height: 100%;
    background: gray;
}

div {
    height: 100%;
    background-color: green;
}
```

但是如果我们对 `<body>` 元素设置 `min-height` 那就不起作用了。

```css
html {
      height: 100%;
}

body {
      min-height: 100%;
      background: gray;
}

div {
    height: 100%;
    background-color: green;
}
```
原因如下，**所有的百分比必须要设置一个确定的值，子元素设置百分比大小才可以生效**。

>当我们给块元素设置百分比高度时,往往没能看到效果.因为百分比的大小是相对其最近的父级元素的高的大小,也就是说,其最近的父级元素应该有一个明确的高度值才能使其百分比高度生效.设置min-height的元素即使内容的高度很少时也能撑开到min-height设置的高度;当内容的高度大于min-height时就设置为内容的高度.要使min-height的百分比值生效,其父元素的height值必须为一个固定的高度或者是一个有效的百分比高度.值得注意的是,父元素设置了有效的min-height但没有设置height属性时,子元素的height和min-height的百分比不会生效.因为设置height和min-height必须基于一个设置了固定高度或者是一个有效百分比高度的父元素.多层百分比高度嵌套的风格，应该尽量避免，因为子元素百分比高度基于父元素百分比高度的前提是父元素的父元素必须有一个明确的高度。《css权威指南》指出height width百分数是相对于包含块的。《css权威指南》又指出（P180），如果没有显示声明包含块的height，百分数高度会重置为auto，所以上面html 的height设置为任何值都跟设置没设置一样。
