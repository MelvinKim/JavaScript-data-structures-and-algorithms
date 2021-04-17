//hello => {h: 1, e: 1, l: 2, o: 1}

const count_char = (str) => {
	//create the object
	const count_obj = {};

	str
		.toLowerCase()
		.split("")
		.forEach((char) => {
			if (/[a-z0-9]/.test(char))
				count_obj[char] = count_obj[char] ? count_obj[char] + 1 : 1;
		});

	return count_obj;
};

console.log(count_char("I love learning JavaScript and Java"));
