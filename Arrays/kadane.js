/**
 * @param {number[]} nums
 * @return {number}
 */
//comparing the sum upto the i - 1, and i
//if value of i > sum upto i -1, take sum to be value of i
var maxSubArray = function (nums) {
	//set max_sum as the first index of the Array
	let max_sum = nums[0];
	let current_sum = max_sum;

	//start at index 1
	for (let i = 1; i < nums.length; i++) {
		current_sum = Math.max(nums[i] + current_sum, nums[i]);
		max_sum = Math.max(current_sum, max_sum);
	}
	return max_sum;
};
