const arr = [3, 41, 0, 45, 11];
const sorted = arr.sort((a, b) => a - b);
console.log(sorted);

console.log(arr.map((el) => sorted.indexOf(el)));
