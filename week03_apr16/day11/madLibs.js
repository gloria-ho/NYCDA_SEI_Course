let myInput1 = document.querySelector('#myAdj1');
let myTarget1 = document.querySelectorAll('.adjective1');

let myInput2 = document.querySelector('#myAdj2');
let myTarget2 = document.querySelectorAll('.adjective2');

let myInput3 = document.querySelector('#mySub');
let myTarget3 = document.querySelectorAll('.subject');


let submit = document.querySelector('#submit');
let content = document.querySelector('#content');

submit.addEventListener('click', function() {
	content.style.display = 'block';

	for (i = 0; i < myTarget1.length; i++) {
		myTarget1[i].innerHTML = myInput1.value;
	}

	for (i = 0; i < myTarget2.length; i++) {
		myTarget2[i].innerHTML = myInput2.value;
	}

	for (i = 0; i < myTarget3.length; i++) {
		myTarget3[i].innerHTML = myInput3.value;
	}

});