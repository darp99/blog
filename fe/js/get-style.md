**语法**  

```
var style = window.getComputedStyle(element, Pseudo);
```

如果第二个元素不是伪类，那么就填写 null

**getComputedStyle与style的区别**

我们使用element.style也可以获取元素的CSS样式声明对象，但是其与getComputedStyle方法还有有一些差异的。

- 只读与可写
正如上面提到的`getComputedStyle`方法是只读的，只能获取样式，不能设置；而`element.style`能读能写，能屈能伸。
- 获取的对象范围
`getComputedStyle`方法获取的是最终应用在元素上的所有CSS属性对象；而element.style只能获取元素style属性中的CSS样式。因此对于一个光秃秃的元素`<p>`，`getComputedStyle`方法返回对象中`length`属性值（如果有）就是190+, 而`element.style`就是0。

**兼容性**  
```js
function getStyle(elem, property) {
    // ie通过currentStyle来获取元素的样式
    //其他浏览器通过getComputedStyle来获取
    return document.defaultView.getComputedStyle ? document.defaultView.getComputedStyle(elem, false)[property] : elem.currentStyle[property];
}
```

参考链接：http://www.zhangxinxu.com/wordpress/2012/05/getcomputedstyle-js-getpropertyvalue-currentstyle/