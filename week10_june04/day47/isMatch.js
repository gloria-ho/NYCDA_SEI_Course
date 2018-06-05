// write a func that takes 3 params (a,b,c) and returns the number of matching params [0, 2, 3]

// function isMatch(arr) {
//   if (arr[0] == arr[1]) {
//   // check if 0, 1 match
//     if (arr[0] == arr[2]) {
//       return 3;
//     } else {
//       return 2;
//     }
//   } else if (arr[0] == arr[2]) {
//   // check if 0, 2 match
//     return 2;
//   } else if (arr[1] == arr[2]) {
//   // check if 2, 3 match
//     return 2;
//   } else {
//     return 0;
//   }
// }

// function isMatch(arr) {
//   if ( (arr[0] != arr[1]) && (arr[0] != arr[2]) && (arr[1] != arr[2]) ) {
//     return 0;
//   } else if ( (arr[0] == arr[1]) && (arr[0] == arr[2]) ) {
//     return 3;
//   } else {
//     return 2;
//   }
// }

function isMatch(a,b,c) {
  let count = 0
  if (a == b) {
    count = 2;
  }
  if (a == c || b == c) {
    if (count == 2) {
      count ++;
    }
  }
  return count;
}

let myArr = [2,2,2]; // 3
let myArr2 = [2,3,2]; // 2
let myArr3 = [1,2,3]; // 0
let myArr4 = [2,3,3]; // 2

console.log(isMatch(myArr));
console.log(isMatch(myArr2));
console.log(isMatch(myArr3));
console.log(isMatch(myArr4));