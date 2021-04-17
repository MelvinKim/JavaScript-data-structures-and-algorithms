
//Time Complexity => O(N^2) for worst case scenarios, O(N) => best case , when Array is nearly sorted
//Space Complexity => O(1)

const insertion_sort = (arr) => {
	//
	//We are  starting at index 1 because remember we have our "sorted list" at index 0
	//we are going to insert each number into the sorted list

	for (let i = 1; i < arr.length; i++) {
		let smallest = i;

		while (smallest > 0 && arr[smallest] < arr[smallest - 1]) {
			swap(smallest, smallest - 1, arr);
			smallest--;
			// console.log(arr);
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

const arr = [2, 3, 8, 4, 0, 1];
console.log(insertion_sort(arr));
