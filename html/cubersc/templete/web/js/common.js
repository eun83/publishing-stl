/*$(document).on('ready', function() {*/
$(document).ready(function() {
    // slick-slider
    $('.slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
    });


	//메인하단 사이트링크 슬라이드
	var $ft_banner = $('.site_list');
	var $ft_control = $('.footer-wrap .slick-control');

	//슬라이드가 하나일 때, 재생/정지 버튼 삭제
	$ft_banner.on('init', function(event, slick, currentSlide) {
		currentSlide = (currentSlide ? currentSlide : 0) + 1;
		if(slick.options.slidesToShow >= slick.slideCount) {
			$ft_control.addClass('hide');
		}
	});

	$ft_banner.slick({
		autoplay:true,
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplaySpeed:2000,
		prevArrow: $ft_control.find('.slick-prev'),
		nextArrow: $ft_control.find('.slick-next'),
		responsive:[
			{
			  breakpoint: 1400,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			}
		]
	});
	//재생정지버튼
	$ft_control.find(".slick-pause").click(function(){
		$ft_banner.slick('slickPause');

		$(this).hide();
		$ft_control.find(".slick-play").show();
	});
	$ft_control.find(".slick-play").click(function(){
		$ft_banner.slick('slickPlay');

		$(this).hide();
		$ft_control.find(".slick-pause").show();
	});

	//PC gnb
	$('.gnb_depth1 > li').hover(function(){
        $(this).addClass("on");
    }, function() {
        $(this).removeClass("on");
    });
	/*$('.gnb_depth1').hover(function(){
		$(".gnb_depth2").stop().fadeIn();
		$(".gnb_wrap .bg").stop().fadeIn();
    }, function() {
		$(".gnb_depth2").fadeOut();
		$(".gnb_wrap .bg").fadeOut();
    });*/
	$(".gnb_depth1 > li span").on("mouseenter",function(){
		$(".gnb_depth2").stop().fadeIn();
		$(".gnb_wrap .bg").stop().fadeIn();
	});
	$(".gnb_depth1").on("mouseleave",function(){
		$(".gnb_depth2").fadeOut();
		$(".gnb_wrap .bg").fadeOut();
	});
	/*전체메뉴열기 모바일 버튼*/
	$('.hmbrgr').hmbrgr({
		width     : 24,
		height    : 24,
		barHeight : 3,
		barRadius : 10,
		barColor  : '#e06d71'
	});
	$(".mypage .btn-maypage").on('click',function(){
		if($(this).closest('li').hasClass('act')){
			$(this).closest('li').removeClass('act');
			$(this).siblings('.my_2dep').fadeOut();
		}else{
			$(this).closest('li').addClass('act');
			$(this).siblings('.my_2dep').fadeIn();
		}
	});

	$(".all_2depth > li").addClass("depth2_cate");
	$(".all_2depth > div > li").addClass("depth2_cate");

	//gnb 포커스
	$(".gnb_depth1 > li > a").on('focus',function(e){
		$('.gnb_depth2').fadeIn(200);
		//$(".gnb_depth2_item").not($(this).next()).fadeOut(200);
	});
	$(".btn-search").on('focus',function(e){
		$('.gnb_depth2').fadeOut(200);
	});


	/* PC 상단 검색창 버튼*/
	/*$(".util_wrap > li:first-child button").on("click", function(){
		if($(this).hasClass('searchclose')){
			$(this).removeClass('searchclose');
			$(this).addClass('btn-search');
			$(".search_wrap").fadeOut(200);
			$(".header_bottom").removeClass('act');
		}else {
			$(this).addClass('searchclose');
			$(this).removeClass('btn-search');
			$(".search_wrap").fadeIn(200);
			$(".header_bottom").addClass('act');
		}
	}); */

	$(".btn-search").on("click",function(){
		$(".search_wrap").fadeIn();
	});
	$(".sch_closebtn").on("click",function(){
		$(".search_wrap").fadeOut();
	});


	/*PC전체 메뉴*/
	$(".btn-allmenu").on("click",function(e){
		e.preventDefault();
		$(".allmenu_Wrap").fadeIn(600);
		//스크롤막기
		//$('html').on('scroll touchmove mousewheel', function(event) {
		//event.preventDefault();
		//event.stopPropagation();
		//return false;
		//});
	});
	$(".allclose").on("click",function(e){
		e.preventDefault();
		$(".allmenu_Wrap").fadeOut(200);
		//스크롤풀기
		//$('html').off('scroll touchmove mousewheel');
	});
	/*mobile 전체 메뉴*/
	$(".btn-allmenu_m").on("click",function(){
		if($(this).hasClass('act')) {
			$(".allmenu_Wrap.m_allmenu_Wrap").slideUp(200);
			$(this).removeClass('act')
			$('body').css("overflow","initial");
			//스크롤풀기
			//$('body').off('scroll touchmove mousewheel');
		}else{
			$(".allmenu_Wrap.m_allmenu_Wrap").slideDown(200);
			$(this).addClass('act')
			$('body').css("overflow","hidden");
			//스크롤막기
			//$('body').on('scroll touchmove mousewheel', function(event) {
			//event.preventDefault();
			//event.stopPropagation();
			//return false;
			//});
		}
	});
	if($(window).width() <= 1024){
		$(".allmenu_Wrap").addClass('m_allmenu_Wrap')
	}else {
		$(".allmenu_Wrap").removeClass('m_allmenu_Wrap')
	}
	$(window).resize(function(){
		if($(window).width() <= 1024){
			$(".allmenu_Wrap").addClass('m_allmenu_Wrap')
		}else {
			$(".allmenu_Wrap").removeClass('m_allmenu_Wrap')
		}
	});$(window).resize();

	$(".m_allmenu_Wrap .all_1depth > li span").on("click",function(){
		if($(this).hasClass('on')){
			$(this).removeClass('on');
			$(this).next(".all_2depth").slideUp();
		}else{
			$(".all_1depth > li span").removeClass("on");
			$(this).addClass('on');
			$(".all_1depth > li span").not($(this)).next(".all_2depth").slideUp();
			$(this).next(".all_2depth").slideDown();
		}
	});

	/*$(".all_1depth > li span").on("click",function(){
		$(".all_2depth").slideUp();;
		$(this).next(".all_2depth").slideDown();
		$(".all_1depth > li").removeClass("on");
		$(this).parent("li").addClass("on");
		return false;
	});	*/
	/*$(".all_2depth .depth2_cate.cate_arrow").on('click',function(){
	  if($(this).hasClass('on')){
		$(this).removeClass('on');
		$(this).find(".all_3depth").slideUp();
	  }else{
		$(".all_2depth .depth2_cate.cate_arrow").removeClass("on");
		$(".all_2depth .depth2_cate.cate_arrow").find(".all_3depth").slideUp();
		$(this).addClass('on');
		$(this).find(".all_3depth").slideDown();
	  }
	});	*/

});



