**布局**

- [学习 CSS 布局](http://zh.learnlayout.com/)
- [CSS 布局经典问题初步整理](https://my.oschina.net/brianway/blog/904025)

**定位**
- [HTML和CSS高级指南之二——定位详解](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)


**清除浮动**
- [stackoverflow](https://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)

**inline-block**
- [去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
- [拜拜了,浮动布局-基于display:inline-block的列表布局](http://www.zhangxinxu.com/wordpress/2010/11/%E6%8B%9C%E6%8B%9C%E4%BA%86%E6%B5%AE%E5%8A%A8%E5%B8%83%E5%B1%80-%E5%9F%BA%E4%BA%8Edisplayinline-block%E7%9A%84%E5%88%97%E8%A1%A8%E5%B8%83%E5%B1%80/)

**负margin**
-[负margin用法权威指南](https://www.w3cplus.com/css/the-definitive-guide-to-using-negative-margins.html)

简单总结几点：

- 不使用 float 的话，负 margin 元素是不会破坏页面的文档流。所以如果你使用负 margin 上移一个元素，所有跟随的元素都会被上移(而 relative 定位的元素则不同，会保留原位置，影响文档流)。
- 当 static 元素的 margin-top/margin-left 被赋予负值时，元素将被拉进指定的方向。
- 如果你设置 margin-bottom/right 为负数，元素并不会如你所想的那样向下/右移动，而是将后续的元素拖拉进来，覆盖本来的元素。
- 当元素不存在 width 属性或者 width: auto 的时候，负 margin 会增加元素的宽度.
- margin-top 为负值不会增加高度，只会产生向上位移;margin-bottom 为负值不会产生位移，会减少自身的供 CSS 读取的高度，影响下方的元素位置；上下相邻的元素两者均为负时，效果不叠加，取负值更多的那个效果。


**Flex 布局**
- [Flex 布局教程：实例篇](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)
- [Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- [一个完整的Flexbox指南](http://www.w3cplus.com/css3/a-guide-to-flexbox.html)

**Grid 布局**
- [带你入门 CSS Grid 布局](https://zhuanlan.zhihu.com/p/26757425)

**CSS3动画**
- [css3 动画手册](http://isux.tencent.com/css3/index.html)
- [CSS动画简介](http://www.ruanyifeng.com/blog/2014/02/css_transition_and_animation.html)