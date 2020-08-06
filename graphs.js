// /*

// Anoatomy of a graph:
// A set of values that are related in a pair like fashion
// Node (or Vertex)
// Nodes are connected with edges

// Types of graphs:
// 1. Directed
//     - can only move in one direction
//     - Twitter - someone follows me, doesn't mean I'm auto-following them

// 2. Undirected
//     - movement is unrestricted, mental model: two land street
//     - Facebook friend, when I'm connected to a friend and the friend is connected to me

// 3. Weghted
//     - values can be applied to various aspects of the graph,not just the nodes
//     - would be used in google maps, to find quickets routee

// 4. Unweighted
//     - values only assigned to the node

// 5. cylcic
//     - cyclic graphs are common in weighted graphs
//     - you can travel in a circle - get back to the beginning

// 6. ascyclic
//     - there is no way to get back to the begining

// Directed Acyclic Graphs are often called DAG
// */

// // Three ways to think about building a graph

// // Edge list
// const edgeGraph = [
//   [0, 2],
//   [2, 3],
//   [2, 1],
//   [1, 3],
// ];

// // Adjacent List
// //  - in this implentation the index is the node and value is the nodes neighbors
// //  - can use obj, arr, linked lists
// //  - the index of the array is the value of the actual Graphnode

// /*
// in the index of the first item (0), 0 is connected to two
// in the idndex of 1, 1 is connected to 2 and three
// in the index of 2, 2 is connectd to 0,1, and 4
// in the index of 3, 3 is connected to 1, and 2 ????????
// */
// const adjacentGraph = [[2], [2, 3], [0, 1, 4], [1, 2]];

// /*
// Adjacent matrix
// */

// const adjacentMatrix = [
//   [0, 0, 1, 0],
//   [0, 0, 1, 1],
//   [1, 1, 0, 1],
//   [0, 1, 1, 0],
// ];

// const adjacentMatrix2 = {
//   0: [0, 0, 1, 0],
//   1: [0, 0, 1, 1],
//   2: [1, 1, 0, 1],
//   3: [0, 1, 1, 0],
// };

// // All of the above represent the same graph wieghted DAGa

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }
  addVertex(node) {
    // initialized to an empty array because the node will have no connections when it is first added
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }
  addEdge(node1, node2) {
    //unidirected Graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }
  showConnections() {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = "";
      let vertex;
      for (vertex of nodeConnections) {
        connections += vertex + " ";
      }
      console.log(node + "-->" + connections);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex("0");
myGraph.addVertex("1");
myGraph.addVertex("2");
myGraph.addVertex("3");
myGraph.addVertex("4");
myGraph.addVertex("5");
myGraph.addVertex("6");
myGraph.addEdge("3", "1");
myGraph.addEdge("3", "4");
myGraph.addEdge("4", "2");
myGraph.addEdge("4", "5");
myGraph.addEdge("1", "2");
myGraph.addEdge("1", "0");
myGraph.addEdge("0", "2");
myGraph.addEdge("6", "5");
myGraph.showConnections();
