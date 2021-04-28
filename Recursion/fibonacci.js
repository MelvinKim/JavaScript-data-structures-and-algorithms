/*
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34
*/

const fib = (n) => {

	//two base cases
	if (n === 0) return 0;

	if (n > 0 && n <= 2) return 1;

	return fib(n - 1) + fib(n - 2);
};

console.log(fib(8));