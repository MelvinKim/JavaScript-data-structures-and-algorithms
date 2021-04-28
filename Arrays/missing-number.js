// You are given a list of n-1 integers and these integers are in the range of 1 to n.
// There are no duplicates in the list. One of the integers is missing in the list.
// Write an efficient code to find the missing integer.

const findMissing = (nums) => {
	let n = nums.length;

	let actualSum = (n * (n + 1)) / 2;
	console.log('Actual sum: ' + actualSum);

	//calculate the currentSum
	let currentSum = 0;
	for (let i = 0; i < nums.length; i++) {
		currentSum += nums[i];
	}

	return actualSum - currentSum;
};

console.log(findMissing([3, 0, 1]));
