# Object Oriented Programming

## Object v. Variable

#### Object:
```javascript
let myDog = {
	name: 'buzzie',
	age: 3,
	color: 'white'
};
```
#### Variable:
```javascript
let myDogName = 'buzzie';
let myDogAge = 3;
let myDogColor = 'white';
```

## Dot Operator & Method

### *Useful methods that manipulate the internal data of the array.*
```javascript
let myArray = [2, 4, 6];
myArray.push(8);
myArray.push(10);
myArray.pop();
```

## *Goals:*
We want custom objects that contain some data and a set of custom methods that manipulate the data.

### Methods:
`console.log(`...`);`
`console.error(`...`);`
`console.table(`...`);`
`document.querySelector('`...`');`

### *Reserved keywords in JavaScript:*
* `class`
* `constructor`
* `this`

**anatomy:** 

```javascript
class Dog {
	constructor() {
		this.name = 'buzzie';
		this.age = 3;
		this.color = 'white';
	}
}
```

In the `contructor` we define what **data** atributes we want our object to have.