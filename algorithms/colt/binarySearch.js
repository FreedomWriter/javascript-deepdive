// console.log("Binary Search");

// function binarySearch(arr, el) {
//   let start = 0;
//   let end = arr.length - 1;

//   while (start < end) {
//     let middle = Math.floor((start + end) / 2);

//     if (el === arr[middle]) {
//       return true;
//     } else if (el < arr[middle]) {
//       end = middle - 1;
//     } else if (el > arr[middle]) {
//       start = middle + 1;
//     }
//   }

//   return false;
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 15));
// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 115));

// function coltsBinarySearch(arr, el) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((start + end) / 2);

//   while (arr[middle] !== el && start <= end) {
//     if (el < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//   }
//   if (arr[middle] === el) {
//     return middle;
//   }
//   return -1;
// }

// console.log(coltsBinarySearch([2, 5, 6, 9, 13, 15, 28], 15));
// console.log(coltsBinarySearch([2, 5, 6, 9, 13, 15, 28], 155));
