// Given an array a[] and an element x, find number of occurrences of x in a[].

const frequency = (A, x) => {
	const lookup = {};

	for (let i = 0; i < A.length; i++) {
		if (!lookup[A[i]]) {
			lookup[A[i]] = 0;
		}

		lookup[A[i]]++;
	}

	return lookup[x];
};

console.log(frequency([1, 1, 1, 5, 6, 3, 9, 90, 12, 12, 12, 12], 12));
