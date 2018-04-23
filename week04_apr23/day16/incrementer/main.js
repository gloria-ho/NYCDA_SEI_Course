'use strict';

let minusButton = document.querySelector('#minus');
let plusButton = document.querySelector('#plus');
let number = document.querySelector('#number');

class Incrementor {
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

let myIncrementor = new Incrementor(0);

plusButton.addEventListener('click', function() {
	myIncrementor.increment();
	number.innerText = myIncrementor.value;
});

minusButton.addEventListener('click', function() {
	myIncrementor.decrement();
	number.innerText = myIncrementor.value;
});


/*
class Incrementor {
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

let myIncrementor = new Incrementor(0);

incrButton.addEventListener('click', function() {
    myIncrementor.increment();
    valueElem.innerText = myIncrementor.value;
});

decrButton.addEventListener('click', function() {
    myIncrementor.decrement();
    valueElem.innerText = myIncrementor.value;
})
*/
