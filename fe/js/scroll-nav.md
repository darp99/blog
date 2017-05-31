```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>jQuery锚点滚动导航菜单</title>
    <script src="https://lib.baomitu.com/jquery/1.12.4/jquery.js"></script>
    <link href="//lib.baomitu.com/normalize/7.0.0/normalize.css" rel="stylesheet">
    <style>
        #content {
            width: 100%;
            height: auto;
            margin: 0 auto;
        }

        #content div {
            width: 100%;
            height: 868px;
            margin: 0 auto;
        }

        #content div#item1 {
            background-color: #00ff00
        }

        #content div#item2 {
            background-color: #279756
        }

        #content div#item3 {
            background-color: #2ce3e5
        }

        #content div#item4 {
            background-color: #5e57e7
        }

        #content div#item5 {
            background-color: #ca61ae
        }

        #content div h1 {
            font-size: 36px;
            color: #fff;
        }

        #menu {
            width: 88px;
            height: auto;
            position: fixed;
            top: 50%;
            right: 15px;
            margin-top: -135px;
        }

        #menu ul {
            display: block;
            list-style: none
        }

        #menu ul li a {
            width: 88px;
            height: 54px;
            line-height: 54px;
            text-align: center;
            background-color: #fff;
            color: #32c96a;
            display: block
        }

        #menu ul li a.cur {
            background-color: #32c92a;
            color: #fff;
        }

        #menu ul li a:hover {
            background-color: pink;
            color: #fff;
        }
    </style>
  
</head>

<body>

    <div id="menu">
        <ul>
            <li><a href="#item1" class="cur">1楼</a></li>
            <li><a href="#item2">2楼</a></li>
            <li><a href="#item3">3楼</a></li>
            <li><a href="#item4">4楼</a></li>
            <li><a href="#item5">5楼</a></li>
        </ul>
    </div>

    <div id="content">
        <div class="item" id="item1">
            <h1>1F</h1>
            <h1>jQuery锚点滚动导航菜单</h1>
            <h1>请点击右侧导航或 滚动鼠标 看看效果</h1>
        </div>
        <div class="item" id="item2">
            <h1>2F</h1>
        </div>
        <div class="item" id="item3">
            <h1>3F</h1>
        </div>
        <div class="item" id="item4">
            <h1>4F</h1>
        </div>
        <div class="item" id="item5">
            <h1>5F</h1>
        </div>
    </div>
      <script>
        $(document).ready(function () {
            $(window).scroll(function () {
                var top = $(document).scrollTop(); //定义变量，获取滚动条的高度
                var menu = $("#menu"); //定义变量，抓取#menu
                var items = $("#content").find(".item"); //定义变量，查找.item

                var curId = ""; //定义变量，当前所在的楼层item #id 

                items.each(function () {
                    var m = $(this); //定义变量，获取当前类
                    var itemsTop = m.offset().top; //定义变量，获取当前类的top偏移量
                    if (top > itemsTop) {
                        curId = "#" + m.attr("id");
                    } else {
                        return false;
                    }
                });

                //给相应的楼层设置cur,取消其他楼层的cur
                var curLink = menu.find(".cur");
                if (curId && curLink.attr("href") != curId) {
                    curLink.removeClass("cur");
                    menu.find("[href=" + curId + "]").addClass("cur");
                }
                // console.log(top);
            });
        });
    </script>
</body>

</html>
```