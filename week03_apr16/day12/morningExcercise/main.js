
// - Target all input fields on the html page with/out using querySelectorAll() and change their border color to red


// using ID and selecting one
// let myInput = document.querySelector('#input-important')

// myInput.style.borderColor = 'red';


// using type 'input' and selecting multiple
let allInput = document.querySelectorAll('input');

for (i = 0; i < allInput.length; i++) {
	allInput[i].style.borderColor = 'red';
}

// - when the 'do something' button is clicked, change the color of both boxes to green.

let myButton = document.querySelector('#submit-button');

let myDivs = document.querySelectorAll('div');

// - when the 'do something' button is clicked, change the text each 'This is a random span' span to 'you are a JS ninja'

let myText = document.querySelectorAll('span.nycda-class');

myButton.addEventListener('click',function() {
	
	for (i = 0; i < myDivs.length; i++) {
		myDivs[i].style.backgroundColor = 'green'
	}

	for (i = 0; i < myText.length; i++) {
		myText[i].innerText = 'You are a JS ninja';
	}
})
