'use strict';

let minusButton = document.querySelector('#minus');
let plusButton = document.querySelector('#plus');
let number = document.querySelector('#number');

class Incrementer {
	constructor(value) {
		this.value = value;
	}
	increment() {
		this.value++;
	}
	decrement() {
		this.value--;
	}
}

let myIncrementer = new Incrementer(0);

plusButton.addEventListener('click', function() {
	myIncrementer.increment();
	number.innerText = myIncrementer.value;
});

minusButton.addEventListener('click', function() {
	myIncrementer.decrement();
	number.innerText = myIncrementer.value;
});


/*
class Incrementer {
    constructor(value) {
        this.value = value;
    }

    increment() {
        this.value++;
    }

    decrement() {
        this.value--;
    }
}

let incrButton = document.querySelector('#incr-button');
let decrButton = document.querySelector('#decr-button');
let valueElem = document.querySelector('#value');

let myIncrementer = new Incrementer(0);

incrButton.addEventListener('click', function() {
    myIncrementer.increment();
    valueElem.innerText = myIncrementer.value;
});

decrButton.addEventListener('click', function() {
    myIncrementer.decrement();
    valueElem.innerText = myIncrementer.value;
})
*/
