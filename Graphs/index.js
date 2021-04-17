//build a Graph
//AdjacencyList : { a: [], b:[], c:[]}

class Graph {
	constructor() {
		this.adjacencyList = {};
	}

	//addVertex
	// input => vertex
	//output => adjacencyLIst: { a:[]}
	addVertex(vertex) {
		this.adjacencyList[vertex] = [];
	}

	//addEdge
	//input => two vertices => v1, v2
	//output => adjacencyLIst: { a:[b], b:[a]}
	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
	}

	//removeEdge
	//input => v1, v2
	//output => adjacencyList with the vertices filtered
	removeEdge(v1, v2) {
		this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
	}
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");

g.addEdge("A", "B");
g.addEdge("B", "C");
g.addEdge("D", "E");

g.removeEdge("A", "B");
console.log(g);
