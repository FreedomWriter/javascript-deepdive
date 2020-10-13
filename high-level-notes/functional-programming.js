// console.log("FUNCTIONAL PROGRAMMING");

// /*
// To be pure a function must have
// -------------------------------
// - `referntial transparency` - given the same input, you will always get the same output
// - no `side effects`.

// function a and function b both have referential transparency. Function b, given number 5, or function a, given to itself two values which will evaluate to 5 and it will produce 500 in either case

// function a(num1, num2) {
//   return num1 + num2;
// }

// function b(num) {
//   return num * 100;
// }
// console.log(b(5));
// console.log(b(a(0, 5)));

// The goal isn't to write only pure functions, that's not possible, but instead you want to minimize side effects. This makes debugging easier, there are fewer places to hunt down where the error is comming from.

// A simple function should:
// -------------------------
// 1. Do one thing, and do it well.
// 2. Have a return statement
// 3. be pure
// 4. have no shared state
// 5. have Immutable state - we can modify, but we always return a new copy of the output, we never directly modify our global state
// 6. be composable
// 7. be predictable

// IDEMPOTENT
// ----------
// The idea of a function that always returns or does what we expect it to do. This differs from the idea of a pure function in that a function can be indempotent and not pure. A easy way to demonstrate this is to look at the following two functions:

// NOT idempotent: - we can not reasonably expect to know what this will return
//     const notGood = (num) => Math.random(num)

// idempotent, not pure:
//     const notGood1 =(num) => console.log(num)

// Because console.log logs to the window, it is affecting the world outside of itself, therefore it is not pure. However, it will log 5 as long as it is given 5. "Given the same input, it will produce the same output"

// Idempotence also has to do with the idea that you can call yourself, inside of yourself and still get the same result.

// idempotent: - no matter how many times you nest Math.abs() around -50, you will get 50 back
//   console.log(Math.abs(Math.abs(Math.abs(-50))));

// not indempotent: - will decrease by 50 each time it's called within itself
//   const helper = (num) => num - 50;
//   console.log(helper(helper(helper(100))));

// IMPERATIVE VS DECLARATIVE
// -------------------------

// Declarative says:

//     "hey, can you pass me that water bottle?"

// Imperative says:

//     "hey, can you "
//     1. lift your arm
//     2. move it towards my water bottle
//     3. grab my water bottle with your hand
//     4. move your hand towards me
//     5. release the water bottle into my hand

// And if we were being accurate, we would have to break each of those steps into the steps needed to accomplish those.

//     Imperative:
//       For loop

//     Declarative:
//       Array.forEach()
//       DOM Manipulation

//     Imperative:
//       tells not just what to do, but how to do it
//       React

//     Declarative:
//       tell it what to do

// IMMUTABILITY
// ------------

// in laymen's terms, immutability means not changing the state (data), but instead, making copies of the state and returning a new copy every time.
// */

// const objI = { name: "Change" };
// //immutablity:
// const newName = (objI, newName) => {
//   return { ...objI, name: newName };
// };

// //not following the principles of immutability:
// obj.name = "Mutated State";
// /*
// CURRYING
// -------
// The technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single argument.
// */
// const multiplyNoCurry = (a, b) => a * b;
// // because of closures, we have access to the a variable inside the function with the b variable
// const curriedMultiply = (a) => (b) => a * b;
// // console.log(curriedMultiply(5)(5));

// // this allows you to store "instances" of the curried function like below
// const curriedMultiplyBy5 = curriedMultiply(5);
// // console.log(curriedMultiplyBy5(10));
// // console.log(curriedMultiplyBy5(1));

// /*
// PARTIAL APPLICATION
// -------------------
// The process of producing a function with a smaller number of parameters.
// This means taking a function, applying some of it's arguments into the function (so they are stored in memory) and then uses closures to later on be called with the remaining arguments

// On the second call, I expect all the arguments
// */

// const multiplyP = (a, b, c) => a * b * c;
// // passes in the first parameter
// const partialMuliplyBy5 = multiplyP.bind(null, 5);
// // console.log(partialMuliplyBy5(4, 5));

// /*
// CACHING
// -------
// A way to store values in memory so you can use them later

// MEMOIZATION - is a specific form of caching
// ------------
// a way of storing the solution to a subproblem, so it doesn't have to be calculated again.

// */

// function addTo80(n) {
//   console.log("long running execution");
//   return n + 80;
// }

// // console.log(addTo80(5));
// // console.log(addTo80(5));
// // console.log(addTo80(5));

// // naive approach
// // let cache = {};

// // function memoizedAddTo80(n) {
// //   if (n in cache) {
// //     return cache[n];
// //   } else {
// //     console.log("long running execution");
// //     cache[n] = n + 80;
// //     return cache[n];
// //   }
// // }

// // We don't want cache in the global scope. This would render our function impure. So we use closure to move the cache into the body of the function. This also necessitates
// function memoizedAddTo80() {
//   let cache = {};
//   return function (n) {
//     if (n in cache) {
//       return cache[n];
//     } else {
//       console.log("long running execution");
//       cache[n] = n + 80;
//       return cache[n];
//     }
//   };
// }
// const memoized = memoizedAddTo80();

// // console.log(memoized(5));
// // console.log(memoized(5));
// // console.log(memoized(5));

// /*
// COMPOSE
// -----------

// The idea that any data transformation we perform should be obvious
// Evaluate the functions right to left

// so given:
//   compose(fn1, fn2, fn3)(50)
// it will be executed:
//   fn3(fn2(fn1(50)))

// */

// const multiplyBy3 = (num) => num * 3;
// const makePositive = (num) => Math.abs(num);
// // compose takes as it's parameter, two functions and returns a function
// // the returned function accepts data as it's parameter and then the first function, `f` is called with the evaluated value of `g` when given data to act upon
// const compose = (f, g) => (data) => f(g(data));
// // function compose(f1, f2) {
// //   return function (data) {
// //     return f1(f2(data));
// //   };
// // }

// const multiplyBy3AndAbsolute = compose(multiplyBy3, makePositive);

// // console.log(multiplyBy3AndAbsolute(-50));

// /*
// PIPE
// ----
// Just like compose, but the functions are ran in different order
// Evaluate left to right

// so given:
//   pipe(f3, f2, f1)(50)
// it will execute:
//   fn1(fn2(fn3(50)))

// */

// /*
// ARITY
// -----
// The number of arguments a function takes
// */
