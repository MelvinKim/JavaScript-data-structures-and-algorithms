//bubbleSort
//Time Complexity => O(N^2) for worst case scenarios, O(N) => best case , when Array is nearly sorted
//Space Complexity => O(1)
const bubbleSort = (arr) => {
	//declare a variable to keep Track is Swapping occurred
	//if swapping occurred in an iteration , it's set to false, otherwise true

	let isSorted = false;

	while (!isSorted) {
		isSorted = true;

		for (let i = 0; i < arr.length - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(i, i + 1, arr);
				isSorted = false;
			}
		}
	}

	return arr;
};

const swap = (i, j, arr) => {
	let temp;
	temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
};

console.log(bubbleSort([3, -1.5, 1, 6, 2, 0.5, 9, 123, 0, 10]));
