
//Time => O(N)
//Space => O(1)
const reverse = (A) => {
	let start = 0;
	let end = A.length - 1;
	let temp;

	while (start < end) {
		temp = A[start];
		A[start] = A[end];
		A[end] = temp;
		start++;
		end--;
	}

	return A;
};

console.log(reverse([1, 2, 4, 5]));
