$(document).ready(function() {

	// touch :active solution provided by FighterJet on Stackoverflow

	$('body *').on('touchstart', function (){});

	// touch :active solution provided by FighterJet on Stackoverflow

	$('#mobileNav').hide();


	$('#navButton').on('click', function() {

		$('#mobileNav').toggle(300);

	});

	


});