$(document).ready(function () {
    
    $('.btn_all_menu_open').click(function(){
        $('.all_menu').addClass('active');
    });

    $('.btn_all_menu_close').click(function(){
        $('.all_menu').removeClass('active');
    });

    $('.btn_top_search_open').click(function(){
        $('.search_wrap').addClass('active');
    });

    $('.btn_top_search_close').click(function(){
        $('.search_wrap').removeClass('active');
    });

    $('#gnb > ul > li').mouseenter(function(){
        $('.search_wrap').hide().removeClass('active').show();
    });
    
    $('.all_menu > .gnb_layout > li').click(function (e) {
        let idx = $(this).index();
        if($('.all_menu > .gnb_layout > li').eq(idx).hasClass('current') == false){
            $('.all_menu > .gnb_layout > li').removeClass('current')
            $('.all_menu > .gnb_layout > li').eq(idx).addClass('current')
        }else{
            $('.all_menu > .gnb_layout > li').eq(idx).removeClass('current')
        }
    });
});