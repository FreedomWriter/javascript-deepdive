console.log("GRAPHS");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex = (vertex) => {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      return `Vertex '${vertex}' alread exists!`;
    }
  };

  addEdge = (vertex1, vertex2) => {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      return `Cannot add edge, please verify both vertexes exist in the graph`;
    }
  };

  removeEdge = (v1, v2) => {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    } else {
      return `Cannot remove, please enter a valid edge`;
    }
  };

  removeVertex = (vertex) => {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjVertex);
      }
      // delete this.adjacencyList[vertex];
      return `Removed ${vertex}`;
    } else {
      return `${vertex} not in graph`;
    }
  };
}

g = new Graph();

console.log(g.addVertex("Chicago"));
console.log(g.addVertex("Oakland"));
console.log(g.addVertex("Chicago"));
console.log(g.addVertex("Portland"));
console.log(g.addEdge("Chicago", "Oakland"));
console.log(g.addEdge("Chicago", "Portland"));
console.log(g.addEdge("Chi-city", "Oakland"));
console.log(g.addEdge("Chicago", "O-city"));
console.log(g.adjacencyList);
// console.log(g.removeEdge("Chicago", "Portland"));
console.log(g.removeEdge("Chico", "Portland"));
console.log(g.removeVertex("Portland"));
console.log(g.removeVertex("Pootland"));
console.log(g.adjacencyList);
