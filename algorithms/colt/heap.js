// console.log("HEAPS");

// /*
// FIND CHILDREN
// -------------
// For any index of n:
//     The left child is stored at index of 2n + 1
//     The right child is stored at index of 2n + 2

// FIND PARENT
// -----------
// For any child at index n:
//     parent is found at index Math.floor((n-1)/2)
// */

// class MaxBinaryHeap {
//   constructor() {
//     this.values = [];
//   }

//   bubbleUp() {
//     // create a variable called index which is the length of values - 1 (Grabs the last element in this.values, which is the newly inserted element)
//     let idx = this.values.length - 1;
//     // Grab the element
//     const element = this.values[idx];
//     // keep looping as long as the values at the parentIndex is less than the values element at the child index
//     while (idx > 0) {
//       // create a variable called parentIndex which is the floor of (index-1)/2
//       let parentIdx = Math.floor((idx - 1) / 2);
//       let parent = this.values[parentIdx];
//       if (element <= parent) {
//         break;
//       }

//       // swap the value of the element at the parentIndex with the value of the element property at the child index

//       this.values[parentIdx] = element;
//       this.values[idx] = parent;
//       // set the index to be the parentIndex and start over
//       idx = parentIdx;
//     }
//   }

// O(log n)
//   insertValue(val) {
//     // push the value into the values property on the heap
//     this.values.push(val);

//     // run bubbleUp
//     this.bubbleUp();
//   }

//   sinkDown() {
//     // Your parent index starts at 0 (the root)
//     let idx = 0;
//     // will help shorten code
//     let len = this.values.length;
//     let el = this.values[0];

//     // keep looping and swapping until neight child is larger than element
//     //return the old root
//     while (true) {
//       // find the index of the left child: 2 * index + 1 (make sure it's not out of boutnds)
//       let leftIdx = 2 * idx + 1;
//       // find the index of the right child: 2* index + 2 (make sure it's not out of bounds)
//       let rightIdx = 2 * idx + 2;
//       let leftChild, rightChild;
//       let swap = null;

//       // if the left or right child is greater than the element...swap if both left and right children are larger, swap with the largest child
//       if (leftIdx < len) {
//         leftChild = this.values[leftIdx];
//         if (leftChild > el) {
//           swap = leftIdx;
//         }
//       }

//       if (rightIdx < len) {
//         rightChild = this.values[rightIdx];
//         if (
//           (swap === null && rightChild > el) ||
//           (swap !== null && rightChild > leftChild)
//         ) {
//           swap = rightIdx;
//         }
//       }

//       if (swap === null) break;
//       this.values[idx] = this.values[swap];
//       this.values[swap] = el;
//       // the child index you swapped now becomes the parent index
//       idx = swap;
//     }
//   }

// O(log n)
//   extractMax() {
//     // grab a reference to the current max (the root)
//     const max = this.values[0];
//     // pop from the values property, so you can return the value at the end
//     const end = this.values.pop();
//     if (this.values.length > 0) {
//       // Swap the first value in the values property with the last one
//       this.values[0] = end;
//       // Have the new root "sink - down" to the correct spot
//       this.sinkDown();
//     }

//     return max;
//   }
// }

// let heap = new MaxBinaryHeap();
// heap.insertValue(41);
// heap.insertValue(39);
// heap.insertValue(18);
// heap.insertValue(27);
// heap.insertValue(12);
// heap.insertValue(55);
// console.log(heap.extractMax());
// // console.log(heap.extractMax());
// // console.log(heap.extractMax());
// // console.log(heap.extractMax());
// // console.log(heap.extractMax());
// // console.log(heap.extractMax());

// console.log(heap);
