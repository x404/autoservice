$(document).ready(function(){

	 $('a.fancybox').fancybox() 

	$('#home-carousel').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Назад"></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Вперед"></button>',
		autoplay: false,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		fade: true
		// cssEase: 'linear'
	});


	$('#articles-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button type="button" class="slick-prev slick-arrow" aria-label="Назад"><svg width="17" height="31"><line x1="17" y1="0" x2="0" y2="17" /><line x1="0" y1="15" x2="17" y2="31" /></svg></button>',
		nextArrow: '<button type="button" class="slick-next slick-arrow" aria-label="Вперед"><svg width="17" height="31"><line x1="0" y1="0" x2="17" y2="17" /><line x1="17" y1="15" x2="0" y2="31" /></svg></button>',
		responsive: [
		    {
		      breakpoint: 1399,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '90px'
		      }
		    },
		    {
		      breakpoint: 520,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '60px'
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '40px'
		      }
		    },
		    {
		      breakpoint: 390,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '20px'
		      }
		    },
		    {
		      breakpoint: 320,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '10px'
		      }
		    }
		  ]
	});


	$('#gallery-carousel').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '',
		nextArrow: '',
		responsive: [
		    {
		      breakpoint: 1399,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 991,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '90px'
		      }
		    },
		    {
		      breakpoint: 520,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '60px'
		      }
		    },
		    {
		      breakpoint: 450,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '40px'
		      }
		    },
		    {
		      breakpoint: 390,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '10px'
		      }
		    },
		    {
		      breakpoint: 0,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
				centerMode: true,
				centerPadding: '30px'
		      }
		    }
		  ]
	});	
	
	// mobile-menu
	$('#navbar').each(function(){
		var $this = $(this),
			$link = $('.navbar-toggle'),
			$close = $('.close-menu'),

			init = function(){
				$link.on('click', openMenu);
				$close.on('click', closeMenu);
			},
			openMenu = function(e){
				e.preventDefault();
				$('body').addClass('o-menu');

			},
			closeMenu = function(e){
				e.preventDefault();
				$('body').removeClass('o-menu');
			};
		init();
	});	

	$('#totop').click(function (){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		return false;
	});
});



$('body').on('click','[data-coord]', function(e) {
	e.preventDefault();
	var $this = $(this).data('coord').split(','),
		lat = $this[0],
		lon = $this[1];
	map.setCenter([lat, lon], 16);
	// $('.btn-active').removeClass('btn-active');
	// $(this).addClass('btn-active');
});