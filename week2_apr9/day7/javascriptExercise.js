// Exercise #1
alert('Hello World from .jS');

// Exercise #2
const name = 'Gloria';
let myAge = '31';

// via console.log
console.log(`My name is ${name} and I am ${myAge} years old.`);

// via calling a function
function printMyInfo() {
	const name = 'Gloria';
	let myAge = '31';
	console.log(`My name is ${name} and I am ${myAge} years old.`);
}

// Exercise #3
let mathOne = 20;
let mathTwo = 3;

function exer3() {
	console.log(mathSum = mathOne + mathTwo);
	console.log(mathProduct = mathOne * mathTwo);
}

// Exercise #4

//via console.log
let classmates = ['Q', 'Al', 'Eddie', 'Iryna', 'Sharron'];
console.log(classmates[3]);

let multiDim = [
	['hello','goodbye','food'],
	['something','else','here'],
	['beans','fruit','veggies']
];
console.log(multiDim[2][0]);

//via calling a function
function exer4() {
	let classmates = ['Q', 'Al', 'Eddie', 'Iryna', 'Sharron'];
	console.log(classmates[3]);
	let multiDim = [
		['hello','goodbye','food'],
		['something','else','here'],
		['beans','fruit','veggies']
	];
	console.log(multiDim[2][0]);
}

// Exercise #5

let name5 = {
	name: 'Gloria',
	eyeColor: 'blue'
}
name5.eyeColor = 'brown';
name5.hairColor = 'blonde';
console.log(name5);

let movies = {
	topMovieOne: 'Monsters, Inc.',
	topMovieTwo: 'Up',
	topMovieThree: 'Toy Story'
}
console.log(`My favorite movies are ${movies.topMovieOne} and ${movies.topMovieTwo}, but I really enjoy ${movies.topMovieThree}`);


// Exercise #Bonus
let plus = '+'
function pyramid(count) {
	while (count > 0) {
		console.log(plus.repeat(count));
		count --;
	}
}





