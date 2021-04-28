// Find the largest three distinct elements in an array

//Time => O(N*logN)
//Space => O(1)
const largest3Elements = (nums) => {

	//sort the array
	nums.sort((a, b) => b - a);

	//return form index 0 - 2
	let results = [];

	for (let i = 0; i < 3; i++) {
		results.push(nums[i]);
	}

	return results;
};

console.log(largest3Elements([10, 4, 3, 50, 23, 90]));
