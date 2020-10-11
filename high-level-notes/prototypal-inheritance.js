// console.log("PROTOTYPAL INHERITANCE");

// /*

// */

// // let dragon = {
// //   name: "Draggo",
// //   fire: true,
// //   fight() {
// //     return 5;
// //   },
// //   sing() {
// //     if (this.fire) {
// //       return `I am ${this.name}, the breather of fire`;
// //     }
// //   },
// // };

// // // console.log(dragon.sing());

// // let lizard = {
// //   name: "Lizzie",
// //   fight() {
// //     return 1;
// //   },
// // };

// // const singLizard = dragon.sing.bind(lizard);
// // // binding doesn't work in this case because the sing method is conditional, depending on the whether the object has the fire property
// // console.log(singLizard());

// // lizard.__proto__ = dragon;

// // // console.log(lizard.sing());
// // // console.log(lizard.fire);
// // // console.log(lizard.fight());
// // // console.log(dragon.isPrototypeOf(lizard));

// // for (let prop in lizard) {
// //   console.log(`All Properties: ${prop}`);
// //   if (lizard.hasOwnProperty(prop)) {
// //     console.log(`lizard.hasOwnProperty: ${prop}`);
// //   }
// // }

// let human = {
//   mortal: true,
// };

// let socrates = Object.create(human);
// socrates.age = 75;

// console.log(human);
// console.log(socrates);
// console.log(socrates.mortal);
// console.log(human.isPrototypeOf(socrates));

// Date.prototype.lastYear = function () {
//   return this.getFullYear() - 1;
// };
// console.log(new Date().lastYear());

// Array.prototype.map = function () {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(`${this[i]} MAPPPED!`);
//   }
//   return arr;
// };

// console.log([1, 2, 3, 4].map());
