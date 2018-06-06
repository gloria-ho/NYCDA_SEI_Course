// // determine if a string is a isPalindrome
// function isPalindrome(str) {
//   if (str.length % 2 == 0) {
//     let begin = str.slice(0,(str.length/2));
//     // first half
//     let end = str.slice(str.length/2,str.length);
//     // second half
//     let rev = end.split("").reverse().join("");
//     // reversed second half
//     return (begin == rev);
//   } else {
//     return false;
//   }
// }

function isPalindrome(str) {
  for (i = 0, x = str.length-1; i < str.length/2-1, x > str.length/2 ; i++, x--) {
    if (str[i] != str[x]) {
      return false;
    } else {
      return true;
    }
  }
}

console.log(isPalindrome('foof')) // true
console.log(isPalindrome('fof')) // true
console.log(isPalindrome('bartab')) // false
