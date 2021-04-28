const binarySearch = (arr) => {
    
	let start = 0;
	let end = arr.length - 1;
	let midpoint = Math.floor((start + end) / 2);

	if (n === arr[midpoint]) {
		return midpoint;
	} else if (n > arr[midpoint]) {
		start = midpoint + 1;
	}
	end = midpoint - 1;
};
