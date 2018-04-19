'use strict';

$(document).ready(function(){
	// toggles classes on menu icon 
	animateIcon();
})


//hamburger menu animation
function animateIcon() {
	$('.animated-icon').click(function(){
	    $(this).toggleClass('open');
	    $('#collapsableNavBar').toggleClass('collapse');
	});
}


// original code using jQuery

// contact button & alert
function contactButtonNotify() {
	$('#contactForm').submit(function(e) {
		var userName = $('#userName').val();
		alert(`Thank you for your message, ${userName}. Someone will get back to you within 1-2 business days. `);
		$('#contactForm').hide();
		$('#messageConfirmation').show();
		return false;
	});
}

// join us alert & redirect to #contact
function joinButtonNotify() {
	$('#joinButton').click(function(e) {
		alert('Thank you for your interest! Please send us a message and we will get back to you shortly');
	});
}

// // email subscribe button & alert
function subscribeButton() {
	$('#emailForm').submit(function(e) {
		$('#subscribeButton').removeClass('btn-outline-secondary')
		.addClass('btn-success')
		.html('<i class="far fa-check-square"></i>');
		var userEmail = $('#emailInput').val();
		alert(`${userEmail} has been subscribed, thank you!`);
		return false;
		});
}