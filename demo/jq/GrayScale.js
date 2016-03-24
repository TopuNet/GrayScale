/*
    高京
    20160324
    图片变灰滤镜配套js
*/

var GrayScale = {
    init: function(para) {
        var para_default = {
            box_selector: null, // 作用范围选择器，如：body.index。无默认值
            hover_restore: true // 鼠标悬停时是否还原图片（即取消灰色滤镜），默认true
        };

        para = $.extend(para_default, para);

        if (para.hover_restore) {
            $(para.box_selector + " img.GrayScale").hover(function() {
                $(this).addClass("restore");
            }, function() {
                $(this).removeClass("restore");
            });

            $(para.box_selector + " svg.GrayScale image").hover(function() {
                $(this).css("filter", "none");
            },function(){
                $(this).removeAttr("style");
            });
        }
    }
};
