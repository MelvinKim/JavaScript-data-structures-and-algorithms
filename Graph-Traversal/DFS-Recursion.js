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

	depthFirstRecursive(start) {

		const result = [];
		const visited  = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if(!vertex) return  null;

			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach(neighbor => {
				if(!visited[neighbor]) {
					return dfs(neighbor);
				}
			});


		})(start);
		return  result;
	}


	depthFirstIterative(start) {
		 //// TODO: Make a stack
	  //// TODO: Make Array
		//// TODO: Make our list

		const stack = [start];
		const result = [];
		const visited = {};
		let currentVertex ;

		visited[stack] = true;
		while (stack.length) {
			currentVertex = stack.pop();
			result.push(currentVertex);

			//accessing the neighbors
			this.adjacencyList[currentVertex].forEach((neighbor) => {

				if(!visited[neighbor]) {
					visited[neighbor] = true;
					stack.push(neighbor);
				}
			});
		}
		return result;
	}

}

var g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

// g.removeVertex("Tokyo");
// g.removeVertex("Dallas");
// g.removeVertex("Aspen");

// g.removeEdge("Dallas", "Tokyo");
// g.removeEdge("Dallas", "Aspen");

// console.log(g);
console.log(g.depthFirstRecursive("A"));
