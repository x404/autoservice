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


	var thank = '<div class="thank text-center"><p>Ваше сообщение успешно отправлено</p></div>';
	var thank2 = '<div class="thank text-center"><p>Ваша заявка успешно отправлена</p><button type="button" class="close" data-dismiss="modal" aria-label="Закрыть" tabindex="5"></button></div>';
	var errorTxt = 'Возникла ошибка при отправке заявки!';
	var sending = '<div class="sending">Идет отправка ...</div>'


	// форма обратной 
	$('#feedback-form').validate({
		submitHandler: function(form){
			let strSubmit = $(form).serialize();
			$(form).find('fieldset').hide();
			$(form).append(sending);

			$.ajax({
				type: "POST",
				// url: $(form).attr('action'),
				url: '/feedback.ajax.php',
				data: strSubmit,
				success: function(){
					$(form).addClass('send');
					$(form).find('.sending').remove();
					$(form).append(thank);
					startClock('feedback-form');
				},
				error: function(){
					alert(errorTxt);
					$(form).find('fieldset').show();
					$('.sending').remove();
				}
			})
			.fail(function(error){
				alert(errorTxt);
			});
		}
	});


});



$('body').on('click','[data-coord]', function(e) {
	e.preventDefault();
	var $this = $(this).data('coord').split(','),
		lat = $this[0],
		lon = $this[1];
	map.setCenter([lat, lon], 16);
});


$(function(){
	$('.policy input').click(function(){
		var $this = $(this),
			$submit = $this.closest('.form-policy');

		if ($this.is(':checked')){
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').removeAttr('disabled');
		} else {
			$submit.addClass('disabled');
			$submit.find('.input, .form-control, .submit, textarea, input[type=radio]').attr('disabled', true);
		}
	})
});



function stopClock(){
	window.clearInterval(timer);
	timer = null;
	sec = 5;
}

function startClock(form){
	if (!timer)
	timer = window.setInterval("showTime('"+form+"')",1000);
}


var timer;
var sec = 5;

function showTime(form){
	sec = sec-1;
	if (sec <=0) {
		stopClock();
		if (form == 'feedback-form'){ // форма быстрого сообщения
			$('.thank').fadeOut('normal',function(){
				$('.feedback__form .thank').remove();
				$('.feedback__form .form-control, .feedback__form textarea').val('');
				$('.feedback__form fieldset').show();
			});
		};
	}
};


function recovery(){
	$('.thank').remove();
	$('.modal-vacancy .form-control').val('');
};
