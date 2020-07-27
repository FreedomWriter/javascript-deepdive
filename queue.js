/*

Queues are FIFO (like a line, the first person gets to go first)

lookup O(n)
enqueue (push) - add an item O(1)
dequeue (pop) - remove the first item O(1)
peek - look at the first item in the list O(1)

Array's will never be the right choice for queues

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class QueueImplementaton {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const myQueueImplementaton = new QueueImplementaton();
// console.log(myQueueImplementaton.peek());
// console.log(myQueueImplementaton.enqueue("first QueueImplementaton item"));
// console.log(myQueueImplementaton.enqueue("second QueueImplementaton item"));
// console.log(myQueueImplementaton.enqueue("third QueueImplementaton item"));
// console.log("peek ", myQueueImplementaton.peek());
// console.log("dequeue ", myQueueImplementaton.dequeue());
// console.log("peek ", myQueueImplementaton.peek());
// console.log("dequeue ", myQueueImplementaton.dequeue());
// console.log("dequeue ", myQueueImplementaton.dequeue());
// console.log("peek ", myQueueImplementaton.peek());
