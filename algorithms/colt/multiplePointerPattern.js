// console.log("MULTIPLE POINTER PATTERN");

// /*
// Sum Zero
// ---------
// Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist. */

// function naiveSumZero(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// }
// // console.log(naiveSumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
// // console.log(naiveSumZero([-2, 0, 1, 3])); //undefined
// // console.log(naiveSumZero([1, 2, 3])); //undefined

// function sumZero(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   // left has to be less than right not less than or equal to right. <= would return a false positive
//   while (left < right) {
//     let sum = arr[left] + arr[right];
//     if (sum === 0) {
//       return [arr[left], arr[right]];
//     } else if (sum > 0) {
//       right--;
//     } else {
//       left++;
//     }
//   }
// }

// // console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); //[-3,3]
// // console.log(sumZero([-2, 0, 1, 3])); //undefined
// // console.log(sumZero([1, 2, 3])); //undefined

// /*
// Count Unique Values
// --------------------
// Implement a function called countUniqueValues, which accepts a sorted array, and count the unique alues in the array. There can be negative numbers in the array, but it will always be sorted
// */
// function countUniqueValues(arr) {
//   let uniqueHashMap = new Set();

//   for (let i = 0; i < arr.length; i++) {
//     uniqueHashMap.add(arr[i]);
//   }

//   return uniqueHashMap.size;
// }

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

// // only works on a sorted array O(n)
// function countUniqueValuesWithTwoPointers(arr) {
//   let i = 0;
//   if (!arr.length) return 0;
//   for (let j = 1; j < arr.length; j++) {
//     if (arr[i] !== arr[j]) {
//       i++;
//       arr[i] = arr[j];
//     }
//     // console.log(i, j);
//   }
//   return i + 1;
// }

// console.log(countUniqueValuesWithTwoPointers([1, 1, 1, 1, 1, 2])); // 2
// console.log(
//   countUniqueValuesWithTwoPointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])
// ); // 7
// console.log(countUniqueValuesWithTwoPointers([])); // 0
// console.log(countUniqueValuesWithTwoPointers([-2, -1, -1, 0, 1])); // 4
