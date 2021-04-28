// Given an array A[] consisting 0s, 1s and 2s.
// The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

const sortArr = (A) => {
	let index = 0;

	//insert 0s first
	for (let i = 0; i < A.length; i++) {
		if (A[i] === 0) {
			A[index++] = A[i];
		}
	}

	//insert 1s first
	for (let i = index; i < A.length; i++) {
		if (A[i] === 1) {
			A[index++] = 1;
		}
	}

	//insert 2s first
	for (let i = index; i < A.length; i++) {
		if (A[i] === 2) {
			A[index++] = 2;
		}
	}

	return A;
};

console.log(sortArr([0, 1, 2, 0, 1, 2]));
