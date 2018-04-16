

##Variable Scope

###Scope
The region (lines of code) that you have access to a variable

```javascript
let = 10;

let myArray = [1, 2, 3];

function calculateSUm(someArray) {
	let sum = 0;
	for (let i = 0; i < someArray.length; i++) {
		sum = sum + someArray(i);
	}
	return sum;
}

let result = calcuateSum(myArray);
```

