## 说明
代码来源于张鑫旭大神的博客  
## 代码示例
```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Datalist实现搜索提示框</title>
</head>

<body>
    <!--input 元素绑定 list 属性即可-->
    <input type="email" id="email" list="emailList" name="off_autocomplete" />
    <datalist id="emailList">
        <!-- add by lishude
            option 元素加入“/”结尾可以让一些IDE代码格式化正常 -->
        <!--加入label属性可以设置说明-->
        <option label="qq邮箱" value="*@qq.com" />
        <option label="163邮箱" value="*@163.com" />
        <option label="Gmail邮箱" value="*@gmail.com" />
        <option label="阿里云邮箱" value="*@aliyun.com" />
        <option label="126邮箱" value="*@126.com" />
    </datalist>
    <script>
        var eleList = document.getElementById("emailList")
            , eleMail = document.getElementById("email")
            , htmlListInit = '', arrEmailList = [];

        if (eleMail && eleList && (htmlListInit = eleList.innerHTML) !== '') {
            // 得到类似["qq.com", "163.com", "gmail.com", ...]的数据
            arrEmailList = [].slice.call(eleList.getElementsByTagName("option")).map(function (option) {
                return option.value.replace("*@", "");
            });

            eleMail.fnListReplace = function () {
                var arrValue = this.value.trim().split("@");
                // 修复FireFox浏览器下无限input问题
                // 如果值不完全匹配某option值，执行动态替换 
                if (arrValue.length !== 2 || arrEmailList.indexOf(arrValue[1]) === -1) {
                    eleList.innerHTML = htmlListInit.replace(/\*/g, arrValue[0]);
                }
                return this;
            };
            // 绑定输入事件侦听
            eleMail.addEventListener("input", function () {
                this.fnListReplace.call(this);
            }, false);

            //  载入即匹配
            eleMail.fnListReplace.call(eleMail).focus();
        } else {
            eleList = document.createElement("datalist");
            eleList.innerHTML = '<p class=sorry>抱歉，当前浏览器不支持HTML5 datalist.</p>';
            eleMail.parentNode.appendChild(eleList);
        }
    </script>

</body>

</html>
```