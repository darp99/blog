倒计时HTML参考代码

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>距离20XX年还有...</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style type="text/css">
    * {
        margin: 0;
        padding: 0;
    }
    
    .wrap {
        display: flex;
        height: 100vh;
        position: relative;
        align-items: center;
        justify-content: center;
    }
    
    .content {
        text-align: center;
    }
    
    .title {
        font-size: 10vh;
        color: black;
        margin-bottom: 32px;
    }
    
    .time {
        font-size: 5vh;
        color: red;
    }
    </style>
    <script type="text/javascript">
    // 小于10的数字补零

    function floor(value) {
        return value > 0 && value < 10 ? '0' + value : value;
    }

    setInterval((function() {
        var now = new Date().getTime();
        var future = new Date('2018/1/1');
	// 计算现在到未来有多少秒
        var seconds = Math.floor((future - now) / 1000);
	//如果小于零则显示“时间到”
        if (seconds <= 0) {
            document.querySelector('p').innerHTML = '时间到！';
        } else {
            var day = Math.floor(seconds / (24 * 60 * 60));
            seconds %= (24 * 60 * 60);
            var hours = Math.floor(seconds / (60 * 60));
            seconds %= 3600;
            var minites = Math.floor(seconds / 60);
            seconds %= 60;
	    // 整理要输出的内容
            var str = '<span class="time">' + floor(day) + '</span>' + '天' +
                '<span class="time">' + floor(hours) + '</span>' + '时' +
                '<span class="time">' + floor(minites) + '</span>' + '分' +
                '<span class="time">' + floor(seconds) + '</span>' + '秒';
            document.querySelector('#timer').innerHTML = str;
        }
    }), 1000)
    </script>
</head>

<body>
    <div class="wrap">
        <div class="content">
            <div class="title">距离2018年还有</div>
            <div id="timer">计算中...</div>
        </div>
    </div>
</body>

</html>
```
