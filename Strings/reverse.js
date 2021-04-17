// baba => abab
//loop from behind

let str = "baba";
let new_str = '';

const reverse_string = (string) => {
	for (let i=string.length - 1; i>=0; i--) {
        new_str += string[i];
    }

    return new_str;
};


console.log(reverse_string(str));