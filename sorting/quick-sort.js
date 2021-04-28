const pivot = (arr, start = 0, end = arr.length - 1) => {
	const swap = (arr, i, j) => {
		let temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	};

	let pivot = arr[start];
	let swapIndex = start;

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIndex++;
			swap(arr, swapIndex, i);
			// console.log(arr);
		}
	}

	swap(arr, start, swapIndex);
	// console.log(arr);
	return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);

		//left side
		quickSort(arr, left, pivotIndex - 1);

		//right side
		quickSort(arr, pivotIndex + 1, right);
	}

	return arr;
};

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
