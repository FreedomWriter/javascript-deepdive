// console.log("RECURSION");

// function countDown(num) {
//   if (num <= 0) {
//     console.log("all done");
//     return;
//   }
//   console.log(num);
//   num--;
//   countDown(num);
// }

// // countDown(5);

// function sumRange(num) {
//   if (num === 1) {
//     return 1;
//   }
//   console.log(`num: ${num},  num - 1: ${num - 1}`);
//   return num + sumRange(num - 1);
// }

// // console.log(sumRange(3));

// // Factorial
// // !4 is equivalent to 4 * 3 * 2 * 1

// function factorial(num) {
//   if (num === 1) {
//     return 1;
//   }

//   return num * factorial(num - 1);
// }

// // console.log(factorial(4));

// function collectOddVals(arr) {
//   let result = [];

//   function helper(input) {
//     if (input.length === 0) {
//       return;
//     }

//     if (input[0] % 2 !== 0) {
//       result.push(input[0]);
//     }

//     helper(input.slice(1));
//   }

//   helper(arr);
//   return result;
// }

// // console.log(collectOddVals([0, 1, 2, 3, 4, 5]));

// function pureCollectOdds(arr) {
//   let newArr = [];
//   if (arr.length === 0) return newArr;
//   if (arr[0] % 2 !== 0) {
//     newArr.push(arr[0]);
//   }
//   // this concat's the return value of calling pureCollectOdds.
//   newArr = newArr.concat(pureCollectOdds(arr.slice(1)));
//   return newArr;
// }

// // console.log(pureCollectOdds([0, 1, 2, 3, 4, 5]));

// function power(base, exponent) {
//   let result = base;
//   if (exponent === 0) return 1;

//   function helper(expoHelper) {
//     if (expoHelper === 1) return;
//     result = result * base;
//     helper(expoHelper - 1);
//   }
//   helper(exponent);
//   return result;
// }

// function productOfArray(arr) {
//   let result = 1;

//   function helper(helperArr) {
//     if (helperArr.length === 0) {
//       return result;
//     }
//     result *= helperArr[0];

//     helper(helperArr.slice(1));
//   }

//   helper(arr);

//   return result;
// }

// // console.log(productOfArray([1, 2, 3])); // 6
// // console.log(productOfArray([1, 2, 3, 10])); // 60

// function fib(num) {
//   // add whatever parameters you deem necessary - good luck!
//   if (num <= 2) return 1;

//   return fib(num - 1) + fib(num - 2);
// }

// // console.log(fib(4)); // 3
// // console.log(fib(10)); // 55
// // fib(28) // 317811
// // fib(35) // 9227465
