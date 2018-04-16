/*
The second program is the NYCDA Spy Encoder which is made up of a pair of functions, encode and decode. The NYCDA Spy Encoder uses a simple algorithm to turn text into numbers (encode) so we can pass notes to each other at work without someone being able to read it. In order to read the note someone would have to type the numbers into the decode function. 
 The first function, encode, takes in a string and outputs a string with numbers separated by colons. For instance if you were to pass in "ab" to encode you would get "97:98". A few more examples are: 
encode("dog")            =>        "100:111:103"
encode("cat")            =>        "99:97:116" 
encode("My name is Groot")     =>    "77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116"
The alphabet starts from 97 and ends at 122 for lowercase letters, and from 65 to 90 for uppercase letters. This is how the computer stores and interprets string characters behind the scenes. Of course this isn't limited to the alphabet, anything you can type or read can be represented by numbers to the computer. 

The second function, decode, takes in an encoded string and outputs the human readable equivalent. It does the opposite of the encode function, when a string is passed in, it attempts to convert the numbers that are separated by colons into the equivalent string characters.

Here you can see both functions in action. A string was passed in to the decode function that abided to the format described (numbers separated by colons), and the text equivalent was outputted (in this case it was "New York Code + Design Academy"). 
And you can see that we passed  "New York Code + Design Academy" into encode, we got the same number sequence. 

Your Task: 
Fix the encode function so it passes the following test cases:
encode("dog")            =>        "100:111:103"
encode("cat")            =>        "99:97:116" 
encode("My name is Groot")     =>    "77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116"
Fix the decode function so passes the following test cases:
decode("99:97:116")          => cat
decode("100:111:103")    => dog
decode("77:121:32:110:97:109:101:32:105:115:32:71:114:111:111:116")        => My name is Groot
*/


/**
Javascript features and functions in use: 
- FOR OF Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
- FOR IN Loop:    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- CHARCODEAT:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt
- FROMCHARCODE:   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
- ARRAY JOIN:     https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
**/

// encode function
function encode(word) {

  //somewhere to store the converted characters
  let result = [];

  //next we loop over each character in the string.
  for ( let i = 0 ; i < word.length ; i++) {

    //and save the charcode to the array
    result.push(word.charCodeAt(i));
  }

  // and return that list of codes, separated by colons
  return result.join(':');
}


// decode function
function decode(hash) {

  //split the code by semi colons!
  let arr = hash.split(':');
  // again somewhere to put our codes
  let result = [];

  // loop over the codes
  for(let code of arr) {
  
    // change the code back to the string character equivalent
    result.push(String.fromCharCode(code));
  }
  
  return result.join('');
}


let message = "I'm trying to send this secret message.";
let encodedMessage = encode(message);
let decodedMessage = decode(encodedMessage);


console.log(message);
console.log(encodedMessage);
console.log(decodedMessage);
