//anagram is a word, phrase or name formed by rearranging the letters of another

//solved using frequency counter pattern

const validAnagram = (first, second) => {
	//check if they are equal
	if (first.length !== second.length) {
		return false;
	}

	//create a lookup object
	const lookup = {};

	for (let i = 0; i < first.length; i++) {
		let letter = first[i];
		//if letter exists, increment the value, otherwise set it to one
		lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
	}

	console.log(lookup);

	for (let i = 0; i < second.length; i++) {
		let letter = second[i];
		//Can't find letter or letter is zero then it's not an anagram
		if (!lookup[letter]) {
			return false;
		} else {
			lookup[letter] -= 1;
		}
	}

	return true;
};

validAnagram("qwerty", "qeywrt");
