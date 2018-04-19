# Object Oriented Programming

## Object v. Variable

#### Object:
```javascript
let myDog = {
	name: 'buzzie',
	age: 3,
	color: 'brown'
};
```
#### Variable:
```javascript
let myDogName = 'buzzie';
let myDogAge = 3;
let myDogColor = 'brown';
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
* **_class_**
* **_constructor_**

**anatomy:** 

```javascript
class Dog {
	constructor() {

	}
}
```