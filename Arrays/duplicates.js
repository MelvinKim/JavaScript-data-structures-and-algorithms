/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
	//input => Array
	//output => True/ False
	//examples => [1,1,2,3,4] , true => 1 appears twice

	let count = {};

	for (let i = 0; i < nums.length; i++) {
		count[nums[i]] ? (count[nums[i]] += 1) : (count[nums[i]] = 1);

		if (count[nums[i]] > 1) return true;
        
	}

	return false;


	//solution 2
	const unique = new Set(nums);
	if (unique.size === nums.length) return false;
	return true;
};

// console.log(containsDuplicate[[1,1,2,3,4]])
