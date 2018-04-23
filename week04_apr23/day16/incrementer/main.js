'use strict';

let minusButton = document.querySelector('#minus');
let plusButton = document.querySelector('#plus');
let number = document.querySelector('#number');

class Incrementor {
	constructor(num) {
		this.num = num;
	}
	minusOne() {
		// number.innerText = number.value--
		this.num--;
	}
	plusOne() {
		// number.innerText = number.value
		this.num++;
	}
}

let myValue = new Incrementor(10);

console.log(myValue.value);

minusButton.addEventListener('click', function() {
	myValue.minusOne();
	number.innerText = myValue.value;
});

plusButton.addEventListener('click',function() {
	myValue.plusOne();
	number.innerText = myValue.value;
});



// class Incrementor {
// 	constructor(value) {
// 		this.value = value;
// 	}
// 	increment() {
// 		this.value++;
// 	}
// 	decrement() {
// 		this.value--;
// 	}
// }

// let myIncrementor = new Incrementor(0);

// plusButton.addEventListener('click', function() {
// 	myIncrementor.increment();
// 	number.innerText = myIncrementor.value;
// });

// minusButton.addEventListener('click', function() {
// 	myIncrementor.decrement();
// 	number.innerText = myIncrementor.value;
// });
