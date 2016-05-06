$(document).ready(function() {

	// touch :active solution provided by FighterJet on Stackoverflow

	$('body *').on('touchstart', function (){});

	// touch :active solution provided by FighterJet on Stackoverflow

	$('#mobileNav').hide();


	$('#navButton').on('click', function() {

		$('#mobileNav').slideToggle(200);



	});

	var click = $('#boxes')

	// click card 

	click.on('click', function () {



	})

	// slide in hidden div when click card



	// hide div once again with back button

	// smooth scroll

	$(function() {

		// sets duration

		smoothScroll(800);


	});


	function smoothScroll (duration) {

		// find target element

		$('a[href^="#"]').on('click', function(event) {

			// targets href attr

			var target = $( $(this).attr('href') );

			if( target.length ) {
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
			}, duration);
			}

		});
	};

	// animations

	$(window).scroll(function() {
		$('.imgContainer').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+400) {
				$(this).addClass("fadeIn");
			}
		});
	});



});