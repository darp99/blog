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