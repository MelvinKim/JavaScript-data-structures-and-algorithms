//function that takes an array , value

const linear_search = (arr, num) => {
	//input => array, num
	//output => return true / false
	//examples => [1,4,5,7], 5 = true

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === num) return i;
	}

	return -1;
};

console.log(linear_search([1, 2, 5, 7], 10));
