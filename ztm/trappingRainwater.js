// console.log("TRAPING RAINWATER");

// /*
// Given an arraw of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped

//  0  1  2  3  4  5  6  7  8  9  10
// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]

// STEP ONE - VERIFY THE CONSTRAINTS
// ---------------------------------

// - Do the sides of the graph count as walls?
//  - No

// - Will there be negative integers?
//     - No

// STEP TWO - WRITE OUT SOME TEST CASES
// ------------------------------------

//  0  1  2  3  4  5  6  7  8  9  10
// [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2] = 8
// [] = 0
// [3] = 0
// [3,4,3] = 0
// [5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]

// STEP THREE - SOLVE WITHOUT CODE
// -------------------------------

// currWater = min(maxL, maxR) - curHeight
// */

// function trapping(heights) {
//   // will keep track of how much water we've found and be our return value
//   let totalWater = 0;
//   let leftP, rightP, maxLeft, maxRight, curWater;
//   // loop over the array
//   for (let p = 0; p < heights.length; p++) {
//     leftP = p;
//     rightP = p;
//     maxLeft = 0;
//     maxRight = 0;

//     // find the maxLeft value
//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, heights[leftP]);
//       leftP--;
//     }
//     // find the maxRight value
//     while (rightP < heights.length) {
//       maxRight = Math.max(maxRight, heights[rightP]);
//       rightP++;
//     }
//     // curWater represents the amount of water above the current position
//     curWater = Math.min(maxLeft, maxRight) - heights[p];
//     // as long as current water is greater than zero (non negative), add it to the total
//     if (curWater >= 0) {
//       totalWater += curWater;
//     }
//   }

//   return totalWater;
// }

// console.log(trapping([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
// console.log(trapping([]));
// console.log(trapping([3]));
// console.log(trapping([3, 4, 3]));
// console.log(trapping([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]));

// function trappingOptimized(heights) {
//   let left = 0,
//     right = heights.length - 1,
//     totalWater = 0,
//     maxLeft = 0,
//     maxRight = 0;

//   while (left < right) {
//     if (heights[left] <= heights[right]) {
//       if (heights[left] >= maxLeft) {
//         maxLeft = heights[left];
//       } else {
//         totalWater += maxLeft - heights[left];
//       }
//       left++;
//     } else {
//       if (heights[right] >= maxRight) {
//         maxRight = heights[right];
//       } else {
//         totalWater += maxRight - heights[right];
//       }

//       right--;
//     }
//   }

//   return totalWater;
// }

// console.log(trappingOptimized([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]));
// console.log(trappingOptimized([]));
// console.log(trappingOptimized([3]));
// console.log(trappingOptimized([3, 4, 3]));
// console.log(trappingOptimized([5, 0, 3, 0, 0, 0, 2, 3, 4, 2, 1]));
