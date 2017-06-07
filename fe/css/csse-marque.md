## CSS3实现跑马灯效果
```html
<div class="marquee">
  <span class="content">
    raw js + css3 transition 跑马灯测试。跑马灯测试。跑马灯测试。 <span class="content-space"></span>
  </span>
</div>
```

```css
@keyframes kf-marque-animation{ 0% { transform: translateX(0); } 100% { transform: translateX(-33.3%); } }
.marquee{
  width: 400px;
  height: 44px;
  line-height: 44px;
  background: #e9eaea;
  display: block;
  margin: 0 auto;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  position: relative;
}
.marquee .content{
  display: inline-block;
  position: relative;
  padding-right: 0px;
  white-space: nowrap;
  animation: kf-marque-animation 12s infinite linear;
}
.marquee .content-space{
  display: inline-block;
  width: 5em;
}
```

```js
//滚动
(function () {
  var speed = 150; // 速度 -- px每秒

  var $marquee = document.querySelector('.marquee');
  var $marqueeContent = $marquee.querySelector('.content');
  // 内容复制3份好有连续性
  $marqueeContent.innerHTML = $marqueeContent.innerHTML + $marqueeContent.innerHTML + $marqueeContent.innerHTML
  var contentWidth = $marqueeContent.getBoundingClientRect().width;
  if (contentWidth <= 0) { // 没有内容搞什么动画
    return;
  }

  // 内容复制了3份，宽度也要除以3
  contentWidth = contentWidth / 3

  // 计算一次动画应该要花费多少时间
  var onceTime = contentWidth / speed * 1000; //ms

  $marqueeContent.style.animationDuration = onceTime + "ms"
})()
```
