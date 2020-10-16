console.log("MODULES");

/*
What are modules?

*/

// tight coupling means everything is connected really tightly

//Module Pattern

const fightModule = (function () {
  const harry = "potter";
  const voldermort = "evil";

  function fight(char1 = harry, char2 = voldermort) {
    let attack1 = Math.floor(Math.random() * char1.length);
    let attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} wins` : `${char2} wins`;
  }
  //revealing module pattern
  return {
    fight: fight,
  };
})();

console.log(fightModule.fight("natalie", "no"));
console.log(fightModule.fight());

/*
CommonJS and AMD (asynchronous module definition)
this is what I'm familiar with through node
*/

// const api = require("api");

// function someFunc() {}

// module.exports = {
//   someFunc,
// };

// Modules are meant to be loaded synchronously- which works fine in node but not ideal for browser use

// AMD looks like this:
// designed specifically for the browser to load scripts or modules asynchronously

// define(["module1", "module2"], function (module1Import, module2Import) {
//   let module1 = module1Import; //.fight;
//   let module2 = module2Import; // .importedFunc2

//   function dance() {
//     //do stuff
//   }
//   return {
//     dance: dance,
//   };
// });
