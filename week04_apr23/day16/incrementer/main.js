'use strict';

let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let number = document.querySelector('#number');

minus.addEventListener('click', function() {
	number.innerText = number.value--;
});

plus.addEventListener('click',function() {
	number.innerText = number.value++;
});

class Incrementor {
	constructor(num) {
		this.num = num;
	}
	plusOne() {
		number.innerText = number.value++;
	}
	minusOne() {
		number.innerText = number.value--;
	}
}

let myValue = new Incrementor(number);




// plus.addEventListener('click', function() {
// 	myValue.plusOne();	
// });

// minus.addEventListener('click', function() {
// 	myValue.minusOne();
// });

// class Increm {
// 	constructor(num) {
// 		this.num = num;
// 	}
// 	plusOne() {
// 		this.num++;
// 	}
// 	minusOne() {
// 		this.num--;
// 	}
// }

// let myIncrementor = new Increm(0);

// plus.addEventListener('click', function() {
// 	myIncrementor.plusOne();
// 	number.innerText = myIncrementor.value;
// });

// minus.addEventListener('click', function() {
// 	myIncrementor.minusOne();
// 	number.innerText = myIncrementor.value;
// });
