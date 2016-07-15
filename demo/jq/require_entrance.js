require(["GrayScale", "/inc/jquery.min.js"], function($GrayScale) {

    $(function() {
        var GrayScale_para={
            box_selector: "body.demo", // 作用范围选择器，如：body.index。无默认值
            hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
        };

        $GrayScale.init(GrayScale_para);
    });
});
