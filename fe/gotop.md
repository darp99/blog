# 返回顶部的JS代码  

```html
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <title>Javascript 返回顶部</title>
    <link rel="stylesheet" href="base.css">
    <script src="base.js"></script>

</head>

<body>
    <a href="javascript:;" id="btn" title="回到顶部"></a>
    <div class="bg">

    </div>
</body>

</html>
```

```css
  * {
      margin: 0;
      padding: 0;
  }
  
  #btn {
      width: 40px;
      height: 40px;
      position: fixed;
      right: 65px;
      bottom: 10px;
      display: none;
      background: url(images/top_bg.png) no-repeat left top;
  }
  
  #btn:hover {
      background: url(images/top_bg.png) no-repeat 0 -39px;
  }
  
  .bg {
      background: gray;
      width: 1190px;
      height: 2000px;
      margin: 0 auto;
  }
  ```

  ```js
  window.onload = function() {
    var btn = document.querySelector('#btn');
    var clientHeight = document.documentElement.clientHeight;
    //加载页面时候进行测算
    var scrollTop = document.body.scrollTop;
    if (scrollTop >= clientHeight) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
    //滚动时候再次侦测
    window.onscroll = function() {
        //不能把当前scrollTop值设置为全局变量
        var scrollTop = document.body.scrollTop;
        if (scrollTop >= clientHeight) {
            btn.style.display = 'block';
        } else {
            btn.style.display = 'none';
        }
    }


    btn.onclick = function() {
        //设置定时器
        var timer = setInterval(function() {
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //设置速度
            var ispeed = Math.ceil(osTop / 6);
            //获取滚动条距离顶部的高度
            document.documentElement.scrollTop = document.body.scrollTop = osTop - ispeed;
            // console.log(osTop - ispeed);
            if (osTop == 0) {
                clearInterval(timer);
            }
        }, 30);
    }
}
```
