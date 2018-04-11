/*
Two Sum

Given the array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/


let nums = [2, 7, 11, 15];
let target = 26;

// While the index variable is less than the length of the array, index of num 1 will increase
for (let i = 0; i < nums.length; i++) {
	// While the index varaiable is less than the length of the array, index of num 2 will increase
	for (let j = 1 + 1; j < nums.length; j++) {
		// Compare sum to target
		if (nums[i] + nums[j] === target) {
			// print to console
			console.log([i,j]);
		}
	}
}
