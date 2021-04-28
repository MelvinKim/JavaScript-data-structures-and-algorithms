/*
    3! = 3 *2 *1
*/

const factorial = (n) => {
	//base case
	if (n === 1) return 1;

	return factorial(n - 1) * n;
};

console.log(factorial(5));
