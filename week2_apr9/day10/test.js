
let arr2 = [2, 7, 9]

function fillAllGaps(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
  	for (let a = arr[i]; a < arr[i+1]; a++  ) {
  		newArr.push(a);
	   	}
 	newArr.push(arr[i]);
  }
  newArr.push(arr[arr.length-1]);
  return(newArr);
}



// find the starting num
// find the ending num
// begin at start
// for each index + 1:
// run beging to endin
// check next index

debug(fillAllGaps(arr2));


function tryAgain(arr) {
	let tryThis = [];
z
	for (let i = 0 ; i < arr.length; i++) {


	}


}