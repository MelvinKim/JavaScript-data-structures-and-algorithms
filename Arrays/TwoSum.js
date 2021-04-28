// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

//input => array, target number
//output => return indices of the number that add upto to the target
//example => [3,2,4] , 6 . Return [1,2]
//corner cases => what if the array is empty? , what if there exists more than one solution

var twoSum = function (nums, target) {
	const map = new Map();

	// the Lookup speed in a Map is constant time O(1)
	for (let i = 0; i < nums.length; i++) {
		let currVal = nums[i];
		if (map.has(currVal)) {
			return [map.get(currVal), i];
		}
		let diffVal = target - currVal;
		map.set(diffVal, i);
	}
};

//solution 2 , using two pointers
const twoSum2 = (nums, target) => {
	let left_pointer = 0;
	let right_pointer = nums.length - 1;
	let current_sum = 0;

	while (left_pointer < right_pointer) {
		current_sum = nums[left_pointer] + nums[right_pointer];

		//check if current sum , is less than target
		//if so increment left pointer
		if (current_sum < target) {
			left_pointer++;
		} else if (current_sum > target) {
			right_pointer--;
		} else {
			return [left_pointer, right_pointer];
		}
	}

	//if no matches, return
	return [-1, -1];
};

console.log(twoSum2([-1, 2, 4, 5, 3], 5));
