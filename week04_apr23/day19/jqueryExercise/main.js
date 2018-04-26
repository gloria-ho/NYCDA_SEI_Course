$(document).ready(function() {
	console.log('test');

	let myDiv = $('#myId')

	myDiv.css({background: 'silver', color: 'lightblue'});
	myDiv.addClass('myClass');
	myDiv.html('<h1>Hello World!');

	let myDiv2 = $('.myNewClass')

	myDiv2.css({background: 'lightblue', color: 'silver'});
	myDiv2.addClass('myClass');
	myDiv2.html('<h1>Hello World!');


	console.log(myDiv.length);
	console.log(myDiv[0]);
	console.log(myDiv);

});

