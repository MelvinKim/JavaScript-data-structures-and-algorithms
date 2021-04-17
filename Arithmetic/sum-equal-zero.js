//given an array, find two numbers that add upto 0

const sumZero = (arr) => {
	let left = 0;
	let right = arr.length - 1;

	//left shouldn't be greater than right
	while (left < right) {
		let sum = arr[left] + arr[right];

		if (sum === 0) {
			return [arr[left], arr[right]];
		} else if (sum > 0) {
			right--;
		} else {
			left++;
		}
	}
};

const arr = [-3, 4, 6, 8, 4, 3];
console.log(sumZero(arr));
