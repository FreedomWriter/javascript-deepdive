class ArrStack {
  constructor() {
    this.array = [];
  }

  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this;
  }

  pop() {
    this.array.pop();
    return this;
  }
}

const myArrStack = new ArrStack();

console.log("push", myArrStack.push("first item"));
console.log("push", myArrStack.push("second item"));
console.log("push", myArrStack.push("third item"));
console.log("peek", myArrStack.peek());
console.log("pop", myArrStack.pop());
console.log("pop", myArrStack.pop());
console.log("pop", myArrStack.pop());
console.log("peek", myArrStack.peek());
