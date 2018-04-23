'use strict';

let minus = document.querySelector('#minus');
let plus = document.querySelector('#plus');
let number = document.querySelector('#number');

// minus.addEventListener('click', function() {
// 	number.innerText = number.value--;
// });

// plus.addEventListener('click',function() {
// 	number.innerText = number.value++;
// });

class Incrementer {
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

plus.addEventListener('click', function() {
	x.plusOne();	
});

minus.addEventListener('click', function() {
	x.minusOne();
});

let x = new Incrementer(number);
