class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	//add vertex
	addVertex(vertex) {
		//check if that vertex already exists
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = [];
		}
	}

	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}
}

var g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

g.addEdge("Dallas", "Tokyo");
console.log(g);
