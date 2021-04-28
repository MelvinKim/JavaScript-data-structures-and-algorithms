//Vey similar to a binary search tree, but with some different rules
//MaxBinaryHeap => All parent nodes are always larger than child nodes
//MinBinaryHeap => all parent nodes are always smaller than child nodes
//All parent can have at most 2 CHILDREN
//There is no "LEFT" nor "RIGHT"
//No implied ordering of children nodes, eg where we say elements to the left are smaller than parent or to the right are bigger
//Does not need pointers to the left and pointers to the right

//WE WORK WITH VALUES AND NOT NODES

//lEFT CHILD IS ADDED FIRST, THEN THE RIGHT CHILD

//HEAPS ARE COMMONLY USED TO IMPLEMENT A PRIORITY QUEUE
//HEAPS ARE ALSO USED IN GRAPH TRAVERSAL ALGORITHMS

//For any index n:
//The left child is stored at 2n + 1
//The right child is stored at 2n + 2
//The parent is located at index Math.floor( (n - 1) / 2 )

//Insert at the end
//then bubble it up
class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}

	insert(element) {
		//1.push it into the Array
		this.values.push(element);

		//2.Bubble up , if the element is larger than the parent
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while (idx > 0) {
			//1.find index of the parent
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];
			if (element <= parent) break;

			//otherwise do this
			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	extractMax() {
		const max = this.values[0];
		const end = this.values.pop();

		if (this.values.length > 0) {
			this.values[0] = end;

			//start the bubbling down process
			this.sinkDown();
		}

		return max;
	}

	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while (true) {
			let leftChildIdx = 2 * idx + 1;
			let rightChildIdx = 2 * idx + 2;
			let leftChild;
			let rightChild;
			//to keep track if we did any swaps
			let swap = null;

			//check if the leftChildIdx is in bounds
			if (leftChildIdx < length) {
				leftChild = this.values[leftChildIdx];
				if (leftChild > element) {
					//keeps track of the position that we are going to swap with
					swap = leftChildIdx;
				}
			}

			//check if the rightChildIdx is in bounds
			if (rightChildIdx < length) {
				rightChild = this.values[rightChildIdx];
				//keeps track of the position that we are going to swap with
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIdx;
				}
			}

			if (swap === null) break;

			//perform the swap
			this.values[idx] = this.values[swap];
			this.values[swap] = element;
			idx = swap;
		}
	}
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(495);

console.log(heap.extractMax());
