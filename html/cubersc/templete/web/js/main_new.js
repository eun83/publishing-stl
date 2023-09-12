$(document).ready(function () {
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