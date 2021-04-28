const canPlaceFlowers = (flowerbed, n) => {
	let pointer1 = 0;
	let count = 0;

	for (let pointer2 = 1; pointer2 < flowerbed.length; pointer2++) {
		//check if pointer1 is equal to pointer2
		if (flowerbed[pointer1] - flowerbed[pointer2] === 0) {
			count++;
			pointer1++;
		}
	}

	if (count >= n) {
		return true;
	} else {
		return false;
	}
};

//more refined solution

//O(N) -time
//O(1) - space
const canPlaceFlowers2 = (flowerbed, n) => {
	let count = 0;
	let prev;
	let next;

	for (let i = 0; i < flowerbed.length; i++) {
		if (flowerbed[i] === 0) {
			//check the previous and the next value
			i === 0 || flowerbed[i - 1] === 0 ? (prev = 0) : (prev = 1);
			i === flowerbed.length - 1 || flowerbed[i + 1] === 0 ? (next = 0) : (next = 1);

			if (prev === 0 && next === 0) {
				//plant flower
				flowerbed[i] = 1;
				count++;
			}
		}

	}

    return count >= n
};

console.log(canPlaceFlowers([1, 0, 0, 0, 0, 1], 2));
