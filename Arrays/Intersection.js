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

const InterSection = (A, B) => {
	let common = [];

	let i = 0;
	let j = 0;

	while (i < A.length && j < B.length) {
		if (A[i] < B[j]) {
			i++;
		} else if (B[j] < A[i]) {
			j++;
		} else {
			console.log(B[j]);
			common.push(B[j]);
			i++;
			j++;
		}
	}

	return common;
};

console.log(InterSection([1, 1, 1, 2, 3], [6, 1, 1, 11, 3]));
