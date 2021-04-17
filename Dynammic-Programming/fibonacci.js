//Time complexity => O(2^n)
const fib = (n) => {
	//1.first solution using Recursion
	//input => n, output => fib sequence number, eg 2 =1, 1 = 1,
	//edge case => fib(2) =1, fib(1) = 1

	//base case
	if (n <= 2) {
		return 1;
	} else {
		return fib(n - 1) + fib(n - 2);
	}
};

//solution 2 => MEMOIZATION
const fib_dynamic = (n, memo = []) => {
	if (memo[n] !== undefined) return memo[n];

	//base case
	if (n <= 2) return 1;

	var result = fib_dynamic(n - 1, memo) + fib_dynamic(n - 2, memo);
	memo[n] = result;
	console.log(memo);
	return result;
};

//solution 3 => TABULATION
const fib_bottom_up = (n) => {
	//base case
	if (n <= 2) return;

	var fibNums = [0, 1, 1];
	for (var i = 3; i <= n; i++) {
		fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
	}

	return fibNums[n];
};

console.log(fib_dynamic(10));
