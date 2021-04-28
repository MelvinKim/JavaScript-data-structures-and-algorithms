//Time => O(N)
//Space => O(1)
const getRangeAndCoefficient = (A) => {
	let max;
	let min;
	let range;

	//get the maximum
	max = Math.max(...A);

	//get the minimum
	min = Math.min(...A);

	//get the range
	range = max - min;
	console.log('The range is: ' + range);

	//get the coefficient
	coefficient = (max - min) / (max + min);

	console.log('The coefficient is: ' + coefficient);
};

getRangeAndCoefficient([15, 16, 10, 9, 6, 7, 17]);
