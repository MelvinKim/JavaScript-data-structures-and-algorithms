const KthLargestSmallest = (A, k) => {
	if (k > A.length) return null;

	//sort the array
	A.sort((a, b) => a - b);

	//return the index of k-1
	return A[k - 1];
};

console.log(KthLargestSmallest([7, 10, 4, 3, 20, 15], 4));
