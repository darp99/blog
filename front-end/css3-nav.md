 
# code
```
<!doctype html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<title>CSS制作立体导航</title>
	<link rel="stylesheet" href="http://www.w3cplus.com/demo/css3/base.css">
	<style>
		body {
			background: #ebebeb;
		}
		
		.nav {
			width: 560px;
			height: 50px;
			font: bold 0/50px Arial;
			text-align: center;
			margin: 40px auto 0;
			background: #f65f57;
			/*制作圆*/
			border-radius: 8px;
			/*制作导航立体风格*/
			box-shadow: 0px 7px red;
		}
		
		.nav a {
			display: inline-block;
			transition: all 0.2s ease-in;
			color: #fff;
		}
		
		.nav a:hover {
			transform: rotate(10deg);
			text-decoration: none;
		}
		
		.nav li {
			position: relative;
			display: inline-block;
			padding: 0 16px;
			font-size: 13px;
			text-shadow: 1px 2px 4px rgba(0, 0, 0, .5);
			list-style: none outside none;
			/*制作导航列表项分隔线 ① */
			/*<bg-size> 这个属性的定义必须在 <position> 之后, 并使用 '/' 符号分隔 */
			/*background:linear-gradient(to bottom,#dd2926,#a82724,#dd2926) no-repeat right / 1px 15px;*/
		}
	
		/*删除第一项和最后一项导航分隔线*/
		
		
		.nav li:first-child::before {
			background-image: none;
		}
		/*使用伪元素制作导航列表项分隔线 ② */
		
		.nav li:before {
			content: "";
			color: #666;
			position: absolute;
			top: 18px;
			height: 20px;
			left: -1px;
			width: 1px;
			background-image: linear-gradient(to bottom, #f65f57, #993333, #f65f57);
		}

	</style>
</head>

<body>
	<ul class="nav">
		<li><a href="">Home</a></li>
		<li><a href="">About Me</a></li>
		<li><a href="">Portfolio</a></li>
		<li><a href="">Blog</a></li>
		<li><a href="">Resources</a></li>
		<li><a href="">Contact Me</a></li>
	</ul>
</body>

</html>
```