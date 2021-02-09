// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with 6 places after the decimal.

let arr = [-1, -3, 4, 5, 6, 0];
const functionPlusMinus = (arr) => {
	let positiveCount = 0;
	let negativeCount = 0;
	let zeroCount = 0;

	for (let x of arr) {
		if (x > 0) {
			positiveCount++;
		} else if (x < 0) {
			negativeCount++;
		} else {
			zeroCount++;
		}
	}

	console.log((positiveCount / arr.length).toFixed(6));
	console.log((negativeCount / arr.length).toFixed(6));
	console.log((zeroCount / arr.length).toFixed(6));
};

functionPlusMinus(arr);
