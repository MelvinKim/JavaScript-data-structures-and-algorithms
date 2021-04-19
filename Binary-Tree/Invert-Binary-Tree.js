//basically we are expected to swap the left most mode  value with the right most node value
//we are going to use BFS

//Time complexity => O(N) => we are exploring all the nodes, in order to swap
//Space complexity => O(N) => we are going to use a QUEUE (which at some point will contain all the nodes) to traverse

var invertBinaryTree = (tree) => {
	let queue = [];

	while (queue.length) {
		current = queue.shift();

		if (current === null) {
			continue;
		}

		swapLeftAndRight(current);
		queue.push(current.left);
		queue.push(current.right);
	}
};

var swapLeftAndRight = (tree) => {
	let temp = tree.left;
	tree.left = tree.right;
	tree.right = temp;
};

//solution 2 using recursion
const invertBinaryTree = (tree) => {
	if (tree === null) {
		return;
	}

	swapLeftAndRight(tree);
	invertBinaryTree(tree.left);
	invertBinaryTree(tree.right);
};
