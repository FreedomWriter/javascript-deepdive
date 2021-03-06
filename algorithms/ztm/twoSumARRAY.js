// console.log("TWO SUM - ARRAY'S");
// /*
// Given an array of integers, return the indices of the two numbers that add up to a given target
// */

// /*
// STEP ONE: VERIFY THE CONSTRAINTS
//     - can we assume positive integers?
//     - can we expect unique integers? (duplicates)
//     - will there always be a solution (will there always be a pair that adds up to the target)
//         - can the array be empty?
//         - if no, what should be returned?
//     - can there be multiple pairs that add up to the target

// STEP TWO - WRITE OUT SOME TEST CASES:
//     [1, 3, 7, 9, 2], target = 11
//     [1, 2, 3, 4, 5], target = 25
//     [], target = 3
//     [5], target = 8
//     [5], target = 5
//     [1,6], target = 7

// STEP THREE - COME UP WITH A SOLUTION WITHOUT CODE
//      0  1  2  3  4 - Indexes
//     [1, 3, 7, 9, 2], target = 11

//     brute force strategy
//     compare each number to every other number to see if they add up to the target
//     easiest way to accomplish is with two pointer technique

// */

// // My first pass
// function twoSum(arr, target) {
//   let p1, p2;

//   if (!arr.length > 1) {
//     return;
//   }
//   for (let i = 0; i < arr.length; i++) {
//     p1 = i;
//     p2 = i + 1;
//     if (target === arr[p1] + arr[p2]) {
//       return [p1, p2];
//     } else {
//       p2++;
//     }
//   }
//   return null;
// }

// console.log(twoSum([1, 3, 7, 9, 2], 11));

// // Video's first pass
// function twoSum2(arr, target) {
//   if (!arr.length > 1) {
//     return;
//   }
//   for (let p1 = 0; p1 < arr.length; p1++) {
//     const numToFind = target - arr[p1];
//     for (let p2 = p1 + 1; p2 < arr.length; p2++) {
//       if (arr[p2] === numToFind) {
//         return [p1, p2];
//       }
//     }
//   }
//   return null;
// }

// console.log("2", twoSum2([1, 3, 7, 9, 2], 11));

// function optTwoSum(arr, target) {
//   let solution = {};
//   if (arr.length && arr.length < 3) {
//     if (target === arr[0] + arr[1]) {
//       return [0, 1];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     const numToFind = target - arr[i];
//     solution[numToFind] = i;
//     if (solution[arr[i]]) {
//       return [solution[arr[i]], i];
//     }
//   }

//   return null;
// }

// console.log("OPTIMAL", optTwoSum([1, 3, 7, 9, 2], 11));

// function optTwoSum2(arr, target) {
//   let solution = {};

//   for (let i = 0; i < arr.length; i++) {
//     const currMapVal = solution[arr[i]];
//     if (currMapVal >= 0) {
//       return [currMapVal, i];
//     } else {
//       const numToFind = target - arr[i];
//       solution[numToFind] = i;
//     }
//   }

//   return null;
// }

// console.log("OPTIMAL2", optTwoSum2([1, 3, 7, 9, 2], 11));
