



## Variables

Create a variable using the keywords `let` or `const`.

```javascript
let myNumber = 40;
```

**anatomy:** *keyword identifier `=` value `;`*




## Primitive Values
* **integer** - any whole number

```javascript
10, 45, -100, 5000, 0
```

* **float** - any number with a decimal

```javascript
5.2, -100.8, 5000.0
```

* **string** - anything within single or double quotes

```javascript
"george", 'george', '5'
```

* **boolean** - true or false

```javascript
true, false
```

* **undefined** - unkown value

```javascript
undefined
```





## Non-primitive Values

### Arrays

Stores a dictionary of values.

```javascript
let myPets = ['max', 'sandy', 'harry'];
```

**anatomy:** *`[`(value`,`value`,`)(...)`]` 	`;`*

##### Indexes

Used to identify a specific place in an array.

```javascript
myPets[0]
```

**anatomy:** *variableName`[`index`]`*

`index[0]` = max
`index[1]` = sandy
`index[2]` = harry

### Objects

A dictionary of keys and their values.

```javascript
let myDog = {
color: 'white',
name: 'buzzie',
age: 3
};
```
**anatomy:** *`{`(key / colon / value)`.`(...)`}` `;`*

Calling a value of a key within an object with a *dot operator*:

```javascript
myDog.name
```

**anatomy:** *variableName`.`key*




## Operators

* **`=` assigns a value to a variable**

```javascript
let c = 'value';
```

* **`+` addition and concatenation** *(be careful of types)* 

```javascript
let c = a + b;
let greeting = 'Hello';
let name = 'george';
let result = greeting + name; // 'Hello, george'
let sum = '5'+ 5; // '55'
```

* **`-` subtractions**

```javascript
let c = a - b;
```

* __`*` multiplication__

```javascript
let c = a * b;
```

* **`/` division**

```javascript
let c = a / b;
```

* **`%` modulo** *(the remainder of division)*

```javascript
let c = a % b;
```

* **`!` not**

```javascript
var c = !oldEnough;
```

* **`==` is equal to** *(results in boolean)*

```javascript
var c = a == b;
```

* **`!=` is not equal to** *(results in boolean)*

```javascript
let c = a!= b;
```

* **`===` *strict* is equal to**

* **`!==` *strict* is not equal to**




## Functions

Takes (an) input(s), performs the function's actions, outputs the result.

*Naming a function:* start with an action word, e.g. `function doSomething()`

```javascript
function myFunction (...) {
	console.log('do this code');
};
```

**anatomy:** *identifier `(`parameter(s)`)` `{`body/block`}`*

Calling a function:

```javascript
let dog1 = myFunction();
console.log(dog1.name);
```





## If Statements
Checks conditions to determine what code to run next.

`if` `else if` `else`

```javascript
if ( ... ) {
	console.log('do this code');
}
```
**anatomy:** *keyword `(`condition`)` `{`body/block`}`*

```javascript
if ( ... ) {
	console.log('do this code');
} else if {
	console.log('do this other code');
}
```
**anatomy:** *keyword `(`condition`)` `{`body/block`}`*

```javascript
if ( ... ) {
	console.log('do this code');
} else if {
	console.log('do this other code');
} else {
	console.log('do this last code');
}
```
**anatomy:** *keyword `(`condition`)` `{`body/block`}`*

### Logical Operators:
`===` `==` `=` `>=` `<=` `>` `<` `!=` `!==`

```javascript
if (...) {
	console.log('do this code');
} else if {
	console.log('do that code');
} else {
	console.log('do this other cold');
}
```

### Boolean Operators:
`&&` `||`




## While Loops

```javascript
while ( ... ) {
	console.log('do this code while this is true');
}
```

**anatomy:** *keyword`(`condition`)` `{`loopBody`}`*




## For Loops

```javascript

for (i = 0; i > something.length ; i++) {
	console.log('do this code for each');
}
```

**anatomy:** *keyword `(` initialization `;` condition `;` increment `)` `{` code `}`*










