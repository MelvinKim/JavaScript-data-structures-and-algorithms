const bubbleSort = (A) => {
	let isSorted = false;

	while (!isSorted) {

		isSorted = true;

		for (let i = 0; i < A.length - 1; i++) {
			if (A[i] > A[i + 1]) {
				//swap
				swap(i, i + 1, A);
                isSorted = false;
			}
		}
	}

	console.log('Sorted Array: ' + A);
};

const swap = (i, j, A) => {
	let temp;
	temp = A[i];
	A[i] = A[j];
	A[j] = temp;
};

bubbleSort([4, 1, 7, -1, 90, 45]);
