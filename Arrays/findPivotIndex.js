//input => array
//output => returns index of the pivot
//example => [1,7,3,6,5,6] : index 3, [2,1,-1] : index 0
//corner cases => check to see if the array the array is empty

const findPivotIndex = (arr) => {
	let sum = 0;

	//this loop calculates the total sum
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	let leftSum = 0;
	let rightSum = 0;

	//this loop checks if the leftSum =rightSum
	for (let i = 0; i < arr.length; i++) {
		rightSum = sum - leftSum - arr[i];

		if (leftSum == rightSum) {
			return i;
		}
		leftSum += arr[i];
	}

	return -1;

	//remember to return something
};

console.log(findPivotIndex([1, 7, 3, 6, 5, 6]));
