# 图片灰度 插件 v1.0.1
###将图片变为灰色，可选鼠标悬停后是否复原

文件结构：
-------------
1. /jq/GrayScale.js 放入项目文件夹jq中
2. /css/GrayScale.css 放入项目文件夹css中

页面引用：
-------------
1. 页面底部引用svg代码块：

		<svg class="svg_hidden" version="1.1" xmlns="http://www.w3.org/2000/svg">
	        <filter id="grayscale">
	            <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />
	        </filter>
	    </svg>

2. 页面底部引用最新版 /inc/Jquery.min.js#1.x.x
3. Jquery后引用 /jq/GaryScale.js
4. 页面<head>中引用/css/GaryScale.css
5. 将想变灰的图片增加class="GaryScale"，并增加对应的svg标签。如：

 	\<img src="images/gj_test_img.jpg" class="GrayScale" />
    <svg class="GrayScale">
        <image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/gj_test_svg.jpg" x="0" y="0" width="800" height="522" />
    </svg>

页面底部调用初始化方法：
--------------

	$(function(){
		var GrayScale_para = {
	        box_selector: "body.demo", // 作用范围选择器，如：body.index。无默认值
	        hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
		};

		GrayScale.init(GrayScale_para);
	});