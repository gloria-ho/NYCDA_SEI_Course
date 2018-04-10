
/* 1. A running total
Using a for loop, compute the sum of the numbers in the array named prices; storing the result in the sum variable. Repl.it hosted version:  https://repl.it/@fizal619/NegativeAmazingSunbear */


let prices = [33 , 26, 99, 120, 12, 45];
let sum = 0;
// Your code here
function sumOfPrices(x) {
	for (i = 0; i < x.length; i++ ) {
		sum += x[i];
	}
	console.log( "The sum is: " , sum);
}


/* 2. 99 Crows on the Wall
Write a program in a new Repl.it that outputs all 100 lines of the classic song:  99 Crows on the Wall . You shouldn’t have to write 300 lines of JavaScript for this program at all -  this is the perfect chance to use a for loop or while loop!

Starts with:

99 crows on the wall. 99 crows.
1 fell down and became a wight.
98 crows on the wall

Ends with:

1 crow on the wall. 1 single crow.
It fell down and became a wight.
There's no one left to defend Westeros now. */


function countingCrows(y) {
	for (c = 1; c < y; y-- ) {
		console.log(`${y} crows on the wall.\n${y} crows.\n 1 fell down and became a wight./\n ${y-1}crows on the wall`);
	}
	console.log('1 crow on the wall.\n 1 single crow.\n It fell down and became a wight.\n There\'s no one left to defend Westeros now.');
}
