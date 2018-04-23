# Week 4 Review

## DOM

*__Document Object Model__ Manipulate our HTML pages using `document`*

1. Get a handle on the element(s) which returns an element or an array using:

* `.getElementById`
* `.getElementsByClassName`
* `.querySelector`
* `.querySelectorAll`
* `.getELementByTagName`


2. Make the change on that element using:

* `addEventListener`
* `innerHTML`
* `innerText`
* `style`
* `appendChild`
* `remove()`
* `classList add/remove`

## Events

*HTML DOM events allow JavaScript to register different event handlers on elements in an HTML document.*

* `click`
* `keyup`
* `keydown`
* `mouseover`
* `mouseout`
* `mousedown`
* `focus`
* `blur`

## Event Listener

* which element?
* which event?
* callback(function)

## Form Fields

`form`

* `input`
	* `type = "text"`
	* `type = "email`
	* `type = "number"`
	* `type = "password"`
	* `type = "date"`
* `textarea`
* `select`
	* `option`
* `input type = "radio" name = "..." value = "..."`
* `input type ="checkbox"`

`form`

## Agile v. Watefall Development

*__Agile Development__ - A more iterative way of develooping code. Follows the same phases as waterfall but completed in smaller 'sprints'ß.*

*__Waterfall Development__ - The less iterative and flexible approach, as progress flows in largely one direction ("downwards" like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, deployment and maintenance.*

## Object Oriented Programming

*Allows us to have many properties on a single object.*

*We like having __methods__*

*__Encapsulation__ - The ability of an object to be a container (or capsule) for its member properties, including variables and methods. A fundamental principle of object oriented programming. What are the properties that I want in my object?*

## Object Listeral

*The basic way of creating an object*

```javascript
let myDog = {
	name: 'Fido';
	age: 3;
}

```

## Class

```javascript
class Student {
	constructor(param1, param2) {
		this.keyName = param1;
		this.keyName2 = param2;
	}
	methodName() {
		return `do this with ${this.keyName} and ${this.keyname2}`;
	}
}
```

## Instance

```javascript

let myStudent = new Student(...)
```


## Method

`myStudent.keyName1;`
`myStudent.keyName2;`

## this

*A keyword that refers to the current instance of the class. In JavaScript the value of this is determined mostly by the invocation context of function ( context.function() ) and where it is called.*


## ES6 v. Pre ES6


ES6:

```javascript
class Incrementor{
	constroctor(value) {
		this.value = value;
	}
	increment() {
		this.value++;
	}
	decrement() {
		this.value--;
	}
}
```

Pre ES6:

```javascript
function Incrementor(value){
	this.value = value
}
Incrementor.protype.increment = function() {
	this.value++;
}
Incrementor.prototype.decrement = function() {
	this.value--;
}
```


## Extends

```javascript
class Person{
	constructor(firstName, lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

let george = new Person('george', 'dagher')

class Student extends Person {
	constructor(firstName, lastName, grade) {
		super(firstName, lastName)
		this.grade = grade;
	}
}

let george = new Student('george', 'dagher', 12);
```




```javascript
class Person{
	constructor(data) {
		this.firstName = data.firstName;
		this.lastName = data.lastName;
	}
}
```


## Vocabulary
Base Class
Sub Class


## Primitive v. Non Primitive Data Types

```javascript
let a = 10;
let b = a;
b = 5;
console.log(a);
// 10
console.log(b);
// 5
```

```javascript
let a = {
	name:'buzzie';
	age: 3;
}

let b = a;
b.age = 10;

console.log(a);
// {name:'buzzie', age: 10}

console.log(b);
// {name:'buzzie', age: 10}
```


## ++a v. a++

**Prefix v. Postfix Operator**

Prefix
```javascript
let a = 10;
let b = ++a;
// first increment a, then assign that result to b
console.log(a, b);
// 11,, 11
```

Postfix
```javascript
let a = 10;
let b = a++;
// first assign result to b, then increment, then increment a
console.log(a, b);
// 11, 10
```
