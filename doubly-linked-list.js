/* 
    A doubly linked list contains a list of linked nodes
        - links to both next and prev nodes

    Time Complexities for linked lists:
        prepend o(1)
        append o(1)
        lookup o(n) can techically be 0(n/2) but big o doesn't care about constants
        insert o(n)
        delete o(n)

    Doubly linked lists have a higher space complexity
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push({
        value: currentNode.value,
        prev: currentNode.prev ? currentNode.prev.value : null,
        next: currentNode.next ? currentNode.next.value : null,
      });
      currentNode = currentNode.next;
    }
    return array;
  }

  traverseToIndex(index) {
    // TODO: check params

    let counter = 0;
    //start at the head
    let currentNode = this.head;
    // loop through the LL until we find the node at the index we are looking for
    while (counter !== index) {
      // reassign currentNode to the next Node in the LL
      currentNode = currentNode.next;
      // increment the counter
      counter++;
    }
    // once the counter reaches the index, we have found the node we are looking for and need to return it
    return currentNode;
  }

  append(value) {
    // create the new node
    const newNode = new Node(value);

    // // set the prev (next is null by default) of newNode to the old tail
    newNode.prev = this.tail;
    // set the pointer of what used to be the tail so that it points to the new node
    this.tail.next = newNode;
    // now that the pointer of the old tail is pointing to the new node, overwrite the tail with the new node
    this.tail = newNode;
    // increment the length
    this.length += 1;
    // returning `this` returns our LL
    return this;
  }
  prepend(value) {
    // create the new node
    const newNode = new Node(value);
    // set the next on the newNode so the link isn't broken
    newNode.next = this.head;
    //set the prev on this.head
    this.head.prev = newNode;
    // replace the old head
    this.head = newNode;
    // increment the length
    this.length++;
    // return the LL
    return this;
  }

  insert(index, value) {
    // check parameters

    // if the index provided is higher than the length of the LL we are just adding it to the end, might be better to provide user with an error message letting them know they have passed an invalid index
    if (index >= this.length) {
      return this.append(value);
    }
    // if the index provided is 0, we only need to prepend the value
    if (index === 0) {
      return this.prepend(value);
    }

    // create the new node
    const newNode = new Node(value);
    // traverse the LL and grab a reference to the leader (the node that is going to have it's index replaced and will ultimately point to our inserted node and vice versa)
    const leader = this.traverseToIndex(index - 1);
    // grab a reference to the node our inserted node will need to point to
    const follower = leader.next;
    // set the newNodes next and prev
    newNode.next = follower;
    newNode.prev = leader;
    //update the follower.prev
    follower.prev = newNode;
    // update leader.next to point to our inserted node
    leader.next = newNode;
    //   increment the length
    this.length++;
    // return the LL
    return this;
  }

  remove(index) {
    // check parameters

    // if the index provided is higher than the length of the LL return an error message
    if (index >= this.length) {
      return "Invalid index";
    }

    if (index === this.length - 1) {
      const leader = this.traverseToIndex(index - 1);
      return (leader.next = null);
    }
    // handle for user removing first index
    if (index === 0) {
      return (this.head = this.traverseToIndex(index + 1));
    }

    // find the node directly before the one we want to remove
    const leader = this.traverseToIndex(index - 1);

    const unwantedNode = leader.next;
    // assign the leader.next to the follower
    const newNext = unwantedNode.next;
    leader.next = unwantedNode.next;
    newNext.prev = leader;
    // decrement length
    this.length--;
    // return the LL
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend("prepended value");
// myLinkedList.insert(0, 10000);
// myLinkedList.insert(2222, 22222);
// myLinkedList.insert(1, 11111);
// myLinkedList.remove(6);
// myLinkedList.insert(0, "insert at 0");
// myLinkedList.insert(2222, "insert at a non-existent index");
// myLinkedList.insert(1, "insert at 1");
console.log(myLinkedList.printList());
