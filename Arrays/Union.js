/*
    Given two sorted arrays, find their union and intersection.
    Union => combination of the values
    Intersection => common elements

    Input : 
        arr1[] = {1, 3, 4, 5, 7}
        arr2[] = {2, 3, 5, 6} 
    Output :
        Union : {1, 2, 3, 4, 5, 6, 7} 
        Intersection : {3, 5}

    cornser cases: 
     -check for duplicates
     -check if the array is empty
*/

var findUnion = (A, B) => {
	var newArr = A.concat(B);
	var newSet = new Set(newArr);
	console.log('Unsorted: ' + newSet);

	//convert the Set into the Array
	return Array.from(newSet).sort((a, b) => a - b);
};

//solution 2
const findUnion2 = (A, B) => {
	//1.compare the elements in the two arrays
	//2.if less than and and does not exist, place it before
	//2.if less than and and does not exist, place it after

	let pointer_1 = 0;
	let pointer_2 = 0;

	while (pointer_1 < A.length && pointer_2 < B.length) {
		if (A[pointer_1] < B[pointer_2] && A.indexOf(B[pointer_2] === -1)) {
			A.splice(pointer_1 + 1, 0, B[pointer_2]);
			B.splice(pointer_2, 1, 1);
			return A;
		} else if (A[pointer_1] > B[pointer_2] && A.indexOf(B[pointer_2] === -1)) {
			A.splice(pointer_1, 0, B[pointer_2]);
			B.splice(pointer_2, 1, 0);
			return A;
		} else {
			pointer_1++;
		}
		pointer_1++;
		pointer_2++;
	}

	return A;
};

console.log('sorted: ' + findUnion2([1, 3, 4, 5, 7], [2, 3, 5, 6]));
