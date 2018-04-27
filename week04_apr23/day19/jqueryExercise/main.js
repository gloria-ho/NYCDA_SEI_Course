$(document).ready(function() {
	console.log('test');

	let myDiv = $('#myId')

	myDiv.css({background: 'silver', color: 'lightblue'});
	myDiv.addClass('myClass');
	myDiv.html('<h1>Hello World!</h1>');

	let myDiv2 = $('.myNewClass')

	myDiv2.css({background: 'lightblue', color: 'silver'});
	myDiv2.addClass('myClass');
	myDiv2.html('<h2>Hello World Again!</h2>');

	let allMyDivs = $('div');

	allMyDivs.addClass('col-xs-12');



});

