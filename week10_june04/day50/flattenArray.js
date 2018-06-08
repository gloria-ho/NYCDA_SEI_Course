// write a function flatten that takes in an array of arrays and returns just the numbers in one array
// method: array1.concat(array2)

function flatten(arr) {
  let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {  
        result = result.concat(flatten(arr[i]));
      } else{
        result.push(arr[i]);
      }
    }
  return result;
}

let test1 = ([1, 2, 6]); // [1, 2, 6]
let test2 = ([[2, 4],[4, 6]]); // [2, 4, 4, 6]
let test3 = ([2, [8, 10]]); // [2, 8, 10]
let test4 = ([2, [3, [5, 6]], 7, [10]]); // [2, 3, 5, 6, 7, 10]
let test5 = ([[2, [3, 4]], [4], [[ [3, 4 ], [4] ]]]); // [2, 3, 4, 4, 3 ,4 ,4]

console.log(flatten(test1));
console.log(flatten(test2));
console.log(flatten(test3));
console.log(flatten(test4));
console.log(flatten(test5));