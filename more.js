$(function() {
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');
		} else {
			$(".top").addClass('on');
		};

	})
	jQuery(".banner").slide({ titCell:".hd ul", mainCell:".bd ul", effect:"fold",  autoPlay:true, autoPage:true, trigger:"click" });

	$('.searchbtn').click(function(){
		$('.searchbox').stop().fadeToggle()
	})

	



})