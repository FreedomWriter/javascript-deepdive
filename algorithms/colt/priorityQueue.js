console.log("PRIORITY QUEUE - WITH A HEAP");

/* 
A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities
*/

class MBH {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    \;
    const element = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) {
        break;
      }
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  insertValue(val) {
    this.values.push(val);
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
        if (leftChild > el) {
          swap = leftIdx;
        }
      }

      if (rightIdx < len) {
        rightChild = this.values[rightIdx];
        if (
          (swap === null && rightChild > el) ||
          (swap !== null && rightChild > leftChild)
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

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

let priorityQueue = new MBH();
priorityQueue.insertValue(41);
priorityQueue.insertValue(39);
priorityQueue.insertValue(18);
priorityQueue.insertValue(27);
priorityQueue.insertValue(12);
priorityQueue.insertValue(55);
console.log(priorityQueue.extractMax());
// console.log(priorityQueue.extractMax());
// console.log(priorityQueue.extractMax());
// console.log(priorityQueue.extractMax());
// console.log(priorityQueue.extractMax());
// console.log(priorityQueue.extractMax());

console.log(priorityQueue);
