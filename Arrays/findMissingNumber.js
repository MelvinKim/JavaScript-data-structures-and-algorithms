//given sum of a set of numbers
//given numbers with one missing

const findMissingNumber = (arr, n) => {
	//sum = (n * (n-1)) /2

	let expectedSum = (n * (n + 1)) / 2;
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return {
		sum: sum,
		missingNumber: expectedSum - sum,
	};
};

var arr = [1, 3, 4, 8];
console.log(findMissingNumber(arr, 4));
