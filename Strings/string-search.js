//input => String, pattern
//output => {a:1, b:4, g:3}
//example => (baba, ba) => {b:2, a:2}

const string_search = (str, pattern) => {
	const count = {};

	for (let i = 0; i < str.length; i++) {
		for (let j = 0; j < pattern.length; j++) {
            
			if (pattern[j] !== str[i + j]) {
				break;
			}
			// if (str[i] === pattern[j]) {
			// 	let match = pattern[j];

			// 	count[match] ? (count[match] += 1) : (count[match] = 1);
			// }
		}
	}

	return count;
};

console.log(string_search("lorie loled", "lol"));
