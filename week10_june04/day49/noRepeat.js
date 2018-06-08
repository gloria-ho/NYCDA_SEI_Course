// write a function that accepts a string and returns the first non repeating character
// assume string is lowercase
// spaces count

function firstNonRepeatChar(str) {

Loop1:
  for (i = 0; i < str.length-1; i++) {
    // letter to check against
Loop2:
    for (x = i + 1; x < str.length; x ++) {
    // letter to check
      console.log(str[i],str[x])
      
      if (str[i] == str[x]) {
        continue Loop1;
      }
    return str[i];
    }
    
  
  }
  
}

let myStr = "the quick brown fox jumps then quickly blows air" // f

console.log(firstNonRepeatChar(myStr));