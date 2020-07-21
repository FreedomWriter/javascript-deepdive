// /*
//     A singly linked list contains a list of linked nodes
//         - the nodes each have 2 elements, the node and the pointer
//         - each LL has a head and tail (though a single node can be the head and tail)
//         - a pointer is a reference to another point in memory
//         - LL are `null terminated`

//     Time Complexities for linked lists:
//         prepend o(1)
//         append o(1)
//         lookup o(n) AKA traversal
//         insert o(n)
//         delete o(n)
// */

// // // obj2 is a pointer to obj1 - they both point to the same location in memory

// // let obj11 = { a: true };
// // let obj22 = obj11;
// // obj11.a = "ta-dow";
// // delete obj11;
// // console.log({ obj11 });
// // console.log({ obj22 });

// // Misc note, in some low languages there is no garbage collection and values must be manually deleted from memory

// // BUILDING A LINKED LIST

// // let myLinkedList = {
// //   head: {
// //     value: 10,
// //     next: {
// //         value: 5,
// //         next: {
// //             value: 16,
// //             next: null
// //         }
// //     },
// //   }
// // };

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     // create the new node
//     const newNode = new Node(value);
//     // set the pointer of what used to be the tail so that it points to the new node
//     this.tail.next = newNode;
//     // now that the pointer of the old tail is pointing to the new node, overwrite the tail with the new node
//     this.tail = newNode;
//     // increment the length
//     this.length += 1;
//     // returning `this` returns our LL
//     return this;
//   }
//   prepend(value) {
//     // create the new node
//     const newNode = new Node(value);
//     // set the next on the newNode so the link isn't broken
//     newNode.next = this.head;
//     // replace the old head
//     this.head = newNode;
//     // increment the length
//     this.length++;
//     // return the LL
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode !== null) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }

//   traverseToIndex(index) {
//     // TODO: check params

//     let counter = 0;
//     //start at the head
//     let currentNode = this.head;
//     // loop through the LL until we find the node at the index we are looking for
//     while (counter !== index) {
//       // reassign currentNode to the next Node in the LL
//       currentNode = currentNode.next;
//       // increment the counter
//       counter++;
//     }
//     // once the counter reaches the index, we have found the node we are looking for and need to return it
//     return currentNode;
//   }

//   insert(index, value) {
//     // check parameters

//     // if the index provided is higher than the length of the LL we are just adding it to the end, might be better to provide user with an error message letting them know they have passed an invalid index
//     if (index >= this.length) {
//       return this.append(value);
//     }
//     // if the index provided is 0, we only need to prepend the value
//     if (index === 0) {
//       this.prepend(value);
//       return this.printList();
//     }

//     // create the new node
//     const newNode = new Node(value);
//     // traverse the LL and grab a reference to the leader (the node that is going to have it's index replaced and will ultimately point to our inserted node)
//     const leader = this.traverseToIndex(index - 1);
//     // grab a reference to the node our inserted node will need to point to
//     const holdingPointer = leader.next;
//     // update leader.next to point to our inserted node
//     leader.next = newNode;
//     // point the newNode to the holdingPointer
//     newNode.next = holdingPointer;
//     //   increment the length
//     this.length++;
//     // return the LL
//     return this;
//   }

//   remove(index) {
//     // check parameters

//     // if the index provided is higher than the length of the LL return an error message
//     if (index >= this.length) {
//       return "Invalid index";
//     }

//     // handle for user removing first index
//     if (index === 0) {
//       return (this.head = this.traverseToIndex(index + 1));
//     }

//     // find the node directly before the one we want to remove
//     const leader = this.traverseToIndex(index - 1);

//     const unwantedNode = leader.next;
//     // assign the leader.next to the follower
//     leader.next = unwantedNode.next;
//     // decrement length
//     this.length--;
//     // return the LL
//     return this;
//   }
// }

// const myLinkedList = new LinkedList(10);
// myLinkedList.append(5);
// myLinkedList.append(16);
// myLinkedList.prepend(16666);
// myLinkedList.insert(0, 10000);
// myLinkedList.insert(2222, 22222);
// myLinkedList.insert(1, 11111);
// myLinkedList.remove(0);
// // myLinkedList.insert(0, "insert at 0");
// // myLinkedList.insert(2222, "insert at a non-existent index");
// // myLinkedList.insert(1, "insert at 1");
// // console.log(myLinkedList.printList());
