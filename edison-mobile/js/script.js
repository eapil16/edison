$(document).ready(function () {
	
	$('.btn.button.button-show').click(function(e) {
        if ($('.last-level:visible').length>0){
			$('.last-level:visible').hide();
			return;
		}
		if ($('.third-level:visible').length>0){
			$('.third-level:visible').hide();
			return;
		}
        if ($('.second-level:visible').length>0){
			$('.second-level:visible').hide();
			return;
		}		
    });	
	$('.main-menu__level').click(function(e) {
        $(e.target).closest('div').parent().hide();
	});
    $('.second-level__item').click(function(e) {
        $(e.target).closest('div').find('.third-level').show();
    });	
	$('.last-link').click(function(e) {
        $(e.target).closest('div').find('.last-level').show();
    });		
    $('.main-menu__item').click(function(e) {
		$('body').toggleClass('hidd');
		$(e.target).closest('div').find('.second-level').toggleClass('show');
    });
	$('.main-menu__item a.button-show').click(function(e) {
		e.preventDefault();
    });
	$('.main-menu__item a.link').click(function(e) {
		e.preventDefault();
    });

	const bthShowSearch = document.getElementById('show-menu'),
		bthCloseSearch = document.getElementById('close-search'),
		targetShowSearch = document.getElementById('sb-search');
	bthShowSearch.addEventListener('click', (event) => {
		targetShowSearch.classList.add('show-search');
	});
	bthCloseSearch.addEventListener('click', (event) => {
		targetShowSearch.classList.remove('show-search');
	});
	
	$('.main-slider').slick({
        slidesToShow: 1,
		infinite:true,
        slidesToScroll: 1, 
		dots: true,
    });
	
	$('select').styler({
		selectSearch: true,
	});

	$('.item-btn').click(function(e) {
		e.preventDefault();
		var target = $(this);
		target.toggleClass('active');
		$('.coupon-block').toggleClass('active');	
    });

	$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 700); return false;});
	
	$('.slider-for').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
		infinite:false,
		draggable:true,
        asNavFor: '.slider-nav', 
    });
    
    $('.slider-nav').slick({
        slidesToShow: 5,
		infinite:false,
        slidesToScroll: 1,
        asNavFor: '.slider-for', 
		focusOnSelect: true
	});
	
	$('.filter-show').click(function(e) {
		$('body').addClass('hidd');
		$('#fiter').addClass('show');
	});
	$('.close-filter').click(function(e) {
		$('body').removeClass('hidd');
		$('#fiter').removeClass('show');
	});
	
	$('.menu-toggle-cont').click(function () {
		if ($('.menucompany-toggle-cont').hasClass('menu-toggle-cont_active')){
			$('.fixed-menuccompany').hide(); 
			$('.menucompany-toggle-cont').removeClass('menu-toggle-cont_active'); 
		}
		if (!$(this).hasClass('menu-toggle-cont_active')) { 
		$(this).addClass('menu-toggle-cont_active'); 
		$('.fixed-menu').slideDown(); 
		$('body').addClass('hidd'); 
		} else { 
		$(this).removeClass('menu-toggle-cont_active'); 
		$('.fixed-menu').slideUp(300);
		$('body').removeClass('hidd');
		} 
	});

	
	var element = document.querySelector('#target');
	if (element) {
		var Visible = function (target) {
			var targetPosition = {
				top: window.pageYOffset + target.getBoundingClientRect().top,
				left: window.pageXOffset + target.getBoundingClientRect().left,
				right: window.pageXOffset + target.getBoundingClientRect().right,
				bottom: window.pageYOffset + target.getBoundingClientRect().bottom
				},
				windowPosition = {
				top: window.pageYOffset,
				left: window.pageXOffset,
				right: window.pageXOffset + document.documentElement.clientWidth,
				bottom: window.pageYOffset + document.documentElement.clientHeight
				};
		
			if (targetPosition.bottom > windowPosition.top && 
				targetPosition.top < windowPosition.bottom && 
				targetPosition.right > windowPosition.left &&
				targetPosition.left < windowPosition.right) { 
				$('.block-action__fixed').removeClass('action-to-show');
			} else {
				$('.block-action__fixed').addClass('action-to-show');
			}
			};
		
			
			window.addEventListener('scroll', function() {
				Visible(element);
			});
			Visible (element);
	}


	const body = document.querySelector('main');
	body.addEventListener('click', (event) => {
		const target = event.target.closest('.jq-selectbox');
		if (target) {
			const block = target.querySelector('.jq-selectbox__dropdown');
			block.classList.toggle('show-to-screen');
		}
				
	});
	
	body.addEventListener('click', (event) => {
		const target = event.target.closest('.select-block');
		if (target) {
			const block = target.querySelector('.jq-selectbox__dropdown');
			target.classList.toggle('to-index');
			block.classList.toggle('show-to-screen');
		}		
	});

	$('.reviews-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,	
		dots: false,
		infinite: false,
		speed: 500,
		fade: true,
		cssEase: 'linear' 
	});
	
	const registrationOrder = document.querySelector('.registration-order'),
		individualBlock = document.getElementById('individual-block'),
		entitylBlock = document.getElementById('entity-block'),
		pickuplBlock = document.getElementById('pickup-block'),
		mailBlock = document.getElementById('mail-block');		
	if (registrationOrder) {
		registrationOrder.addEventListener('click' , (event) => {
			const targer = event.target;
				if(targer.closest('#entity')) {
				individualBlock.classList.add('registration-none');
				entitylBlock.classList.add('registration-block');
				entitylBlock.classList.remove('registration-none');
			}
			if(targer.closest('#individual')) {
				individualBlock.classList.add('registration-block');
				individualBlock.classList.remove('registration-none');
				entitylBlock.classList.add('registration-none');
			}
			if(targer.closest('#pickup')) {
				pickuplBlock.classList.add('registration-block');
				pickuplBlock.classList.remove('registration-none');
				mailBlock.classList.add('registration-none');
			}
			if(targer.closest('#mail')) {
				mailBlock.classList.add('registration-block');
				mailBlock.classList.remove('registration-none');
				pickuplBlock.classList.add('registration-none');
			}
	
		});
	}
		
	$('.comparison-slider').slick({
        slidesToShow: 1,
		infinite:false,
        slidesToScroll: 1, 
		dots: false,
	});

	$('.comparison-slider__right').slick({
        slidesToShow: 1,
		infinite:false,
        slidesToScroll: 1, 
		dots: false,
	});
	
	var slider 		 = $('.comparison-slider');
		total        = slider.slick("getSlick").slideCount;
		currentSlide = $('.comparison-slider').slick('slickCurrentSlide');
		slide        = currentSlide + 1;
	if ( total > 1 ) {
		$(".sl-count__current").text(slide);
		$('.sl-count__total').text(total);
	}
	$(".comparison-slider").on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		$(".sl-count__current").text(currentSl);
	});

	var sliderRight 		 = $('.comparison-slider__right');
		total        = sliderRight.slick("getSlick").slideCount;
		currentSlide = $('.comparison-slider__right').slick('slickCurrentSlide');
		slide        = currentSlide + 1;
	if ( total > 1 ) {
		$(".sl-count__current__right").text(slide);
		$('.sl-count__total__right').text(total);
	}
	$(".comparison-slider__right").on('afterChange', function(event, slick, currentSlide, nextSlide){
		var currentSl = currentSlide + 1;
		$(".sl-count__current__right").text(currentSl);
	});
	
	$('.slider-image').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		infinite:true,
		dots: true
	});


	$('.slider-prod').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		infinite:true,
		dots: true
	});

	document.querySelector('body').addEventListener('click', e => {
		if(e.target.closest('.button-like')) {
			e.preventDefault();
			const collections = document.querySelectorAll('.image');
			collections.forEach(element => element.classList.remove('active'))
			e.target.closest('.image').classList.add('active');
		}
		if(e.target.closest('.photo-like')) {
			e.preventDefault();
			e.target.closest('.element-item').classList.toggle('active');
		}
		if(e.target.closest('.filter-list__show')) {
			e.preventDefault();
			$('body').addClass('body-hidd')
			e.target.closest('.category-list__item').classList.add('show');
		}
		if(e.target.closest('.filter-list__close')) {
			e.preventDefault();
			const collections = document.querySelectorAll('.category-list__item');
			collections.forEach(element => element.classList.remove('show'));
			$('body').removeClass('body-hidd');
		}
		if(e.target.closest('.close-cookie')) {
			e.preventDefault();
			$('.cookie').fadeOut();
		}
		if(e.target.closest('.prompt-icon')) {
			e.preventDefault();
			const collections = document.querySelectorAll('.prompt');
			collections.forEach(element => element.classList.remove('active'));
			e.target.closest('.prompt').classList.add('active');
		}
		if(!e.target.closest('.prompt-icon')) {
			const collections = document.querySelectorAll('.prompt');
			collections.forEach(element => element.classList.remove('active'));
		}
	});
	$('.elements-gride').masonry();


	$('.slider-promo').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite:false,
		dots: true,		   
	});

	$('.projects-slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite:false,
		dots: true,
	});
}); 

