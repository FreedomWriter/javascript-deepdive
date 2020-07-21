/* 
This:
    `this` is the object that the function is a property of
    NUMBER ONE REASON FOR `THIS` it gives methods access to their object
    NUMBEER TWO REASONFOR `THIS` we can execute the same code for multipleobjects
*/

const obj = {
  name: "Billy",
  sing: function () {
    return "lalala " + this.name;
  },
  speak() {
    return "Hi, my name is " + this.name;
  },
  singAgain() {
    return this.sing() + "!!";
  },
};

// console.log(obj.sing());
// console.log(obj.speak());
// console.log(obj.singAgain());

function importantPerson() {
  console.log(this.name + "!!");
}

const name = "The One";

const obj1 = {
  name: "Assata",
  importantPerson: importantPerson,
};

const obj2 = {
  name: "Chomsky",
  importantPerson: importantPerson,
};

// importantPerson();
// obj1.importantPerson();
