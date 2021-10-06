class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
		this.nodes.add(vertex);
	}

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
		for (let vertex of vertexArray){
			this.nodes.add(vertex);
		}
	}

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
		v1.adjacent.add(v2);
		v2.adjacent.add(v1);
	}

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
		v1.adjacent.delete(v2);
		v2.adjacent.delete(v1);
	}

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
		for (let adjVert of vertex.adjacent){
			adjVert.adjacent.delete(vertex);
		}
		this.nodes.delete(vertex);
	}

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
		const toVisitStack = [start];
		const results = [];
		const allNodes = new Set(toVisitStack);

		while (toVisitStack.length) {
			let curVert = toVisitStack.pop();
			results.push(curVert.value);

			for (let vert of curVert.adjacent){
				if (!allNodes.has(vert)){
					allNodes.add(vert);
					toVisitStack.push(vert);
				} 
			}
		}
		return results;
	}

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
		const toVisitQueue = [start];
		const results = [];
		const allNodes = new Set(toVisitQueue);

		while (toVisitQueue.length) {
			let curVert = toVisitQueue.shift();
			results.push(curVert.value);
			
			for (let vert of curVert.adjacent){
				if (!allNodes.has(vert)){
					allNodes.add(vert);
					toVisitQueue.push(vert);
				} 
			}
		}
		return results;
	}
}

module.exports = {Graph, Node}