const isMonotonic = (arr) => {
	let increasing = true;
	let decreasing = true;
	let pointer_1 = 0;
	let pointer_2 = 1;
	let i = 0;

	//check
	while (true) {
		if (arr[pointer_1] >= arr[pointer_2] && i < arr.length) {
			i++;
            return increasing = false;
		}
		if (arr[pointer_1] <= arr[pointer_2] && i < arr.length) {
			i++;
			pointer_1++;
			pointer_2++;
			continue;
		}

		return false;
	}

	// while (i < arr.length - 1) {
	// 	if (arr[i] <= arr[i + 1]) {
	// 		return true;
	// 	} else if (arr[i] >= arr[i + 1]) {
	// 		return true;
	// 	}
	// }

	// return false;
};

console.log(isMonotonic([6, 5, 4, 4]));
