//[0,3,4,56] => sum

const sum_arr = (arr) => {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
};

var arr = [5, 9, 4, 90];
console.log(sum_arr(arr));
