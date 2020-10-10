// console.log("CLOSURES");

// /*
// Closure is a combination of function and the lexical environment it was declared.
// Closures allow a function to access variables from an enclosing scope or environment even after it leaves the scope in which it was declared
// */

// // function improveMemory() {
// //   const bigArr = new Array(7000).fill(":(");
// //   console.log("created!!");
// //   // defining and returning this function makes sure that if we call the outer function several times, bigArr won't need to be create each time IF WE ASSIGN THE FUNCTION TO A CALLBACK. Since the inner function references it, it will not be garbage collected. Note the way it must be invoked
// //   return function (index) {
// //     return console.log(bigArr[index]);
// //   };
// // }

// // function improveMemory() {
// //   const bigArr = new Array(7000).fill(":(");
// //   console.log("created!!");
// //   // defining and returning this function makes sure that if we call the outer function several times, bigArr won't need to be create each time IF WE ASSIGN THE FUNCTION TO A CALLBACK. Since the inner function references it, it will not be garbage collected. Note the way it must be invoked
// //   function wow(index) {
// //     return console.log(bigArr[index]);
// //   }
// //   return wow;
// // }

// // // bigArr is only defined once for the instances where the function is assigned to getImproveMemory - we will only see the console.log once
// // const getImproveMemory = improveMemory();
// // getImproveMemory(6);
// // getImproveMemory(6);
// // getImproveMemory(6);
// // // each time the function is invoked this way, bigArr is defined and created again - and we will see the console.log each time
// // improveMemory()(6);
// // improveMemory()(6);
// // improveMemory()(6);
// // improveMemory()(6);
// // improveMemory()(6);
// // getImproveMemory(6);
// // getImproveMemory(6);

// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;
//   const passTime = () => timeWithoutDestruction++;
//   const totalPeaceTime = () => timeWithoutDestruction;
//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return "boom";
//   };
//   setInterval(passTime, 1000);
//   return {
//     totalPeaceTime: totalPeaceTime,
//   };
// };

// const ohno = makeNuclearButton();
// console.log(ohno.totalPeaceTime());

// function initialize() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       return "ALREADY INITIALIZED!!!!";
//     } else {
//       called++;
//       return "INITIALIZED!!!!";
//     }
//   };
// }
// let runInitialize = initialize();
// console.log(runInitialize());
// console.log(runInitialize());
// console.log(runInitialize());

// const arr = [1, 2, 3, 4];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(
//       `I'm at index ${i}, since var is globally scoped, this is all you get`
//     );
//   }, 3000);
// }

// for (let i = 0; i < arr.length; i++) {
//   setTimeout(function () {
//     console.log(
//       `I'm at index ${i}, since let is blocked scoped, I kept the value of i at each iteration`
//     );
//   }, 3000);
// }

// for (var i = 0; i < arr.length; i++) {
//   (function (closureI) {
//     setTimeout(function () {
//       console.log(
//         `I'm at index ${closureI}, with var, but this time I used closure`
//       );
//     }, 1000);
//   })(i);
// }
