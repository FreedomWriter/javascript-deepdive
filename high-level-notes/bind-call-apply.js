const wizard = {
  name: "Merlin",
  health: 100,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

// console.log(wizard.heal(15, 35));

const archer = {
  name: "Robin Hood",
  health: 30,
};

// call allows you to `borrow1 methods and can be passed paramaters
// objectThatHasMethod.methodName.call(objectThatWantsToBorrowMethod, param, param)
// apply does a similiar thing except it takes an array of params instead of comma separated params

// console.log(archer.health);
// console.log(wizard.heal.call(archer, 50, 30));
// console.log(wizard.heal.apply(archer, [50, 30]));
// console.log(archer.health);

// bind returns a function which can be saved to a variable and invoked using the variable
const healArcher = wizard.heal.bind(archer, 50, 30);
// console.log(archer.health);
// console.log(healArcher());

// function currying with `bind`
function multiply(num1, num2) {
  return num1 * num2;
}

let muliplyByTwo = multiply.bind(this, 2);
// console.log(muliplyByTwo(6));

// challenge
const character = {
  name: "Simon",
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
// console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't

const giveMeTheCharacterNOWFixed = character.getCharacter.bind(character);

// console.log("?", giveMeTheCharacterNOWFixed());
