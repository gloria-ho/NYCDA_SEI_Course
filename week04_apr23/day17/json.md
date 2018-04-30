# JSON
* A string representation of a javaScript object/array.

built in:
`JSON.stringify(myObj);`
`JSON.parse(myStr);`


```javascript
let myDog = {
    name: 'buzzie',
    age: 3,
    color: 'white'
};

JSON.stringify(myDog);

// "{"name":"buzzie","age":3,"color":"white"}"

myDog.toString();

let myJsonString = JSON.stringify(myDog);

myJsonString

// "{"name":"buzzie","age":3,"color":"white"}"

JSON.parse(myJsonString)

// {name: "buzzie", age: 3, color: "white"}
// age: 3
// color: "white"
// name: "buzzie"

```

## Status Code

200's - Request was successful
300's - Redirect
400's - Client error
500's - Server error


## .aXios
*An ajax library that helps make the HTTP request and process the response/*

**AJAX**
*Asynchronous JavaScript and XML*

)

## Promise

An object that has a method called `then`.

`then` accepts another function that will be called when the response is ready.

```javascript
let myPromise = ... ;

myPromise.then(function(response) {
	
})

console.log(response);

```


```javascipt
let myPromise = axios.get('https://www.redbullshopus.com/products.json');

myPromise.then(function(myResponse) {

console.log('recieved the response');

console.log(myResponse);
})
```