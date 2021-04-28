//input => arr
//output => arr with zeroes at the end
//example => [0,1,0,3,12] : [1,3,12,0,0]
//corner case => check if the array is empty

const moveZeroes = (arr) => {
	//to keep current index that we are at
	let index = 0;

	//insert numbers not equal to zero
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] !== 0) {
			arr[index++] = arr[i];
		}
	}

	//insert zero's
	for (let i = index; i < arr.length; i++) {
		arr[i] = 0;
	}

	return arr;

	/*
    => my first inefficient trial
	let removedElement;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			removedElement = arr.splice(i, 1);
			arr.push(removedElement);
		}
	}

	return arr;
    */
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
// console.log(moveZeroes([0]));
