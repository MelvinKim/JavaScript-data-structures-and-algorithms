//piece of data
//reference to the next node

//LinkedList => bunch of nodes pointing to each other
//searching =>O(N)
//insertion => O(1) (advantage over arrays)
//deletion => it DEPENDS O(1) or O(N)
	//removing at the beginning = O(1)
	//removing at the end = O(N)
//Access => O(N)

// (look more on reversing a linkedlist)

//singly linked lists excel at DELETION and INSERTION

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

//NB: we don't initialize LinkedList with any data
//singly Linked List is a collection of nodes connected together
//so basically, the class is made up of nodes
//create a separate class for the Node class and Singly LinkedList Class
class SinglyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		var newNode = new Node(val);
		//check if their is no head, then set the node as the head
		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.head) return undefined;
		var current = this.head;
		var newTail = current;
		while (current.next) {
			newTail = current;
			current = current.next;
		}
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return current;
	}

	shift() {
		if (!this.head) return undefined;
		var currentHead = this.head;
		this.head = currentHead.next;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return currentHead;
	}

	unshift(val) {
		var newNode = new Node(val);

		if (!this.head) {
			this.head = newNode;
			this.tail = this.head;
		} else {
			//set the current head as the next node
			newNode.next = this.head;
			//change the head to this head
			this.head = newNode;
		}
		this.length++;
		return this;
	}

	//get a value based on the index
	get(index) {
		if (index < 0 || index >= this.length) return null;

		var counter = 0;
		var current = this.head;
		while (counter !== index) {
			current = current.next;
			counter++;
		}

		return current;
	}

	//change the value of a node, at a given index
	set(index, val) {
		let foundNode = this.get(index);

		if (foundNode) {
			foundNode.val = val;
			return true;
		}

		return false;
	}

	//insert a node at a specific index
	insert(index, val) {
		if (index < 0 || index > this.length) return false;
		if (index === this.length) {
			this.push(val);
			return true;
		}
		if (index === 0) return this.unshift(val);

		var newNode = new Node(val);
		var prev = this.get(index - 1);
		var temp = prev.next;
		prev.next = newNode;
		newNode.next = temp;

		this.length++;
		return true;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		//removing when the node exist somewhere in between the list
		var previousNode = this.get(index - 1);
		var removedNode = previousNode.next;
		previousNode.next = removedNode.next;

		this.length--;
		return removedNode;
	}

	//reverse a LinkedList => set the head to be the tail, the join the elements as we go
	reverse() {
		//swapping the head and the tail
		let node = this.head;
		this.head = this.tail;
		this.tail = node;

		var next;
		var prev = null;

		for (let i = 0; i < this.length; i++) {
			next = node.next;
			node.next = prev;
			prev = node;
			node = next;
		}

		return this;
	}
}

let list = new SinglyLinkedList();
list.push('A');
list.push('B');
list.push('C');

list.insert(0, 'First');

// list.unshift('FIRST');
// list.unshift('FIRST-2');
list.set(6, '!!!');

console.log(list);

console.log('Get: ' + list.get(-1));
