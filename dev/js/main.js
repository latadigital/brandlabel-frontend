$(document).ready(function() {
	$(window).scroll(function(){
		var winScroll = $(window).scrollTop();
		if(winScroll > 130) {
			$('.c-header').addClass('nav__fixed');
			$('body').css('padding-top', 130)
		}else{
			$('.c-header').removeClass('nav__fixed');
			$('body').css('padding-top', 0)
		}
	});

	$('a[href="/#!/goForm"]').click(function(e){
		$("html, body").animate({
			scrollTop: $('.c-contacto').offset().top
		}, 2000);		
		e.preventDefault();
	});
});

