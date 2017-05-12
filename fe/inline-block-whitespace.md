## 去掉inline-block元素间间距
代码示例
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        nav {
            display: inline-block;
            vertical-align: top;
            width: 25%;
            background-color: gray;
        }

        .column {
            display: inline-block;
            vertical-align: top;
            width: 75%;
            background-color: bisque;
        }
    </style>
</head>

<body>
    <div class="container">
        <nav>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </nav>

        <div class="column">
            This is a column!
        </div>
    </div>
</body>

</html>
```
inline-block 布局好处就是不需要处理浮动就能实现宽度自适应，如上面的代码所示，虽然两个元素设置了 25% 和 75% 的宽度，按道理应该二者应该并排在一行。

![image](https://cloud.githubusercontent.com/assets/24730006/25986499/d394b428-3722-11e7-83ea-ffe63399b4a2.png)  


但是 inline-block 元素之间有个大概 1px 的间距，所以第二个 inline-block 元素就换行，如果我们把 .column 的宽度设置小一些就能看到这个间距。  

![image](https://cloud.githubusercontent.com/assets/24730006/25986548/032cff60-3723-11e7-976b-f04ab36dc848.png)  

简单的方式就是给 inline-block 元素父元素设置 font-size:0 并给其设置合适的 font-size 就可以了，代码示例如下  

```css
.container {
    //父元素
    font-size: 0;
}

nav {
    display: inline-block;
    vertical-align: top;
    width: 25%;
    font-size: 16px;
    background-color: gray;
}

.column {
    display: inline-block;
    vertical-align: top;
    width: 75%;
    font-size: 16px;
    background-color: bisque;
}
```
## 更多参考
1. [张鑫旭：去除inline-block元素间间距的N种方法](http://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)
2. [知乎：有哪些好方法能处理 display: inline-block 元素之间出现的空格？](https://www.zhihu.com/question/21468450)