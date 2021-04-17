class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

//Insertion => O(log n)
//Searching => O(log n)
class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		var newNode = new Node(value);

		//check if there is a root
		if (this.root === null) {
			this.root = newNode;
			return this;
		} else {
			var current = this.root;
			//(checks condition in the if statement)
			while (true) {
				//to enable check for duplicates
				if (value === current.value) return undefined;

				//check if value is less than the root
				if (value < current.value) {
					//check if there is a node to the left
					if (current.left === null) {
						current.left = newNode;
						return this;
					}
					//update current to enable us to traverse further
					current = current.left;
				} else if (value > current.value) {
					if (current.right === null) {
						current.right = newNode;
						return this;
					}
					//update current to enable us to traverse further
					current = current.right;
				}
			}
		}
	}

	find(value) {
		//check if there is a root
		if (this.root === null) return false;

		var current = this.root;
		var found = false;

		//loop while there is a current value and found is not equal to false
		while (current && !found) {
			if (value < current.value) {
				current = current.left;
			} else if (value > current.value) {
				current = current.right;
			}
			//check if we found the element
			else {
				return true;
			}
		}
		return false;
	}

	BFS() {
		var data = [];
		var queue = [];
		var node = this.root;

		//place the root node, in the queue
		queue.push(node);

		//remove the node from the beginning of the queue
		while (queue.length) {
			node = queue.shift();

			//add it to the return array
			data.push(node.value);

			//check if there is a left and push it to the queue
			if (node.left) queue.push(node.left);

			//check if there is a right and push it to the queue
			if (node.right) queue.push(node.right);
		}

		return data;
	}

	//basically we traverse a nodes left side completely, then traverse the right side completely
	DFSPreOrder() {
		var data = [];
		var current = this.root;

		function traverse(node) {
			data.push(node.value);

			//check if there is a left
			if (node.left) traverse(node.left);

			//check if there's a right
			if (node.right) traverse(node.right);
		}

		traverse(current);
		return data;
	}

	//start from the left bottom, then right, then go to the other side, then visit the root node lastly
	//the root is the last thing that is visited
	DFSPostOrder() {
		var data = [];
		var current = this.root;

		function traverse(node) {
			//check if there's a left
			if (node.left) traverse(node.left);

			//check if there's a right
			if (node.right) traverse(node.right);

			data.push(node.value);
		}

		traverse(current);

		return data;
	}

	DFSInOrder() {
		var data = [];
		var current = this.root;

		function traverse(node) {
			//check if there's a left
			if (node.left) traverse(node.left);
			data.push(node.value);

			//check if there's a right
			if (node.right) traverse(node.right);
		}

		traverse(current);
		return data;
	}
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

console.log(' DFS PreOrder:  ' + tree.DFSPreOrder());
console.log(' DFS PostOrder:  ' + tree.DFSPostOrder());
console.log(' DFS InOrder:  ' + tree.DFSInOrder());
// console.log(tree);
