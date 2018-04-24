# HTTP Request

*HyperText Transfer Protocol*

## Request/Response

How clients(browser, iphone, alexa, etc.) make requests to servers

How servers communicate responses to a client

## CRUD
*(actions)*
* create
* read
* update
* delete

## URL

`https://www.facebook.com/friends/george`

`https://`
protocol

`www.facebook.com`
domain - where is this info coming from

`/friends/george`
path - identifies the resource we are looking for

## Method
*What type of action we want to take*
* `PUT` *(create / update)*
* `GET` *(read)*
* `POST` *(update / create)*
* `DELETE` *(delete)*

## Query Parameters

`?` query paramters
`&` parameter separator

`https://www.facebook.com/zuckerburg?limit=100&?fname='jerry'`

## Headers

* html?
* js?
* json?

## Body

Where we pass information for a PUT/Post request.

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
500's - 