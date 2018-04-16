


## Variable Scope

**Scope** - the region (lines of code) that you have access to a variable.

Anything declared inside a function is only alive is that function.

```javascript
let sum = 10;

let myArray = [1, 2, 3];

function calculateSUm(someArray) {
	let sum = 0;
	for (let i = 0; i < someArray.length; i++) {
		sum = sum + someArray(i);
	}
	return sum;
}

let result = calcuateSum(myArray);

console.log(sum);
// 10
```

Creating a variable with the same name inside a function will create a local variable inside that function, which will not change the original variable outside. Once the fucntion is complete, the new varaiable within will be obsolete.

**Global Variable** - a variable not defined within a function. *(usable anywhere in the code)*

**Local Variable** - a variable defined within a function. *(only usable within that function)*



## Modifying Objects

To modify objects:

```javascript
let myDog = {
	name: 'Buzzie'
}

console.log(myDog.name);
//	name: 'Buzzie'

myDog.age = 3;
myDog.color = 'brown';
myDog.friends = ['Max', 'Simone']

console.log(myDog);
//	name: 'Buzzie'
//	age: 3
//	color: 'brown'
//	friends: ['Max', 'Simon']

```



## Modifying Arrays

To modify arrays:

```javascript
let myArray = [100, 150, 200];

console.log(myArray[1]);
//	200

myArray[3] = 500;
myArray[4] = 600;
myArray[myArray.length] = 10;

console.log(myArray);
//	[100, 150, 200, 500, 600, 10]

myArray = undefined

console.log(myArray);
//	[100, 150, 200, 500, undefined, 10]

myArray[100] = 9;

console.log(myArray);
//	[100, 150, 200, 500, 600, 10 ,,,, ... ,,,,,, 9]

```




## Methods

A method is a function that modifies the internal data of something.

The `.push` method will add an value to the end of an array.

The `.pop.` method will remove the last value in an array.

```javascript
let myArray = [2, 4, 6];

myArray.push(8);

console.log(myArray);
//	[2, 4, 6, 8]

myArray.pop();

console.log(myArray);
//	[2, 4, 6]
```

The `.splice` method will add or remove values at any spedicifed position.


**anatomy:** `myArray.splice(`position`,` value`)`

```javascript
let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];

console.log(vegetables); 
//	["Cabbage", "Turnip", "Radish", "Carrot"]

let pos = 1, n = 2;

let removedItems = vegetables.splice(pos, n); 
// this is how to remove items, n defines the number of items to be removed,
// from that position(pos) onward to the end of array.

console.log(vegetables); 
// ["Cabbage", "Carrot"] (the original array is changed)

console.log(removedItems); 
// ["Turnip", "Radish"]
```

