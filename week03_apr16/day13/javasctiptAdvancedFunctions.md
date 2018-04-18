# Javasctipt Advanced Functions

## Primitive Values:
* string
* integer
* float
* boolean
* indefined

## Non-primitive Values:
* arrays
* objects
* *functions*

```javasctipt
let myFunc = function (parameter1, parameter2) {
	return something;
}

// something
```

```javascript
function sum (num1, num2, someCallback) {
	let result = num1 + num2;
	someCallback(result);
}

sum(7, 10, function(myResult) {
	console.log(myResult);
}

// 17

```

```javascript
let sumProcessor = function(myResult) {
	console.log(myResult);
}
function sum (num1, num2, someCallback) {
	let result = num1 + num2;
	someCallback(result);
}

sum(7, 10, someProcessor)
	
// 17
```
