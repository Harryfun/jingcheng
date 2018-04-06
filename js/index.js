//浏览器检测
(function() {
    function isMobile() {
        return /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent) ? !0 : /(Android)/i.test(navigator.userAgent) ? !0 : !1;
    }

    var html = document.getElementsByTagName('html')[0];
    var str;
    if (isMobile()) {
        window.isMobile = 1;
        str = 'MC';
    } else {
        window.isMobile = 0;
        str = 'PC';
    }
    //添加浏览器类型判断
    html.className = html.className ? html.className + " " + str : str;
    var htmlClass = html.className;

    function resize(html) {
        var c = "";
        //检测屏幕宽度
        var d = document.documentElement.clientWidth;
        1600 > d && (c += " lt1600");
        1400 > d && (c += " lt1400");
        1200 > d && (c += " lt1200");
        1e3 > d && (c += " lt1000");
        960 > d && (c += " lt960");
        640 > d && (c += " lt640");
        500 > d && (c += " lt500");
        400 > d && (c += " lt400");
        1600 < d && (c += " gt1600");
        1400 < d && (c += " gt1400");
        1200 < d && (c += " gt1200");
        1e3 < d && (c += " gt1000");
        960 < d && (c += " gt960");
        640 < d && (c += " gt640");
        500 < d && (c += " gt500");
        400 < d && (c += " gt400");
        html.className = htmlClass + c;
    }
    resize(html);
    window.onresize = function(event) {
        resize(html);
    };

})();
$(document).ready(function() {
    $(".loading").hide();
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,
        loop: true,

        // 如果需要分页器
        pagination: '.swiper-pagination',

        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',

        // 如果需要滚动条
        scrollbar: '.swiper-scrollbar',
    })
})
$("#list").click(list);
$("#close").click(list);

function list() {
    if ($("#list").css('display') == "none") {
        $("#list").css({
            "display": "inline-block"
        });
        $("#close").css({
            "display": "none"
        });
        /*document.getElementById("list").style.display="inline-block";
        document.getElementById("close").style.display="none";*/
        $("#navlist").removeClass("navlist2");
        $("#navlist").addClass("navlist");
    } else {
        $("#list").css({
            "display": "none"
        });
        $("#close").css({
            "display": "inline-block"
        });
        /*document.getElementById("list").style.display="none";
        document.getElementById("close").style.display="inline-block";*/
        $("#navlist").removeClass("navlist");
        $("#navlist").addClass('navlist2');
    }
}