$(window).scroll(function() {
	if ($(this).scrollTop() > 0){
	$('.comparison-block__slider').addClass("comparison-sticky");
	$('.slider-count__content').addClass("count-sticky");
	}
	else{
	$('.comparison-block__slider').removeClass("comparison-sticky");
	$('.slider-count__content').removeClass("count-sticky");
	}
});

document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.timer__items')) {
		// конечная дата
		const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 2, 01);
		// id таймера
		let timerId = null;
		// склонение числительных
		function declensionNum(num, words) {
		return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
		}
		// вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
		function countdownTimer() {
		const diff = deadline - new Date();
		if (diff <= 0) {
			clearInterval(timerId);
		}
		const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
		const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
		const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
		const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
		$days.textContent = days < 10 ? '0' + days : days;
		$hours.textContent = hours < 10 ? '0' + hours : hours;
		$minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
		$seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
		$days.dataset.title = declensionNum(days, ['день', 'дня', 'дней']);
		$hours.dataset.title = declensionNum(hours, ['час', 'часа', 'часов']);
		$minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
		$seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
		}
		// получаем элементы, содержащие компоненты даты
		const $days = document.querySelector('.timer__days');
		const $hours = document.querySelector('.timer__hours');
		const $minutes = document.querySelector('.timer__minutes');
		const $seconds = document.querySelector('.timer__seconds');
		// вызываем функцию countdownTimer
		countdownTimer();
		// вызываем функцию countdownTimer каждую секунду
		timerId = setInterval(countdownTimer, 1000);
	}	
	
  });