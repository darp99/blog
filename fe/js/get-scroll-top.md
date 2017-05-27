## 返回文档在垂直方向已滚动的像素值

### 使用范围
1. 返回顶部
2. header动画效果
3. 等

### scrollY
`window.scrollY `的值 —— 当前页面垂直滚动的像素个数(初始为 0)。  

当用户滚动时，`window.scrollY` 的值会相应的增加或减少。

**语法**  

```js
var y = window.scrollY || window.pageYOffset;
```

y 是文档从顶部开始滚动过的像素值，`pageYOffset`是为了兼容其它浏览器。

**示例**

```js
// 保证刚好滚动到第二页
if (window.scrollY) {
  window.scroll(0, 0);  // 重置滚动位置为文档的左上角
}
```

**注意**：改变此值无法改变状态  

### scrollTop
`Element.scrollLeft`属性表示网页元素的水平滚动条向右侧滚动的像素数量，`Element.scrollTop`属性表示网页元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0。

如果要查看整张网页的水平的和垂直的滚动距离，要从document.body元素上读取。

```js
document.documentElement.scrollTop||document.body.scrollTop
```

**注意**：设置该属性的值，会导致浏览器将指定元素自动滚动到相应的位置。