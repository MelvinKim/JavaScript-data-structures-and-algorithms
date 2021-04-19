//Time complexity => O(N) => we are gonna traverse N  Nodes
// Space complexity => 0(N) => we are not gonna exceed N branch sums

class BinaryTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	branchSum(root) {
		let sums = [];
		this.calculateBranchSums(root, 0, sums);
		return sums;
	}

	//sums => array of sums
	calculateBranchSums(node, runningSum, sums) {
		if (node === null) return;
        
		let newRunningSum = runningSum + node.value;
		//if  we are at a LEAF NODE, we are going to add the newRunningSum to our sums array
		if (node.left === null && node.right === null) {
			sums.push(newRunningSum);
			return;
		} else {
			this.calculateBranchSums(node.left, newRunningSum, sums);
			this.calculateBranchSums(node.right, newRunningSum, sums);
		}
	}
}
