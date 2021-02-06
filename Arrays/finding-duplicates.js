//finding duplicate elements in an Array

const findDuplicated = (arr) => {
	//1.sort the array
	//2.create a copy of the array
	//3.compare

	let sorted_Array = arr.slice().sort();

	let results = [];

	for (var i = 0; i < sorted_Array.length - 1; i++) {
		if (sorted_Array[i + 1] == sorted_Array[i]) {
			results.push(sorted_Array[i]);
		}
	}

	return results;
};

let duplicatedArray = [9, 9, 111, 2, 3, 5, 4, 4, 5, 7];
console.log(findDuplicated(duplicatedArray));
