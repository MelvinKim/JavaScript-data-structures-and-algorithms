/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (A) {
	//input => digits in form of an Array
	//output => the last digit incremented eg [1,2,3] => [1,2,4]

	//reverse the digits
	let left_pointer = 0;
	let right_pointer = A.length - 1;
	while (left_pointer < right_pointer) {
		let temp = A[left_pointer];
		A[left_pointer] = A[right_pointer];
		A[right_pointer] = temp;
		left_pointer++;
		right_pointer--;
	}

	let carry = 1;
	let last_digit;
	for (let i = 0; i < A.length; i++) {
		A[i] += carry;

		if (A[i] > 10) {
			last_digit = A[i] % 10;
			carry = A[i] / 10;
		}
	}

	if (carry === 0) return A;
};

console.log(plusOne([10]));
