$(document).ready(function(){
    $(window).bind('scroll', function () {
        var header_height = $('.header').height();
        if ($(window).scrollTop() > 50)
            $('.header').css("top","-74px");
        else
        $('.header').css("top","0px");
    });
    
    var header_logo = $(".header-logo-img");
    // $(".header").mouseover(function (e) {   
    //    // header_logo.attr("src", header_logo.attr("src").replace("logo.png", "logo-white.png"));
    //     //header_logo.attr("src", header_logo.attr("src").replace("logo.jpg", "logo.jpg"));
    //     //header_logo.attr("src", "/static/assets/images/logo.jpg");
    //     //header_logo.show();
    //     $(".navigation ul li a").css("color","#FFF");
    // }).mouseout(function (e) {
    //     //header_logo.attr("src", header_logo.attr("src").replace("logo-white.png", "logo.png"));
    //     if($(".navigation ul").hasClass("text-white")){
    //         return;
    //     } else {
    //         $(".navigation ul li a").css("color","#000");
    //     }
    //     //header_logo.hide();
    // });

    $("body").on("click",".btn-search-toggle",function(){
        $(".header-search-content").show("slow");
        $(".btn-searh-wrapper").css("float","left");
        $(".header-search-wrapper").css("border-bottom","solid 2px white");
        $(".header-search-overlay").css("display","block");
        $(".header-search-overlay").css("z-index","1");
        $(".navigation").css("display","none");
    });

    $("body").on("click",".search-clear, .header-search-overlay",function(){
        $(".header-search-content").hide("slow");
        $(".btn-searh-wrapper").css("float","right");
        $(".header-search-wrapper").css("border-bottom","none");
        $(".header-search-overlay").css("display","none");
        $(".header-search-overlay").css("z-index","-1");
        $(".navigation").css("display","block");
    });

    /* mobile navigator */
    
    $("body").on("click",".navigation-toggle-closed", function(){
        $(".nav-list-wrapper").css("display","block");
        $(".navigation-overlay").css("display","block");
        $(".navigation-overlay").css("z-index","1");
        $("#nav-toggle-icon-close").css("display","block");
        
        $(this).addClass("navigation-toggle-opened");
        $(this).removeClass("navigation-toggle-closed");
        
    });
    
    $("body").on("click",".navigation-toggle-opened",function(){
        
        $(".nav-list-wrapper").css("display","none");
        $(".navigation-overlay").css("display","none");
        $(".navigation-overlay").css("z-index","0");
        $("#nav-toggle-icon-close").css("display","none");
        $(this).addClass("navigation-toggle-closed");
        $(this).removeClass("navigation-toggle-opened");
        
    });

    /* Search mobile */
    $("body").on("click",".btn-search-toggle-mobile",function(){
        $(".header-search-content-mobile").show("slow");
        $(".btn-searh-wrapper-mobile").css("float","left");
        $(".header-search-wrapper-mobile").css("border-bottom","solid 2px white");
        $(".header-search-overlay-mobile").css("display","block");
        $(".header-search-overlay-mobile").css("z-index","1");
    });

    $("body").on("click",".search-clear-mobile, .header-search-overlay",function(){
        $(".header-search-content-mobile").hide("slow");
        $(".btn-searh-wrapper-mobile").css("float","right");
        $(".header-search-wrapper-mobile").css("border-bottom","none");
        $(".header-search-overlay-mobile").css("display","none");
        $(".header-search-overlay-mobile").css("z-index","-1");
    });


});
    
