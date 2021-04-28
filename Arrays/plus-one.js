/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
	//input => digits in form of an Array
	//output => the last digit incremented eg [1,2,3] => [1,2,4]

	//walk through the array backwards in case we have to do a carry operation
	for (let i = digits.length - 1; i >= 0; i--) {
		//meaning we don't need to do a carry operation
		if (digits[i] < 9) {
			digits[i] = digits[i] + 1;
			return digits;
		} else {
			digits[i] = 0;
		}
	}

	digits.unshift(1); //handles [9,9] => [0,0]X => [1,0,0]
	return digits;
};

console.log(plusOne([9]));
