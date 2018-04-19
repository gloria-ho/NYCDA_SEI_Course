# Object Oriented Programming

## Object Literal & Variable

#### Object Literal:
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

#### *Useful methods that manipulate the internal data of the array:*
```javascript
let myArray = [2, 4, 6];
myArray.push(8);
myArray.push(10);
myArray.pop();
```

### *Goal:*
We want custom objects that contain some data and a set of custom methods that manipulate the data.

#### Methods
* `console.log(`...`);`
* `console.error(`...`);`
* `console.table(`...`);`
* `document.querySelector('`...`');`

## *Reserved keywords in JavaScript:*

`class` *: a special function, and just as you can define function expressions and function declarations, the class syntax has two components: class expressions and class declarations.*

`constructor` *: a special method for creating and initializing an object created with a class. There can only be one special method with the name "constructor" in a class. A `SyntaxError` will be thrown if the class contains more than one occurrence of a constructor method.*

`this` *: a keyword that can be used inside of functions/methods that represents the contxt(calling of the owning object)*

`new` *: creates a new instance*

## Class & Constructor

`Constructor` **anatomy:** 

`let` variableName `= new` className`();`

In the `contructor`, we define what **data** atributes we want our object to have.

```javascript
class Dog {
	constructor() {
		this.name = 'buzzie';
		this.age = 3;
		this.color = 'white';
	}

	sayHello() {
  		console.log('Hello, my name is ' + this.name)
  }
}

let myDog = new Dog();
console.log(myDog.name);
// buzzie
```

## Class Instance / Class Object:

`Class` produces one or more instances

```javascript
class Dog {
	constructor(myName, myAge, myColor) {
		this.name = myName;
		this.age = myAge;
		this.color = myColor;
	}
	sayHello() {
		console.log('Hello, my name is' + this.name);
	}
}

let myDog = new Dog('buzzie', 3, 'white');

console.log(myDog.name);
// buzzie

console.log(myDog.sayHello());
// Hello, my name is buzzie
```

Each *instance* will produce a `new` Dog:

```javascript
let myDog2 = new Dog('doggo', 4, 'blue');
console.log(myDog2.name);
// doggo

let myDog3 = new Dog('bagel', 1, 'sesame');
console.log(myDog3.name);
// bagel
```





