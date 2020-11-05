// console.log("TYPED OUT STRINGS");

// /*
// Given two strings S and T, return if they equal when both are typed out. Any "#" that appears in the string counts as a backspace

// VERIFY CONSTRAINTS
// ------------------
// What happens when two #'s appear beside each other?
//     - delete the two values before the first #

// What happens to # when there is no character to remove?
//     - it deletes nothing, just like a backspace would behave

// Are two empty strings equal to each other?
//     - yes, consider two empty strings as equal

// Does case sensitivity matter?
//     - yes, "A" !== "a"

// TEST CASES
// ----------
// s: "ab#z"
// t: "az#z"
// returns true

// s: "abc#d"
// t: "acc#c"
// returns false

// s: "x#y#z#"
// t: "a#"
// returns true (2 empty strings)

// s: "a###b"
// t: "b"
// returns true

// s: "Ab#z"
// t: "az#z"
// returns false

// */

// function typedOutStrings(s, t) {
//   function convert(string) {
//     let finalString = "";
//     for (let i = 0; i < string.length; i++) {
//       if (string[i + 1] !== "#") {
//         if (string[i] !== "#") {
//           finalString = finalString + string[i];
//         }
//       }
//     }
//     return finalString;
//   }
//   sFinal = convert(s);
//   tFinal = convert(t);
//   //   console.log("sFinal: ", sFinal, " tFinal: ", tFinal);
//   return sFinal === tFinal;
// }

// console.log("mine: ", typedOutStrings("ab#z", "az#z"));
// console.log("mine: ", typedOutStrings("abc#d", "acc#c"));
// console.log("mine: ", typedOutStrings("Ab#z", "az#z"));
// console.log("mine: ", typedOutStrings("a###b", "b"));

// function buildString(string) {
//   const builtArr = [];

//   for (let p = 0; p < string.length; p++) {
//     if (string[p] !== "#") {
//       builtArr.push(string[p]);
//     } else {
//       builtArr.pop();
//     }
//   }
//   return builtArr;
// }

// function backspaceCompare(s, t) {
//   const finalS = buildString(s);
//   const finalT = buildString(t);

//   if (finalS.length !== finalT.length) {
//     return false;
//   } else {
//     for (let p = 0; p < finalS.length; p++) {
//       if (finalS[p] !== finalT[p]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(backspaceCompare("ab#z", "az#z"));
// console.log(backspaceCompare("abc#d", "acc#c"));
// console.log(backspaceCompare("Ab#z", "az#z"));
// console.log(backspaceCompare("a###b", "b"));
