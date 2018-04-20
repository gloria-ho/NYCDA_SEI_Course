let sanity = document.querySelector('#sanity');

sanity.addEventListener('click', function() {
	console.log('hello');
})

let fName = document.querySelector('#fNameInput');
let lName = document.querySelector('#lNameInput');
let NameDisplay = document.querySelector('#nameDisplay');

fName.addEventListener('keyup', function() {
	NameDisplay.innerHTML = fName.value + ' ' + lName.value;
})

lName.addEventListener('keyup', function() {
	NameDisplay.innerHTML = fName.value + ' ' + lName.value;
})