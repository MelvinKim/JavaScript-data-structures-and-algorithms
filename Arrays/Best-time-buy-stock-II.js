/**
 * @param {number[]} prices
 * @return {number}
 */
//basically we are comparing the i + 1 and the i elememnt
//if i+1 >  i, we will make a transaction
//corner cases => array is empty
var maxProfit = function (prices) {
	if (prices.length === 0 || prices === null) {
		return 0;
	}

	let profit = 0;

	for (let i = 0; i < prices.length - 1; i++) {
		if (prices[i + 1] > prices[i]) {
			profit += prices[i + 1] - prices[i];
		}
	}

	return profit;
};
