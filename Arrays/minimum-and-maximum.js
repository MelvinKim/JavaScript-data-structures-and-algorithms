// Given an array, write functions to find the minimum and maximum elements in it.

//Time => O(N)
//space => O(1)
const minimumAndMaximum = (A) => {
	let max = Math.max(...A);

	let min = Math.min(...A);

	console.log('Max: ' + max, 'Min: ' + min);
};

minimumAndMaximum([1, 2, 3, 66, 10]);
