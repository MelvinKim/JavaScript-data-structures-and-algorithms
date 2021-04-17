//Stack => LIFO
//QUEUE => FIFO

//Applications of stacks => managing function invocations, UNDO/REDO Operations, history object in browsers
//unshift() => add at the beginning
//shift() => remove

//NB: => stacks can be implemented using an Array and a LinkedList

//NB : Arrays are not efficient for implementation of a STACK

//solution 1 => using an Array
class Stack {
	constructor(val) {
		this.val = val;
	}

	pop() {
		this.val.pop();
	}

	push(element) {
		this.val.unshift(element);
	}
}

let stack = new Stack([1, 2, 3]);
stack.push(4);
stack.pop();
console.log(stack);
