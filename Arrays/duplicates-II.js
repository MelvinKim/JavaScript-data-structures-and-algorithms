/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

//so if we are keeping Track/remembering => we will go for an HashMap
var containsNearbyDuplicate = function (nums, k) {
	let numsMap = new Map();

	for (let i = 0; i < nums.length; i++) {
		let curVal = nums[i];

		//check if map already contains the number we are on
		if (numsMap.has(curVal) && i - numsMap.get(curVal) <= k) {
			return true;
		} else {
			numsMap.set(curVal, i);
		}
	}

	return false;
};