$(function(){
	/*var max_h=0;
	   $(".gnb_depth2").each(function(){
		var h = parseInt($(this).css("height"));
		if(max_h<h){ max_h = h; }
	   });
	   $(".gnb_depth2").each(function(){
		$(this).css({minHeight:max_h});
		$(".gnb_wrap .bg").css({minHeight:max_h+1});
	   });
	$(window).resize(function(){
		var max_h=0;
	   $(".gnb_depth2").each(function(){
		var h = parseInt($(this).css("height"));
		if(max_h<h){ max_h = h; }
	   });
	   $(".gnb_depth2").each(function(){
		$(this).css({minHeight:max_h});
		$(".gnb_wrap .bg").css({minHeight:max_h+1});
	   });
	});$(window).resize();*/
	/* 헤더 클래스 추가*/
	if($(window).width() <= 768){
		$(".header_bottom").addClass("m_bottom");
	} else {
		$(".header_bottom").removeClass("m_bottom");
	}

});

$(document).ready(function(){
		layerclose();
		layerclose_type2();
		layerclose_type3();
	});
	function layerclose(){
		$('.layerPopup .btn_pop-close, .layerPopup_type02 .btn_pop-close').click(function(){
			$(this).closest('.layerPopup, .layerPopup_type02').hide();
			$("body").removeClass('modal');
		})
	}
	function layerclose_type2(){
		$('.layerPopup .btn_close, .layerPopup_type02 .btn_close').click(function(){
			$(this).closest('.layerPopup, .layerPopup_type02').hide();
			$("body").removeClass('modal');
		})
	}
	function layerclose_type3(){
		$('.layerPopup .deemed').click(function(){
			$(this).closest('.layerPopup').hide();
			$("body").removeClass('modal');
		})
	}


$(function(){

    $(".all_2depth > li").addClass("depth2_cate");
	$(".all_2depth > div > li").addClass("depth2_cate");
	//다크모드
	$("#darkbtn").on("click", function(){
		$("body").addClass("dark");
		$(this).css("display","none");
		$("#normalbtn").css("display","block");
	})
	$("#normalbtn").on("click", function(){
		$("body").addClass("normalmode");
		$("body").removeClass("dark");
		$(this).css("display","none");
		$("#darkbtn").css("display","block");
	})
	//gnb 포커스
	$(".gnb_depth1_item > a").on('focus',function(e){
		$(this).next('.gnb_depth2_item').fadeIn(200);
		$(".gnb_depth2_item").not($(this).next()).fadeOut(200);
	});
	$(".btn-search").on('focus',function(e){
		$('.gnb_depth2_item').fadeOut(200);
	});
});