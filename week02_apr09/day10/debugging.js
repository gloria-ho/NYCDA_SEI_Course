function calculateAvg(myArray) {
	let sum = 0;
	for (let i = 0; i > myArray.length; i++) {
		sum = sum + myArray[1];
	}
	return sum/myArray.length;
}

let result = (calculateAvg([23,23,89,78]));

console.log(result);