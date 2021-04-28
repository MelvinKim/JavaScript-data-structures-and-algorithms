/*
 [1,0,2,3,0,4,5,0] => [1,0,0,2,3,0,0,4]
 keep track => element at a certain array index, length of the array
 if arr[i] === 0, set arr[i+1] === 0

 edge case =>
    check if array is empty, return null
    what if there are no zeros, return original array
*/

const duplicateZeros = (arr) => {
	let i = 0;
	while (i < arr.length - 1) {
		if (arr[i] === 0) {
			arr.splice(i + 1, 0, 0);
			arr.pop();
			i = i + 2;
		} else {
			i = i + 1;
		}
	}

	return arr;
};

console.log(duplicateZeros([1, 0, 2, 3, 0, 4, 5, 0]));
