//4 => 4,3,2,1

const countDown = (num) => {
	if (num <= 0) {
		console.log("All are done");
		return;
	}

	console.log(num);
	num--;
	countDown(num);
};

//countDown(5);

//second recursive example
const sumRange = (num) => {
	if (num === 1) return 1;

	return num + sumRange(num - 1);
};

//console.log(sumRange(5));

//factorial example

const factorial = (n) => {
	if (n === 1 || n=== 0) return 1;

	return n * factorial(n - 1);
};

console.log(factorial(0));
