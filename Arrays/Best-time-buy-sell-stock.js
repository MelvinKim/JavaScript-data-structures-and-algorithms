//input => [7,1,4,5,6]
//output => return maximum profit eg 6 -1
//example => 6 -1 = 5
//corner cases
// - if the prices are slightly decreasing i.e [7,6,4, 3,2,1] (to transaction can be made)

const maxProfit = (arr) => {
	//keeps track of the profit
	let max = 0;
	//stores the minimum value we have seen so far (Remember to set it to the maximum value)
	let min = Number.MAX_VALUE;

	for (let i = 0; i < arr.length; i++) {
		//check if the current price, is smaller than the minimum we have seen so far
		if (arr[i] < min) {
			//set the current price to be the minimum
			min = arr[i];
		} else {
			//calculate the profit if we sold at the day we are ON
			max = Math.max(max, arr[i] - min);
		}
	}

	return max;
};

console.log(maxProfit([7, 1, 4, 5, 6]));






// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
// 	let min_val = Number.MAX_VALUE;
// 	let max_profit = 0;

// 	for (let i = 0; i < prices.length; i++) {
// 		if (prices[i] < min_val) {
// 			min_val = prices[i];
// 		} else if (prices[i] - min_val > max_profit) {
// 			max_profit = prices[i] - min_val;
// 		}
// 	}

// 	return max_profit;
// };
