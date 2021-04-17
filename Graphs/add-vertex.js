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
		//NB: To make it a directed Graph , we just take one way eg from V1 - V2 only
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	removeEdge(vertex1, vertex2) {
		this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
			(v) => v !== vertex2
		);

		this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
			(v) => v !== vertex1
		);
	}

	removeVertex(vertex) {
		while (this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}

		//delete the vertex
		delete this.adjacencyList[vertex];
	}
}

var g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");

g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");

// g.removeVertex("Tokyo");
g.removeVertex("Dallas");
// g.removeVertex("Aspen");

// g.removeEdge("Dallas", "Tokyo");
// g.removeEdge("Dallas", "Aspen");
console.log(g);
