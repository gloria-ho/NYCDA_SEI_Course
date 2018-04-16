let myInput1 = document.querySelector('#myAdj1');
let myTarget1 = document.querySelector('.adjective1');

let myInput2 = document.querySelector('#myAdj2');
let myTarget2 = document.querySelectorAll('.adjective2');

let myInput3 = document.querySelector('#mySub');
let myTarget3 = document.querySelector('.subject');


let submit = document.querySelector('#submit');

let content = document.querySelector('#content');

console.log(myInput2);
console.log(myTarget2);


submit.addEventListener('click', function() {
	content.style.display = 'block';

	myTarget1.innerHTML = myInput1.value;

	for (i = 0; i < myTarget2.length; i++) {
		myTarget2[i].innerHTML = myInput2.value;
	}

	myTarget3.innerHTML = myInput3.value;
});