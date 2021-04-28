// Count pairs with given sum


//time => O(N^2)
//space => O(1)
const countPairs = (arr, sum) => {
	let count = 0;

	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] == sum) {
				count++;
			}
		}
	}

	return count;
};


const countPairs2 = (arr , sum) => {
    
} 

console.log(countPairs([1, 5, 7, -1], 6));
