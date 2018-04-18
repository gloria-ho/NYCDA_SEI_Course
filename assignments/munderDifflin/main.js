'use strict';


//hamburger menu animation jS
$(document).ready(function(){
    $('.animated-icon').click(function(){
        $(this).toggleClass('open');
        $('#collapsableNavBar').toggleClass('collapse');
    });
})


// message & subscribe button
$(document).ready(function() {

	// join us alert & redirect to contact
	// $('#joinButton').click(function(e) {
	// 	alert('Thank you for your interest! Please send us a message and we will get back to you shortly');
	// })
	
	// contact button & alert
	$('#contactForm').submit(function(e) {
		$('#messageButton').removeClass('btn-outline-secondary')
			.addClass('btn-success')
			.html('<i class="far fa-check-square"></i>');
		var userName = $('#userName').val();
		alert(`Thank you for your message, ${userName}. Someone will get back to you within 1-2 business days. `);
		$('#contactForm').hide();
		$('#messageConfirmation').show();
		return false;
	});

	// email subscribe button & alert
	$('#emailForm').submit(function(e) {
		$('#subscribeButton').removeClass('btn-outline-secondary')
		.addClass('btn-success')
		.html('<i class="far fa-check-square"></i>');
		var userEmail = $('#emailInput').val();
		alert(`${userEmail} has been subscribed, thank you!`);
		return false;
	});

})

// join us alert & redirect in jS
let joinButton = document.querySelector('#joinButton');
let joinUs = document.querySelector('#joinUs');

joinButton.addEventListener('click', function() {
	event.preventDefault();
	alert('Thank you for your interest! Please send us a message and we will get back to you shortly.');
	window.location.href = '#contact';
	return false;
})

// email button in jS * TO DO: change #subscribeButton type = "button"

// let emailButton = document.querySelector('#subscribeButton');

// emailButton.addEventListener('click', function() {
// 	event.preventDefault();
// 	let userEmail = document.querySelector('#emailInput').value;
// 	alert(`${userEmail} has been subscribed, thank you!`);
// 	return false;
// })