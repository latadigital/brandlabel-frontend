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

	$('a[href="/!#/detalle"]').click(function(e){
		$('.c-ofertas__info').toggleClass('c-ofertas__info--tall');
		e.preventDefault();
	});

	$('.firstProduct').viewportChecker({
		classToAdd: 'visible',
		classToAddForFullView: 'full-visible',
		classToRemove: 'invisible',
		removeClassAfterAnimation: false,
		offset: 200,
		invertBottomOffset: true,
		repeat: false,
		callbackFunction: function (elem, action) {
			setTimeout(function(){
				$('.firstProduct').addClass('animated fadeIn');
			},100)
		},
		scrollHorizontal: false
	});	
	
	$('.firstSeparador').viewportChecker({
		classToAdd: 'visible',
		classToAddForFullView: 'full-visible',
		classToRemove: 'invisible',
		removeClassAfterAnimation: false,
		offset: 200,
		invertBottomOffset: true,
		repeat: false,
		callbackFunction: function (elem, action) {
			setTimeout(function () {
				$('.firstSeparador').addClass('animated fadeIn');
			}, 100)
		},
		scrollHorizontal: false
	});	

	$('.secondProduct').viewportChecker({
		classToAdd: 'visible',
		classToAddForFullView: 'full-visible',
		classToRemove: 'invisible',
		removeClassAfterAnimation: false,
		offset: 200,
		invertBottomOffset: true,
		repeat: false,
		callbackFunction: function (elem, action) {
			setTimeout(function(){
				$('.secondProduct').addClass('animated fadeIn');
			},100)
		},
		scrollHorizontal: false
	});	
	
	$('.secondSeparador').viewportChecker({
		classToAdd: 'visible',
		classToAddForFullView: 'full-visible',
		classToRemove: 'invisible',
		removeClassAfterAnimation: false,
		offset: 200,
		invertBottomOffset: true,
		repeat: false,
		callbackFunction: function (elem, action) {
			setTimeout(function () {
				$('.secondSeparador').addClass('animated fadeIn');
			}, 100)
		},
		scrollHorizontal: false
	});
		
	$('.thirdProduct').viewportChecker({
		classToAdd: 'visible',
		classToAddForFullView: 'full-visible',
		classToRemove: 'invisible',
		removeClassAfterAnimation: false,
		offset: 200,
		invertBottomOffset: true,
		repeat: false,
		callbackFunction: function (elem, action) {
			setTimeout(function(){
				$('.thirdProduct').addClass('animated fadeIn');
			},100)
		},
		scrollHorizontal: false
	});	
	
	$('.owl-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: false,
		dots: true,
		items: 1,
	})	
});

