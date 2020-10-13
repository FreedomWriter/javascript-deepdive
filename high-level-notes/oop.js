// console.log("OOP");
// /*
// In Object Oriented Programming (oop) an object is a box contianing information and operations that refer to the same concept

// In oop the data can be refered to as state

// 2 main types:
// - Prototype based
// - Class based
// */

// // naive approach - create an object
// // we would have to copy/paste to create new elf's
// // we do have encapsulation
// // we have state and methods acting on that state

// const naiveElf = {
//   name: "Naive Elf",
//   weapon: "bow",
//   attack() {
//     return "attack with " + naiveElf.weapon;
//   },
// };

// // console.log(naiveElf.name);
// // console.log(naiveElf.attack());

// // Factory function - a function that creates objects
// // we've avoided repetitive code
// // this isn't the most memory performant
// // instead of one instance of attack being stored in memory and used by each new instance of elf created by the function, attack is copied and stored for each instance of elf - if we had a billion elves (as one does) this would get costly

// function createElf(name, weapon) {
//   return {
//     name,
//     weapon,
//     attack() {
//       return "attack with " + weapon;
//     },
//   };
// }

// const factoryElf = createElf("Peter", "stones");

// // console.log(factoryElf.name);
// // console.log(factoryElf.attack());

// // naive approach to solving memory problem
// // this method allows us to have an oject of methods that can be given to elves.
// // the methods are only defined and stored once in memory and then extended to elves
// const elfFunctions = {
//   attack(weapon) {
//     return "elfFunction attack with " + weapon;
//   },
// };

// function createElf2(name, weapon) {
//   return {
//     name,
//     weapon,
//   };
// }

// const elfFunction = createElf2("Elf Function", "Dry Code");

// elfFunction.attack = elfFunctions.attack;
// // console.log(elfFunction.attack(elfFunction.weapon));

// // The above approach can be improved with Object.create
// // this approach creates a definitive link between elfFunctionStore and newElf created by createElf3
// // this is an example of true prototypal inheritance, however this approach is not standard or widely accepted by the js community
// // this wouldn't actually be considered OOP
// // this style (using Object.create()) is sometimes referred to as pure prototypal inheritance
// const elfFunctions2 = {
//   attack(weapon) {
//     return "elfFunction attack with " + weapon;
//   },
// };

// function createElf3(name, weapon) {
//   let newElf = Object.create(elfFunctions2);

//   newElf.name = name;
//   newElf.weapon = weapon;

//   return newElf;
// }

// const elfFunctionDryer = createElf3("Elf Function2", "Dryer Code");

// // console.log(elfFunctionDryer.attack(elfFunctionDryer.weapon));

// /*
// Constructor Functions

// requires the `new` keyword
// convention dictates that constructor functions begin with a capital letter as a signal to other devs that this is a constructor function that requires the use of the new keyword

// */

// function ConstructorElf(name, weapon) {
//   this.name = name;
//   this.weapon = weapon;
// }

// ConstructorElf.prototype.attack = function () {
//   return "Constructor attack: " + this.weapon;
// };

// const Bob = new ConstructorElf("Bob", "Constructor weapon");
// // console.log(Bob.name);
// // console.log(Bob.weapon);
// // console.log(Bob.attack());

// class Elf {
//   constructor(name, weapon) {
//     this.name = name;
//     this.weapon = weapon;
//   }
//   // methods are defined outside of the constructor to provide better space complexity - there is one attack methode shared by all instances. Attributes defined in the constructor are created and stored in unique memory locations for each instance.
//   attack() {
//     return this.name + " attacks with " + this.weapon;
//   }
// }

// // called subclassing
// class Smurf extends Elf {
//   constructor(name, weapon, home) {
//     // console.log(this);
//     //  will throw an error becuse in order to use this in a subclass, super needs to be called
//     super(name, weapon);
//     console.log(this);
//     this.home = home;
//   }

//   welcome() {
//     return `Welcome to my ${this.home}`;
//   }
// }

// const Alf = new Elf("Alf", "Cavities!");
// console.log(Alf.attack());

// const Brainy = new Smurf("Brainy", "Book Smarts!", "Toad Stool");
// console.log(Brainy.attack());
// console.log(Brainy.welcome());

// /*
// THIS keyword
// ------------

// 1. binding through the new keyword (new binding)
// 2. implicit binding - create an object, inside of that object, this will refer to the object
// 3. explicit binding - using .bind()
// 4. lexical scoping - arrow functions
// */
