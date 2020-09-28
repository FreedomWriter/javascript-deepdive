console.log("PRIORITY QUEUE - WITH A HEAP");

/* 
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities
*/

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  enqueue(val, priority) {
    let newNode = new PQNode(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    let len = this.values.length;
    let el = this.values[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftIdx < len) {
        leftChild = this.values[leftIdx];
        if (leftChild.priority < el.priority) {
          swap = leftIdx;
        }
      }

      if (rightIdx < len) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild.priority < el.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }
}

class PQNode {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
    // to be used to handle ordering when two Nodes have the same priority
    this.insertTime = Date.now();
  }
}

let ER = new PriorityQueue();
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);
console.log(ER.dequeue());
// console.log(ER.dequeue());
// console.log(ER.dequeue());

console.log(ER);
