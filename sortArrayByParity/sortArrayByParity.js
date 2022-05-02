// Given an integer array nums, move all the even integers at the 
// beginning of the array followed by all the odd integers.

// Return any array that satisfies this condition.

var sortArrayByParity = function (nums) {
	let newArr = [];
	console.log(`nums: ${nums}`);

	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 0) {
			newArr.push(nums[i]);
			console.log(`newArr: ${newArr}`);
		}
	}
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 1) {
			newArr.push(nums[i]);
			console.log(`newArr: ${newArr}`);
		}
	}
    
    return newArr
};