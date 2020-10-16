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
