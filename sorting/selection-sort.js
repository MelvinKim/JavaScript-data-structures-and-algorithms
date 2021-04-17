//make a variable to store the lowest item
//11.compare it to the next item after it
//12.if we find a value that's smaller than the 1st element , we set it as the lowest
//15.check if element at j, is less than the lowest

//16.set that as the lowest

//NB => in selection set we are mostly concerned about the INDEX
//NB=> we set j as i+1, because we want to avoid repetition

//Time Complexity => O(N^2) for worst case scenarios, O(N) => best case , when Array is nearly sorted
//Space Complexity => O(1)

//selection is better than Bubble sort if you want to minimize the number of swaps you are making
const selection_sort = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		//store the 1st element as the value you have seen so far
		//NB => in selection set we are mostly concerned about the INDEX

		let lowest = i;

		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[lowest]) {
				lowest = j;
			}
		}

		if (i !== lowest) {
			console.log(i, lowest);
			let temp = arr[i];
			arr[i] = arr[lowest];
			arr[lowest] = temp;
		}
	}

	return arr;
};

let arr = [0, 2, 34, 22, 10, 19, 17];

console.log(selection_sort(arr));
