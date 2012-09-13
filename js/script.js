
$('#reference').on('hover', function(event) {
	$('#contact-me').fadeIn(500);
	$('#contact-me').on({
		mouseeneter: function(event) {
			$('#contact-me').css('display','block');
		},
		mouseleave: function(event) {
			$('#contact-me').fadeOut(300);
		}
	});
	$('#contact-me').fadeOut(300);
});




