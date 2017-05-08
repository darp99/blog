# copy text in input element

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Copy Command</title>
    <style>
        div {
            margin: 10px;
        }
    </style>
</head>

<body>
    <div>点击复制后在右边textarea CTRL+V看一下</div>
    <div>
        <input type="text" id="inputText" value="测试文本" />
        <input type="button" id="btn" value="复制" />
    </div>
    <div>
        <textarea rows="4"></textarea>
    </div>

    <script type="text/javascript">
        //不支持IE浏览器，火狐浏览器兼容中。。
        var btn = document.getElementById('btn');
        btn.addEventListener('click', function () {
            var inputText = document.getElementById('inputText');
            //var currentFocus = document.activeElement;
            //焦点定位到input
            inputText.focus();
            //选择input的文字范围，参数第一个为起始位置，第二个为最后位置的下一个
            //也可以使用inputText.select();
            inputText.setSelectionRange(0, inputText.value.length);
            //document.execCommand返回bool
            if (document.execCommand('copy', true)) {
                alert('复制成功！')
                // currentFocus.focus();
            } else {
                alert('复制失败，请使用Chrome浏览器继续操作');
            }

        });
    </script>
</body>

</html>
```