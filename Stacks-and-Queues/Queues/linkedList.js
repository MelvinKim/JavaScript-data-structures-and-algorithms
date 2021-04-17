
//for queue => we add to the end and remove from the beginning

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	//insert into the queue
	enqueue(val) {
		var newNode = new Node(val);

		//check if the queue is empty
		if (!this.first) {
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}

		return ++this.size;
	}

	//remove from the queue
	dequeue() {
		if (!this.first) {
			return null;
		}

		let removedNode = this.first;
        if(this.first === this.last) {
            this.last = null;
        }

		this.first = removedNode.next;
		removedNode.next = null;

        this.size--;
		return removedNode.value;
	}
}
