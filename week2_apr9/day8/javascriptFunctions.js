/* Javascript Functions
————-DO THIS BEFORE WE GO BACK INTO CALLBACKS—————-
define an array of names, and use .map to return a new array with each element being `Hello $ {name}`
*/
let names = ['Gloria', 'Al', 'Q', 'Eddie'];
names.map(name => `Hello ${name}`);

/*
Function with no arguments
Declare a function called bestTeacher that takes no arguments and logs to the console “{Your Teacher} is the best teacher in the world” to the console. ;)
*/
function bestTeacher() {
	let yourTeacher = 'Name';
	console.log(`${yourTeacher} is the best teacher in the world`);
}

/*
NYCDA needs a simple welcome program for registered students.
Create a function called nycdaWelcome that will take in a student's name as a function argument and console log a string that looks like : “Welcome to NYCDA {Students Name}. Enjoy your stay”
*/
function nycdaWelcome(name) {
	console.log(`Welcome to NYCDA ${name}. Enjoy your stay`);
}

/*
Declare a function called magicDoor that receives an input of 1, 2 or 3. Depending upon which virtual "door" was entered create logic that will tell user they've received a different "prize" in an alert based on their selection
Door 1 will give the user a brand new car
Door 2 will give the user a nycda t-shirt
Door 3 will turn into a blackhole and teleport you to antarctica
*/
function magicDoor(door) {
	if (door === 1) {
		alert('You win a brand new car!');
	} else if (door === 2) {
		alert('You win a NYCDA t-shirt!');
	} else if (door === 3) {
		alert('You\'ve been sucked into a black hole and teleported to Antarctica!');
	} else {
		alert('Your door does not exist. There is no door.');
	}
}

/*
Define a function greaterOfThree that takes three integers and returns the larger of the three.
*/

function greaterOfThree(x,y,z) {
	if (x > y) {
		if (x > z) {
			return x;
		}
		return z;
	} else if (y > x) {
		return y;
	}
	return z;
}

/*
Define a function lineThemUp that takes three integers as arguments and returns the integers as an array.
*/

function lineThemUp (a,b,c) {
	return arr = [a,b,c]; 
}

/*
Create a tip calculator function called myTip that given two arguments a bill and a tip as a percent (bill, tip) will return the total bill with tip ex: myTip(50, 20) returns 60
*/

function myTip(bill,tip) {
	return bill + (bill * (tip * .01));
}

/*
Define a function called knighter that takes a name and returns it after being knighted. ex : Knighter(“Andy”) returns “Royal Knight Sir Andy”
*/

function knighter(name) {
	return `Royal Knight Sir ${name}`;
}

/*Define a function called royalizer that takes a gender and name as arguments, and returns a title based on the gender.
ex : royalizer(“male”, “David”) returns “His Majesty David” , for female it would be “Her Majesty X”.
*/
function royalizer(gender, name) {
	if (gender === 'male') {
		return`His Majesty ${name}`;
	}
	return `Her Majesty ${name}`;
}

/*
Define a function checkHorizontal that takes a full tic tac toe board as a multi dimensional array as an argument and returns true if any row is a winner for either X or O or false if there is no horizontal winner
*/
let board1 = [
	["X", "O", "X"],
	["O", "X", "O"],
	["O", "O", "X"]
];
// X

let board2 = [
	["X", "O", "O"],
	["O", "O", "X"],
	["X", "X", "O"]
];
// "No winner"

function checkHorizontal(board) {
	// for loop that loops each row
	for (let row = 0; row < board[0].length; row ++) {
	// if statement that checks for 3 in a row
		if (board[row][0] === board[row][1] && board[row][0] === board[row][2]) {
			return `${board[row][0]} won!`;
		}
	}
	// for loop that loops each column
	for (let col = 0; col < board.length; col++) {
	// if statement that checks for 3 in a column
		if (board[0][col] === board[1][col] && board[0][col] === board[2][col]) {
			return `${board[0][col]} won!`;
		}
	}
	// if statement to check diagonal ELSE if statement to check alternate diagonal
	if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
		return board[0][0];
	} else if (board[0][2] === board [1][1] && board [0][2] === board[2][0]) {
		return board[0][2];
	}
	return "No winner."
}

/*
*** Solve some of the problems from yesterday using functions */