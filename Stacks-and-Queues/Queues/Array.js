class Queue {
	constructor(val) {
		this.val = val;
	}

	//enqueue
	enqueue(val) {
        this.val.push(val);
    }

    //dequeue
    dequeue() {
        this.val.shift();
    }
}
