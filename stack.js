/*

Stacks are LIFO (Last in first out) like a stack of plates

lookup (find an item) O(n)
pop (remove first item) O(1)
push (add item to top of stack) O(1)
peek (look at first item - which is the last item added) O(1)

Array's might be the right choice for a stack, depending on how you will need to use the stack
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    const holdingPointer = this.top;
    this.top = this.top.next;
    this.length--;
    return holdingPointer;
  }
}

const myStack = new Stack();
console.log(myStack.peek());
console.log(myStack.push("first stack item"));
console.log(myStack.push("second stack item"));
console.log(myStack.push("third stack item"));
console.log("peek ", myStack.peek());
console.log("pop ", myStack.pop());
console.log("peek ", myStack.peek());
