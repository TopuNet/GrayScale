# 图片灰度 插件 v1.1.4
###将图片变为灰色，可选鼠标悬停后是否复原
###安装：npm install TopuNet-GrayScale

文件结构：
-------------
		1. /jq/GrayScale.js 放入项目文件夹jq（原生规范）或widget/lib（AMD规范）中
		2. /css/GrayScale.css 放入项目文件夹inc中

页面引用：
-------------
1. 页面底部引用svg代码块：

		<svg class="svg_hidden" version="1.1" xmlns="http://www.w3.org/2000/svg">
	        <filter id="grayscale">
	            <feColorMatrix type="matrix" values="0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0" />
	        </filter>
	    </svg>

原生引用

        2. 页面底部引用最新版 /inc/Jquery.min.js#1.x.x
		3. Jquery后引用 /jq/GaryScale.js

requireJS引用

        2. 依赖GrayScale.js和(jquery.min.js#1.x 或 zepto.js)，成功后返回对象GrayScale


4. 将想变灰的图片增加class="GaryScale"，并增加对应的svg标签。如：

		<img src="images/gj_test_img.jpg" class="GrayScale" />
		<svg class="GrayScale">
			<image xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="images/gj_test_svg.jpg" x="0" y="0" width="800" height="522" />
		</svg>

	其中IE10和11显示的svg标签，其他浏览器显示img标签。
	一页中可以放置多张图片，每张图片要有一个img标签+一个svg标签。

调用方法：
--------------

		$(function(){
			var GrayScale_para = {
		        box_selector: "body.demo", // 作用范围选择器，如：body.index。无默认值
		        hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
			};

			GrayScale.init(GrayScale_para);
		});


更新历史：
-------------

v1.1.4

		1. 修改配套样式文件
		2. 修改Readme.md

v1.1.3

		1. 删除demo中的css文件夹（空文件夹）
		2. 修改Readme.md

v1.1.2

	    1. 在dist文件夹中，增加package.json
	    2. 将dist发布到npm：TopuNet-GrayScale

v1.1.1

		1. 兼容原生JS和AMD规范
		2. 修改demo
