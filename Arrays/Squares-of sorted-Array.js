//input => arr
//output => square of each element in the array
//example => [2,5,6] : [4,25,36]
//corner cases => array is empty, duplicates

const sortedSquares = (arr) => {
	//loop over each array using .map() and square
	//then call sort function

	//O(N)
	let ans = arr.map((el) => el * el);
	//O(N*log N)
	ans.sort((a, b) => a - b);
	console.log(ans);
};

sortedSquares([-7, -3, 2, 3, 11]);
