console.log("GRAPHS");

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    } else {
      return `Vertex '${vertex}' alread exists!`;
    }
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      return `Cannot add edge, please verify both vertexes exist in the graph`;
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
      this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
    } else {
      return `Cannot remove, please enter a valid edge`;
    }
  }

  removeVertex(vertex) {
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
  }

  dftRecursive(start) {
    // should accept a starting node
    // create a list to store the end result, to be returned at end
    let result = [];
    // create an object to store visited
    let visited = {};
    // create a helper function which accepts a vertex

    // this would not be defined in the iffe
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      // should return early if the vertex is empty - base case
      if (!vertex) {
        return;
      }
      // should place the vertex it's given into the visited obj and push that vertex into the results array
      if (!visited[vertex]) {
        visited[vertex] = true;
      }
      result.push(vertex);
      // loop over all of the values in the adjacencyList for that vertex (neighbors)
      for (const neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          // if not visited, recursively invoke the helper function with that vertex
          dfs(neighbor);
        }
      }
    })(start);

    return result;
  }

  // dftIterative(start) {
  //   // accepts a starting node
  //   // create a stack - can use array
  //   const stack = [];
  //   // create a list to store result and be returned
  //   const result = [];
  //   // create an object to track visited
  //   const visited = {};
  //   // defining current outside the scope of the while loop so that it doesn't have to be redefined during each iteration
  //   let current;
  //   // THIS ABUSED THE STACK
  //   // add starting vertex to the stack and mark it as visited
  //   stack.push(start);
  //   // if (!visited[start]) {
  //   //   visited[start] = true;
  //   // }
  //   // while the stack has something in it
  //   while (stack.length !== 0) {
  //     // pop the next vertex from the stack
  //     console.log(stack);
  //     current = stack.pop();
  //     // if not visited
  //     if (!visited[current]) {
  //       // mark as visited
  //       visited[current] = true;
  //       // add it to results
  //       result.push(current);
  //       // push all neighbors into stack
  //       //WAS ADDING ALL NEIGHBORS TO STACK, REGARDLESS OF WHETHER THEY HAD BEEN VISITED
  //       this.adjacencyList[current].forEach((neighbor) => stack.push(neighbor));
  //     }
  //   }

  //   return result;
  // }

  dftIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let current;

    visited[start] = true;

    visited[start] = true;
    while (stack.length) {
      // console.log(stack);
      current = stack.pop();

      // add it to results
      result.push(current);

      this.adjacencyList[current].forEach((neighbor) => {
        // if not visited
        if (!visited[neighbor]) {
          // mark as visited
          visited[neighbor] = true;
          // push all neighbors into stack
          stack.push(neighbor);
        }
      });
    }

    return result;
  }

  bft(start) {
    // accepts a starting vertex
    // create a queue (can use a list) and place the starting vertex in it
    const stack = [start];
    // create a list to store the nodes visited, to be returned
    const result = [];
    // create an object to track whether the nodes have been visited
    const visited = {};
    let current;

    // mark the starting vertex as visited
    visited[start] = true;

    visited[start] = true;
    // while there is something in the queue
    while (stack.length) {
      // console.log(stack);
      // take the first item out
      current = stack.shift();

      // add it to results
      result.push(current);

      // for all the neighbors
      this.adjacencyList[current].forEach((neighbor) => {
        // if not visited
        if (!visited[neighbor]) {
          // mark as visited
          visited[neighbor] = true;
          // push all neighbors into stack
          stack.push(neighbor);
        }
      });
    }

    return result;
  }
}

g = new Graph();

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
console.log(g.adjacencyList);
console.log(g.dftRecursive("A"));
console.log(g.dftIterative("A"));
console.log(g.bft("A"));
