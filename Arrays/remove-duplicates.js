//input => arr
//output => length of the array without the duplicates
//example => [1,1,2]: [1,2] => 2
//corner cases => check if the array is empty

const removeDuplicates = (nums) => {
	const newSet = new Set(nums);

	return {
		size: newSet.size,
		array: newSet,
	};

	//remember to return
};

//trial two
const removeDuplicates2 = (nums) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i, 1);
			i--;
		}
	}

	return nums;
};

//Trial three
const removeDuplicates3 = (nums) => {
	//create an index starting at 1, because the number at index 0 is always true
	let index = 1;

	//loop
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] !== nums[i + 1]) {
			nums[index++] = nums[i + 1];
		}
	}

	return index;
};

console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 2, 2, 3, 3, 4]));
