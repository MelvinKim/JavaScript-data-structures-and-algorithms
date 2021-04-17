//3 => 3+2+1

//solution 1
const sum_number = (n) => {
	let sum = 0;

	for (let i = 0; i <= n; i++) {
		sum += i;
	}
	return sum;
};

//solution 2
const sum_number2 = (n) => {
	return (n * (n + 1)) / 2;
};

//calculate performance time
//(performance function only works on the browser)
let t1 = performance.now();
sum_number(10000);
let t2 = performance.now();
console.log(`Function 1 ${t2 - t1} ms`);

let t3 = performance.now();
sum_number2(1000);
let t4 = performance.now();
console.log(`Function 2 ${t4 - t3} ms`);

console.log(sum_number(3));
console.log(sum_number2(3));
