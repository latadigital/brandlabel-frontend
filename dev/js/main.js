$(document).ready(function() {
	$(window).scroll(function(){
		var winScroll = $(window).scrollTop();
		if(winScroll > 51) {
			$('.c-header__main').addClass('nav__fixed');
		}else{
			$('.c-header__main').removeClass('nav__fixed');
		}
	});

	$('a[href="/#!/goForm"]').click(function(e){
		$("html, body").animate({
			scrollTop: $('.c-contacto').offset().top
		}, 2000);		
		e.preventDefault();
	});
});

