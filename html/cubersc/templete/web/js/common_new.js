$(document).ready(function () {
    
    // 어설픈 메뉴열기 ㅋㅋ
    $('.nav > .gnb_layout > li').click(function(){
        $('.nav > .gnb_layout > li').addClass('current');
        $('.nav > .gnb_layout').addClass('open');
    });

    $('.nav > .gnb_layout > li').click(function(){
        $('.nav > .gnb_layout > li').removeClass('current');
        $('.nav > .gnb_layout').removeClass('open');
    });
    // 위에꺼 고쳐주세요 ㅠㅠ 스크립트 안넣으니 태블릿에서 메뉴가 안열림




    $('.btn_all_menu_open').click(function(){
        $('.all_menu').addClass('active');
        $('body').css("overflow","hidden");
    });

    $('.btn_all_menu_close').click(function(){
        $('.all_menu').removeClass('active');
        $('body').css("overflow","");
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
        if($('.all_menu > .gnb_layout > li').eq(idx).hasClass('current') == false &&
        idx !== $('.all_menu > .gnb_layout > li').length - 1){
            $('.all_menu > .gnb_layout > li').removeClass('current')
            $('.all_menu > .gnb_layout > li').eq(idx).addClass('current')
        }else{
            $('.all_menu > .gnb_layout > li').eq(idx).removeClass('current')
        }
    });
});