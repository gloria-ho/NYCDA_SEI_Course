'use strict';

// join us alert & redirect
let joinButton = document.querySelector('#joinButton');
let joinUs = document.querySelector('#joinUs');

joinButton.addEventListener('click', function() {
	event.preventDefault();
	alert('Thank you for your interest! Please send us a message and we will get back to you shortly.');
	window.location.href = '#contact';
	return false;
})

// contact button
let contactButton = document.querySelector('#sendMessage');
let contactForm = document.querySelector('#contactForm');
let messageConfirm = document.querySelector('#messageConfirmation');

messageButton.addEventListener('click', function() {
	event.preventDefault();
	let userName = document.querySelector('#userName').value;
	alert(`Thank you for your message, ${userName}. Someone will get back to you within 1-2 business days.`);
	contactForm.style.display = 'none';
	messageConfirm.style.display = 'visible';
	return false;
})

// email button
let emailButton = document.querySelector('#subscribeButton');

emailButton.addEventListener('click', function() {
	event.preventDefault();
	let userEmail = document.querySelector('#emailInput').value;
	alert(`${userEmail} has been subscribed, thank you!`);
	return false;
})`