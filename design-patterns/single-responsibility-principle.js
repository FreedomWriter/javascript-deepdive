console.log("SINGLE RESPONSIBILITIY PRINCIPLE");

/*
SOLID Design Principles
- Set of design principles introduced by Robert C. Martin (aka Uncle Bob 🥴)

Single Responsibility Principle
- a class should have a single responsiblity and should only have one reason to change, when it directly relates to that responsibility
*/

// This journal is handling it's primary responbility, which is to entries
class Journal {
  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++Journal.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(i) {
    delete this.entries[i];
  }

  toString() {
    return Object.values(this.entries).join("\n");
  }
}
Journal.count = 0;

let j = new Journal();
j.addEntry("I cried today");
j.addEntry("I ate a bug");
console.log(j.toString());

// Now imagine you want to save the journal, it would be tempting to add the method to Journal, then you may want to add a load file method, and a variety of other methods related to files, now there are to many responsiblities.

// You should, instead create a new class

class PersistanceManager {
  preprocessing(j) {
    //do stuff
    console.log(`Preprocessed ${j}`);
  }

  saveToFile(journal, filename) {
    //do stuff
    console.log(`Saved ${journal} as ${filename}`);
  }
}

let p = new PersistanceManager();
p.saveToFile("my Journal", "saved.journal");
p.preprocessing(j);

/* 

There is an anti-pattern that stands in opposition to the Single Responsibliity Principle, which is the God Object. The God Object is basically a huge object that has a ton of responsibliities.

that makes debugging really difficult. Single Responsibility Principle feels closely connected to "seperation of concerns"

*/
