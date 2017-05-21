## 双飞翼布局

事实上，圣杯布局其实和双飞翼布局是一回事。它们实现的都是三栏布局，两边的盒子宽度固定，中间盒子自适应，也就是我们常说的固比固布局。它们实现的效果是一样的，差别在于其实现的思想。

圣杯布局的出现是来自于a list part上的一篇文章[In Search of the Holy Grail](http://www.alistapart.com/articles/holygrail/)。比起双飞翼布局，它的起源不是源于对页面的形象表达。在西方，圣杯是表达“渴求之物”的意思。而双飞翼布局则是源于淘宝的UED，可以说是灵感来自于页面渲染。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>双飞翼布局示例</title>
</head>
<style>
    html,
    body {
        margin:0;
        padding:0
        font-size: 16px;
        color: white;
    }

    header {
        width: 100%;
        height: 40px;
        background-color: darkseagreen;
    }

    .container {
        height: 200px;
        overflow: hidden;
        padding: 0 200px;
    }

    .middle {
        width: 100%;
        height: 200px;
        background-color: deeppink;
        float: left;
    }

    .left {
        width: 200px;
        height: 200px;
        background-color: blue;
        float: left;
        margin-left: -100%;
        position: relative;
        left: -200px;
    }

    .right {
        width: 200px;
        height: 200px;
        background-color: darkorchid;
        float: left;
        margin-left: -200px;
        position: relative;
        right: -200px;
    }

    footer {
        width: 100%;
        height: 30px;
        background-color: darkslategray;
    }
</style>

<body>
    <header>
        <h4>Header内容区</h4>
    </header>
    <div class="container">
        <div class="middle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque inventore labore quidem corrupti fugit, optio ex amet reiciendis
            quas ad velit quia nobis totam tempora doloribus eaque atque saepe nisi!
        </div>
        <div class="left">
            <h4>左边栏</h4>
        </div>
        <div class="right">
            <h4>右边栏</h4>
        </div>
    </div>
    <footer>
        <h4>Footer内容区</h4>
    </footer>
</body>

</html>
```

## 参考

1. [圣杯布局和双飞翼布局（前端面试必看）](http://www.jianshu.com/p/f9bcddb0e8b4)
2. [CSS布局奇淫巧计之-强大的负边距](http://www.cnblogs.com/2050/archive/2012/08/13/2636467.html)
3. [CSS 布局经典问题初步整理](https://my.oschina.net/brianway/blog/904025)