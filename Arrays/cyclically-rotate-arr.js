// Given an array, cyclically rotate the array clockwise by one.

const rotate = (nums, k) => {
	k = k % nums.length;

	//reverse the whole array
	reverse(nums, 0, nums.length - 1);
	//reverse the first k numbers
	reverse(nums, 0, k - 1);
	//reverse the last n - k numbers
	reverse(nums, k, nums.length - 1);

	return nums;
};

const reverse = (arr, start, end) => {
	while (start < end) {
		let temp = arr[start];
		arr[start] = arr[end];
		arr[end] = temp;
		start++;
		end--;
	}
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
