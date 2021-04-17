//finding maximum sub Array
//Using Sliding window pattern

const maxSubarraySum = (arr, num) => {
	let maxSum = 0;
	let tempSum = 0;

	if (arr.length < num) return null;
	for (let i = 0; i < num; i++) {
		maxSum += arr[i];
	}

	tempSum = maxSum;
	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum);
	}

	return maxSum;
};

const arr = [5, 3, 1, 2, 4, 6, 7, 1, 1, 10, 2, 4, 5];
console.log(maxSubarraySum(arr, 3));
