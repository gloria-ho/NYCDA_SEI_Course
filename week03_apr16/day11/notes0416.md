


## Variable Scope

**Scope**

The region (lines of code) that you have access to a variable.

Anything declared inside a function is only alive is that function/

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
```

Creating a variable with the same name inside a function will create a local variable inside that function, which will not change the original variable outside. Once the fucntion is complete, the new varaiable within will be obsolete.

**Global Variable**

A variable not defined within a function. *(usable anytwhere in the code)*

**Local Variable**

A variable defined within a function. *(only usable within that function)*



## Modifying Objects



```javascript
let myDog = {
	name: 'Buzzie';	
}

console.log(myDog.name);


```


