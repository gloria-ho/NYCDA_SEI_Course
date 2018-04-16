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