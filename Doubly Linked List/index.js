//we have tow pointers
//=> one pointing to the prev node
//one pointing to the next node

class Node {
	constructor(val) {
		this.val = val;
		this.prev = null;
		this.next = null;
	}
}

//mainly needs with nodes
class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	//push 1 => 2 => 3, 4 = 1 => 2 => 3 => 4
	push(val) {
		var newNode = new Node(val);

		//check if there is an head
		if (!this.head) {
			this.head = newNode;
			this.tail = newNode;
		} else {
			this.tail.next = newNode;
			//set the original tail to be , the prev of the newNode
			newNode.prev = this.tail;
			//set the newNode as the tail
			this.tail = newNode;
		}

		this.length++;
		return this;
	}

	//changes the pointer to pointer to the prev element before the tail
	//1 => 2 => 3, 1=> 2
	pop() {
		if (this.length === 0) {
			return null;
		}

		let poppedNode = this.tail;

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			this.tail = poppedNode.prev;
			this.tail.next = null;
			poppedNode.prev = null;
		}

		this.length--;
		return poppedNode;
	}

	//removes at the beginning
	shift() {
		if (this.length === 0) {
			return null;
		}

		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let oldHead = this.head;
			this.head = oldHead.next;
			oldHead.prev = null;
			oldHead.next = null;
		}

		this.length--;
		return oldHead;
	}

	unshift(val) {
		var newHead = new Node(val);

		if (this.length === 0) {
			this.head = newHead;
			this.tail = newHead;
		} else {
			this.head.prev = newHead;
			newHead.next = this.head;
			this.head = newHead;
		}

		this.length++;
		return this;
	}

	get(index) {
		if (index < 0 || index >= this.length) return null;
		let count, current;

		if (index <= this.length / 2) {
			count = 0;
			current = this.head;
			while (count != index) {
				current = current.next;
				count++;
			}
		} else {
			count = this.length - 1;
			current = this.tail;
			while (count != index) {
				current = current.prev;
				count--;
			}
		}

		return current;
	}

	set(index, val) {
		var foundNode = this.get(index);
		if (foundNode != null) {
			foundNode.val = val;
			return true;
		}

		return false;
	}

	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === 0) return !!this.unshift(val);
		if (index === this.length) return !!this.push(val);

		var newNode = new Node(val);
		var beforeNode = this.get(index - 1);
		var afterNode = beforeNode.next;

		beforeNode.next = newNode, newNode.prev = beforeNode;
		newNode.next = afterNode, afterNode.prev = newNode;

		this.length++;
		return this;
	}

	//i always forget when accessing index, always remember -1
	remove(index) {
		let removedNode;

		if (index < 0 || index >= this.length) return undefined;
		if(index === 0) return this.shift();
		if(index === this.length - 1) return this.pop();

		removedNode = this.get(index);
		var beforeNode = removedNode.prev;
		var afterNode = removedNode.next;
		beforeNode.next = afterNode;
		afterNode.prev = beforeNode;
		removedNode.next = null;
		removedNode.prev = null;

		this.length--;
		return removedNode;
	}
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(5);
list.push(3);

list.shift();
// list.pop();
// list.pop();

console.log(list);
