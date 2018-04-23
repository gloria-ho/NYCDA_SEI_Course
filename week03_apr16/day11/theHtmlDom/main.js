console.log('hello world');



let myDiv = document.getElementById('intro');

console.log(myDiv);



myDiv.style.background = 'green';

let myContainers = document.getElementsByClassName('container');

console.log(myContainers);



for (i = 0; i < myContainers.length; i++) {
	myContainers[i].style.background = 'blue';
}


let myPElements = document.getElementsByTagName('p');


for (i = 0; i < myPElements.length; i++) {
	myPElements[i].style.background = 'purple';
}



// put your name inside the first div
// add your name in h1 in #intro2

let getIntro = document.getElementById('intro');

getIntro.textContent += 'Gloria';

// getIntro.innerText = '<h1>Gloria</h1>';
// will convert to text and ignore html

// let getIntro2 = document.getElementById('intro2');

// getIntro2.textContent += document.write('<h1>Gloria</h1');



let getIntro2 = document.querySelector('#intro2');

getIntro2.innerHTML = '<h1>Gloria</h1>';
// innerHTML changes the DOM



// myDiv.addEventListener('click', function() {
// 	alert('you clicked on the intro div');
// })
// on click: alert pops up

// hide div

// myDiv.addEventListener('click', function() {
//	myDiv.style.display = 'none';
//	myDiv.style.visibility = 'hidden';
// })

// to toggle:
	// if (myDiv.style.display === 'none') {
	// 	myDiv.style.display = 'block';
	// } else {
	// 	myDiv.style.display = 'none';
	// }



myDiv.addEventListener('click', function() {
	console.log(myEvent);
	myDiv.classList.add('hidden')
});

// listen for a keyup event, whatever is typed, place into h1 tag as typing, using myInput.value

let myInput = document.querySelector('#onType');

let myTarget = document.querySelector('#target');

myInput.addEventListener('keyup', function() {
	myTarget.innerHTML = myInput.value;
});

