//define a variable called birthMonth and assign it a value of the
//number of your birth month ie: 2 for February

let birthMonth = 7;

//write a simple expression using the above variable to test if you
//were born in April

if (birthMonth === 4) {
	console.log(true);
}

//write a conditional that again uses the birthMonth variable to check
//if you were born after the sixth month. if you were, log 'Late
//birthday' to the console if not log 'Early birthday' to the console

if (birthMonth > 6) {
	console.log('Late Birthday');
}

//define a variable named months and assign it an array containing
//the names of the first three months of the year

let months = ['January', 'February', 'March'];

//using the months variable you just created and the proper index
//log March to the console

console.log(months[2])

//using a for loop, log each month from your months array followed by
//' is cold' to the console

for (i = 0; i < months.length; i++) {
	console.log(`${months[i]} is cold`);
}

//define a variable named dog and assign it an object with keys of
//name and color and give them both values of your choice

let dog = {
	name:'Fido',
	color: 'brown'
};

//add a key called friends to the dog object and assign it a value of
//an array of three of the dogs friends (names of your choice)

dog.friends = ['Fluffy', 'Bagel', 'Nimbus'];

//define a function named say that takes one parameter and logs it to
//the console

function say(x) {
	console.log(x);
}

//invoke the above function with an argument

say('hello');

//define a function that takes two parameters, an array of numbers, and
//a single number, and uses a for loop to see if the single number is in
//the array

function searchForX(arr, x) {
	for (i = 0; i > arr.length; i ++) {
		if (arr[i] === x) {
			return true;
		}
	}
	return false;
}

//define a function that takes two parameters, an object, and an array
//of two elements. return true if the first element of the array is a key
//of the object, and the second element of the array is that key's value
//otherwise return false

function searchForArr(obj, arr) {
	for (i = 0; i < obj.length; i++) {
		if ( (arr[0] === obj[i]) && (arr[1] === obj.i) ) {
			return true;
		}
		return false;
	}
}

let obj1 = {
	color: 'red',
	name: 'Gloria',
	age: 31
};

let arr1 = ['age', 31];

console.log(searchForArr(obj1,arr1));

//define a function that takes another function as an argument and
//invokes it

function withinAfunct(func, a) {
	console.log(a * 10);
}

function addAll(x, y) {
	console.log(x + y);
}

console.log();



//define a function that takes an array, a callback, and a single target
//element. return the first array index that when the corrosponding
//array element is passed to the callback, evaluates to the target.
//If no such index exists return -1

function callBackFunction(arr, callBack, target) {
	for (let i = 0; i < arr.length; i++) {
		if (callBack(arr[i]) === target) {
			console.log(i);
		}
	}
	return -1;
}

//invoke the above function with appropriate arguments to return 2

let arr2 = [1,2,3,4,5];

let cB = function(el) {
	return el * 10;
};

let target = 30;

callBackFunction(arr2, cB, target);

//


// Add CommentCollapse 
// Message Input

// Message #sei-apr-2018