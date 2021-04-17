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
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
tree.insert(18);
tree.insert(21);

console.log(tree.find(211));
console.log(tree);
