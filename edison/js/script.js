$(document).ready(function () {
	
	$('a.disabled').on('click', function (e) {
		e.preventDefault();
	});
			
	$('.main-slider').slick({
        slidesToShow: 1,
		infinite:false,
        slidesToScroll: 1, 
		dots: true,
    });
	
	$('.carousel-slider').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 1701,
			  settings: {
				slidesToShow:5
			  }
			},
			{
			  breakpoint: 1601,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
				breakpoint: 1450,
				settings: {
				  slidesToShow:4
				}
			},
			{
				breakpoint: 1121,
				settings: {
				  slidesToShow: 3
				}
			},
			{
				breakpoint: 851,
				settings: {
				  slidesToShow:2
				}
			},
			{
			  breakpoint: 651,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	
	$('.item-btn').click(function(e) {
		e.preventDefault();
		var target = $(this);
		target.toggleClass('active');
		$('.coupon-block').toggleClass('active');		
    });
	
	$('.reviews-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 1601,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	
	$('.news-slider').slick({
		slidesToShow:4,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 1401,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	$('.instagram-slider').slick({
		slidesToShow:8,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 1650,
			  settings: {
				slidesToShow: 7
			  }
			},
			{
			  breakpoint: 1401,
			  settings: {
				slidesToShow: 6
			  }
			},
			{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 5
				}
			},
			{
				breakpoint: 992,
				settings: {
				  slidesToShow: 4
				}
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 3
				}
			},
			{
			  breakpoint: 576,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	});

	$('.other-slider').slick({
		slidesToShow:4,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 1401,
			  settings: {
				slidesToShow: 3
			  }
			},
			{
			  breakpoint: 1200,
			  settings: {
				slidesToShow: 2
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	
	
	$('#scroller').click(function () {$('body,html').animate({scrollTop: 0}, 700); return false;});

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
				// $('.reviews-to-write').addClass('clear-position');
				$('.panel-product').removeClass('panel-show');
			} else {
				// $('.reviews-to-write').removeClass('clear-position');
				$('.panel-product').addClass('panel-show');
			}
		};
		
			
		window.addEventListener('scroll', function() {
			Visible(element);
		});
		Visible (element);
	}

	$('select').styler({
		selectSearch: true,
	});

	
	$('.filter-show').click(function(e) {
		e.preventDefault();
		$('.filter-block').addClass('active');
    });

	$('.filter-hidden').click(function(e) {
		e.preventDefault();
		$('.filter-block').removeClass('active');
    });
	
	const registrationOrder = document.querySelector('.registration-order'),
		individualBlock = document.getElementById('individual-block'),
		entitylBlock = document.getElementById('entity-block'),
		pickuplBlock = document.getElementById('pickup-block'),
		mailBlock = document.getElementById('mail-block'),
		addressBlock = document.getElementById('address-item');	
		
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
			if(targer.closest('#address-block')) {
				addressBlock.classList.remove('address-block-hidden');
			}
			if(targer.closest('#address-block__hidden')) {
				addressBlock.classList.add('address-block-hidden');
			}
		});
	}

	$('.slider-for').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
		vertical: true,
		adaptiveHeight:true,
		infinite:false,
		draggable:true,
        asNavFor: '.slider-nav', 
		
    });
    
    $('.slider-nav').slick({
        slidesToShow: 4,
		vertical: true,
		adaptiveHeight:true,
		infinite:false,
        slidesToScroll: 1,
        asNavFor: '.slider-for', 
		focusOnSelect: true
    });

	const blockSelect = document.querySelector('.basket-content__table'),
		body = document.querySelector('body'),
		collections = document.querySelectorAll('p[class="text"]');
		
	if (blockSelect) {
		body.addEventListener('click', (event)=> {
			const target = event.target.closest('.basket-count');
			
			if (event.target.matches('p[class="text"]')) {
				const blockTarget = target.querySelector('.text'),
					blockSelect = target.querySelector('.basket-count__select');
			
				blockSelect.classList.add('show-select');
				blockTarget.classList.add('active-text');	

				collections.forEach((e) => event.target != e ? e.parentNode.nextElementSibling.classList.remove('show-select') : true);
			} 

			if(!target) {
				collections.forEach((e) => e.classList.contains('active-text') ? e.classList.remove('active-text') : true);
				const targetBlock = document.querySelector('.show-select'),
					targetText = document.querySelector('.active-text');
				if (targetBlock) {
					targetBlock.classList.remove('show-select');
					// targetText.classList.remove('active-text');				
				}
			}

			if (event.target.closest('.basket-count__select')) {
				const targetText = event.target,
					  blockTarget = target.querySelector('.text'),
					  blockSelect = target.querySelector('.basket-count__select');
				if (targetText.closest('.more-count')) {
					blockSelect.style.width = 200 + 'px';		
					blockSelect.textContent = '';	
					
					const newDiv = document.createElement('div');
					newDiv.classList.add('basket-count__input');
					const p = document.createElement('p');
					p.textContent = 'Укажите количество';
					newDiv.append(p);
					const input = document.createElement('input');
					input.value = 10;
					newDiv.append(input);
					const button = document.createElement('button');
					button.classList.add('btn-to-value');
					button.textContent = 'Применить';
					newDiv.append(button);

					blockSelect.append(newDiv);

					const buttonTo = blockSelect.querySelector('.btn-to-value');
					buttonTo.addEventListener('click', (event)=> {
						const textValue = blockTarget.querySelector('.numeral');
						textValue.textContent = input.value;
						blockSelect.classList.toggle('show-select');
						blockTarget.classList.toggle('active-text');
					});

				} else if (targetText.closest('.num')) {
					blockTarget.querySelector('.numeral').textContent = targetText.textContent;					
					blockSelect.classList.remove('show-select');
					blockTarget.classList.remove('active-text');
				}
			}
		});
	}	

	
	$('#modal-quick-view').on('shown.bs.modal', function () {
		$('.quick-view-slider').slick({
			slidesToShow: 1,
			infinite:true,
			slidesToScroll: 1, 
			dots: true,
		});
	});

	$('.contact-slider').slick({
		slidesToShow:2,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	function slickInit() {
		$('.contact-slider').slick({
			slidesToShow:2,
			slidesToScroll: 1,
			infinite:false,
			dots: false,
			   responsive: [
				{
				  breakpoint: 768,
				  settings: {
					slidesToShow: 1
				  }
				}
			  ]
		});
	}

	$('a[data-toggle="tab"]').on("shown.bs.tab", function(e) {
		$(".contact-slider").slick("unslick");
			slickInit();
	});

	   
	$('.comparison-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite:true,
		asNavFor: '.comparison-for', 
		dots: false,
		   responsive: [
			{
			  breakpoint: 1850,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 1601,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
				breakpoint: 1121,
				settings: {
				  slidesToShow: 3
				}
			},
			{
				breakpoint: 851,
				settings: {
				  slidesToShow:2
				}
			},
			{
			  breakpoint: 651,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});

	$('.comparison-for').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		infinite:true,
		dots: false,
		draggable:true,
		asNavFor: '.comparison-nav',
		   responsive: [
			{
			  breakpoint: 1850,
			  settings: {
				slidesToShow: 5
			  }
			},
			{
			  breakpoint: 1601,
			  settings: {
				slidesToShow: 4
			  }
			},
			{
				breakpoint: 1121,
				settings: {
				  slidesToShow: 3
				}
			},
			{
				breakpoint: 851,
				settings: {
				  slidesToShow:2
				}
			},
			{
			  breakpoint: 651,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	
	// last js  
	
	$('.slider-image').slick({
		slidesToShow:1,
		slidesToScroll: 1,
		infinite:true,
		dots: true
	});
	
	(function ($) {
		$.fn.HvrSlider = function () {
		  return this.each(function () {
			var el = $(this);
			if (el.find('img').length > 1) {
			  var hvr = $('<div>', {
				class: 'hvr',
				append: [
				  $('<div>', {
					class: 'hvr__images',
					append: $('<div>', {
					  class: 'hvr__sectors',
					}),
				  }),
				  $('<div>', {
					class: 'hvr__dots',
				  }),
				],
				insertAfter: el,
				prepend: el,
			  });
			  var hvrImages = $('.hvr__images', hvr);
			  var hvrImage = $('img', hvr);
			  var hvrSectors = $('.hvr__sectors', hvr);
			  var hvrDots = $('.hvr__dots', hvr);
			  el.prependTo(hvrImages);
			  hvrImage.each(function () {
				hvrSectors.prepend('<div class="hvr__sector"></div>');
				hvrDots.append('<div class="hvr__dot"></div>');
			  });
			  $('.hvr__dot:first', hvrDots).addClass('hvr__dot--active');
			  var setActiveEl = function (el) {
				hvrImage.hide().eq(el.index()).show();
				$('.hvr__dot', hvrDots).removeClass('hvr__dot--active').eq(el.index()).addClass('hvr__dot--active');
			  };
			  $('.hvr__sector', hvrSectors).hover(function () {
				setActiveEl($(this));
			  });
			  hvrSectors.on('touchmove', function (e) {
				e.preventDefault();
				var position = e.originalEvent.changedTouches[0];
				var target = document.elementFromPoint(position.clientX, position.clientY);
				if ($(target).is('.hvr__sector')) {
				  setActiveEl($(target));
				}
			  });
			}
		  });
		};
	})(jQuery);

	$('.images-preview').HvrSlider();

	$('.show-city-list').click(function(e) {
		e.preventDefault();
		$('.hidden-city-list').toggleClass('active');
		$('#myTab').toggleClass('hidden');
    });

	$('.back-city').click(function(e) {
		e.preventDefault();
		$('.hidden-city-list').toggleClass('active');
		$('#myTab').toggleClass('hidden');
    });

	$('.close-block-basket').click(function(e) {
		e.preventDefault();
		$('.product-in-basket').fadeOut();
		$('body').removeClass('hidden');
    });

	// end last js  
		
	
	
	
	/* 14 05 */
	
	if (document.querySelector('.timework')) {
		$('.show-timework').click(function(e) {
			e.preventDefault();
			var target = $(this);
			target.toggleClass('active');
			$('.hidd-timework').toggleClass('active');
		});
	}	
	/* end 14 05 */

	$('#close-city-window').click(function(e) {
		e.preventDefault();		
		$('.city-window').fadeOut();
    });

	$('#show-city-window').click(function(e) {
		e.preventDefault();
		$('.city-window').fadeIn();
    });

	$('.catalog-menu__button').click(function(e) {
		e.preventDefault();
		var target = $(this);
		target.toggleClass('active');
		$('.catalog-menu__content').slideToggle();
	});
	
	$('.modal-block__close').click(function(e) {
		e.preventDefault();
		$('.search-block__hidden').fadeOut();
    });

	$('.search-image__buttom').click(function(e) {
		e.preventDefault();
		$('.search-block__hidden').fadeIn();
    });

	$('.show-loading').click(function(e) {
		e.preventDefault();
		$('.search-block__loading').fadeIn();
    });

	document.querySelector('body').addEventListener('click', e => {
		if(e.target.closest('.heart')) {
			const collections = document.querySelectorAll('.heart');
			collections.forEach(element => element.classList.remove('active'))
			e.target.classList.add('active');
		}
		if(e.target.closest('.photo-heart')) {
			e.target.classList.toggle('active');
		}
		if(e.target.closest('.all-filters')) {
			document.querySelector('.filter-block').classList.add('active');
			document.querySelector('body').classList.add('hidden');
		}
		if (document.querySelector('.filter-block')) {
			if(e.target.closest('.filter-hidden')) {
				document.querySelector('.filter-block').classList.remove('active');
				document.querySelector('body').classList.remove('hidden');
			}
			if(!e.target.closest('.filter-block') && !e.target.closest('.all-filters'))  {
				document.querySelector('.filter-block').classList.remove('active');
				document.querySelector('body').classList.remove('hidden');
			}
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
		if(e.target.closest('.category-fiter__block')) {
			e.preventDefault();
			const collections = document.querySelectorAll('.category-fiter__block');
			collections.forEach(element => element.classList.remove('active'));
			e.target.closest('.category-fiter__block').classList.add('active');
		}
		if(!e.target.closest('.category-fiter__block')) {
			const collections = document.querySelectorAll('.category-fiter__block');
			collections.forEach(element => element.classList.remove('active'));
		}
	});


	if (document.querySelector('.brands-content')) {
		const blockHeiht = () => {
			const collBrands = document.querySelectorAll('.brands-item__content');

			collBrands.forEach(element => {
				element.addEventListener("mouseenter", (e) => {
					const height = e.target.querySelector('.brands-item__text').clientHeight + e.target.clientHeight + 50;
					e.target.querySelector('.brands-item').style.height = `${height}px`
					e.target.style.zIndex = 55;
				});
				element.addEventListener("mouseleave", (e) => {
					const height = e.target.clientHeight;
					e.target.querySelector('.brands-item').style.height = `${height}px`
					e.target.style.zIndex = 5;
				});
			});
		};	
		
		if (window.innerWidth > 991) {
			blockHeiht();
		}

		window.addEventListener('resize', () => {
			if (window.innerWidth > 991) {
				blockHeiht();
			}
		});
	}

	$('.elements-gride').masonry();

});

$(window).scroll(function() {
	if ($(this).scrollTop() > 0){
		$('.slider-fixed').addClass("comparison-sticky");
		$('.comparison-text').addClass("comparison-text__fixed ");
	}
	else{
		$('.slider-fixed').removeClass("comparison-sticky");
		$('.comparison-text').removeClass("comparison-text__fixed ");
	}

	if ($(this).scrollTop() > 60){
		$('.header-fixed').addClass("fixed-top");
	} else {
		$('.header-fixed').removeClass("fixed-top");
	}

	// 04/02

	let fields = document.querySelectorAll('.field__file');
    Array.prototype.forEach.call(fields, function (input) {
      let label = input.nextElementSibling,
        labelVal = label.querySelector('.field__file-fake').innerText;
  
      input.addEventListener('change', function (e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
          countFiles = this.files.length;
  
        if (countFiles)
          label.querySelector('.field__file-fake').innerText = 'Выбрано файлов: ' + countFiles;
        else
          label.querySelector('.field__file-fake').innerText = labelVal;
      });
    });
	
	// 09 09
	$('.slider-promo').not('.slick-initialized').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [
			{
			  breakpoint: 992,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	
	$('.projects-slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite:false,
		dots: true,
	});
		

	// 15 02 2023

	$('.projects-text-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite:false,
		dots: false,
		   responsive: [			
			{
				breakpoint: 851,
				settings: {
				  slidesToShow:2
				}
			},
			{
			  breakpoint: 651,
			  settings: {
				slidesToShow: 1
			  }
			}
		  ]
	});
	

	
});

//scroll
try {
	$(document).ready(function () {
		$('.scroll-pane').jScrollPane({
			showArrows: false //показать стрелки
		});
	});
} catch (err) {}

//fixed
try {
	$(document).ready(function () {
		$('.left-block__content').jScrollPane({});
	});
} catch (err) {}


document.addEventListener('DOMContentLoaded', function () {
	if (document.querySelector('.timer__items')) {
		// конечная дата
		const deadline = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 01);
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



