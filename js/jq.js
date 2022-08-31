$(document) .ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__bottom-container') .toggleClass('active');   
	});
}); 