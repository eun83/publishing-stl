$(document).ready(function() {
	/*fullpage*/ 
	$('#fullpage').fullpage({		
		anchors: ['main-section_1', 'main-section_2'],
		menu: '#menu',
		responsiveWidth: 1280,
		//접근성
		keyboardScrolling: true,    // 키보드 스크롤 사용
		animateAnchor:true,	
		//autoScrolling:false
	});
	//전체카테고리 클릭시 스크롤 방지
	$('.btn-allmenu').on('click',function(){
		$.fn.fullpage.setMouseWheelScrolling(false);
		$.fn.fullpage.setAllowScrolling(false);
	});
	$('.allclose').on('click',function(){
		$.fn.fullpage.setMouseWheelScrolling(true);
		$.fn.fullpage.setAllowScrolling(true);
	});
	$('.fp-tableCell .visual_text_wrap .main-cont ul').slick({
		slidesToShow: 4,
		arrows: true,
		dots: false,	
		slidesToScroll: 1,
		responsive: [
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 2,
						rows: 2,
						slidesToScroll : 1
						
					}
				}
		]
	});
});
