// hamburger animation jS
$(document).ready(function(){
    $('.animated-icon').click(function(){
        $(this).toggleClass('open');
        $('#collapsableNavBar').toggleClass('collapse');
    });
}); 

// subscribe me button jQuery script
'use strict';
$(document).ready(function() {

	$('#contactForm').submit(function(e) {
		$('#messageButton').removeClass('btn-outline-secondary')
			.addClass('btn-success')
			.html('<i class="far fa-check-square"></i>');
		var userName = $('#userName').val();
		alert(`Thank you for your message, ${userName}. Someone will get back to you within 1-2 business days. `);
		return false;
	});

	$('#emailForm').submit(function(e) {
		$('#subscribeButton').removeClass('btn-outline-secondary')
			.addClass('btn-success')
			.html('<i class="far fa-check-square"></i>');
		var userEmail = $('#emailInput').val();
		alert(`${userEmail} has been subscribed, thank you!`);
		return false;
	});
})