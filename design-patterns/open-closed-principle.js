// console.log("OPEN CLOSED PRINCIPLE");

// /*
//  Objects are open for extention but closed for modification
//  - Once a class is defined and has been tested and put into production, you don't modify
//  - Instead you extend it

// */

// let Color = Object.freeze({
//   red: "red",
//   green: "green",
//   blue: "blue",
// });

// let Size = Object.freeze({
//   small: "small",
//   medium: "medium",
//   large: "large",
// });

// class Product {
//   constructor(name, color, size) {
//     this.color = color;
//     this.name = name;
//     this.size = size;
//   }
// }

// class ProductFilter {
//   // original method when this class went to "production"
//   filterByColor(products, color) {
//     return products.filter((p) => p.color === color);
//   }

//   // methods the boss wanted added after this class went to "production"

//   /*
//   continuing to add methods like this will lead to evental `state space explosion`
//   - imagine you are asked next to add  `filterbySizeOrColor`
//   - next you might be asked to filter by by 3 criteria filtered by all combinations of those criteria - would lead to 7 diff methods
//   - this isn't practical, you need a different architectural structure
//   Specification Pattern
//   - in this case we would specify a separate class which defines that sort of filtering
//   */
//   filterBySize(products, size) {
//     return products.filter((p) => p.size === size) && p.color === color;
//   }

//   filterBySizeAndColor(products, size, color) {
//     return products.filter((p) => p.size === size);
//   }
// }

// /* **************************** SPECIFICATIONS START **************************** */

// // This base class isn't really needed in js but other languages utilize a base class
// // class Specification {
// //     constructor() {
// //         // this is "forcing abstraction" since js doesn't actually have native abstraction. This prevents Specification from being called directly
// //         if (this.constructor.name == "Specification") {
// //             throw new Error("Specification is abstract!")
// //         }
// //     }

// //     isSatisfied(item) {}
// // }

// class ColorSpecification {
//   constructor(color) {
//     this.color = color;
//   }

//   isSatisfied(item) {
//     return item.color === this.color;
//   }
// }

// class SizeSpecification {
//   constructor(size) {
//     this.size = size;
//   }

//   isSatisfied(item) {
//     return item.size === this.size;
//   }
// }

// /* **************************** SPECIFICATIONS END **************************** */

// /* **************************** COMBINATOR START **************************** */

// // and specification because it must meet condition 1 AND condition 2, etc.
// class AndSpecification {
//   constructor(...specs) {
//     this.specs = specs;
//   }

//   isSatisfied(item) {
//     return this.specs.every((x) => x.isSatisfied(item));
//   }
// }
// /* **************************** COMBINATOR END **************************** */

// /* **************************** BETTER FILTER START **************************** */
// class BetterFilter {
//   filter(items, spec) {
//     return items.filter((x) => spec.isSatisfied(x));
//   }
// }

// /* **************************** BETTER FILTER END **************************** */
// let bf = new BetterFilter();

// let apple = new Product("Apple", Color.green, Size.small);
// let tree = new Product("Tree", Color.green, Size.large);
// let house = new Product("House", Color.blue, Size.large);

// let products = [apple, tree, house];

// let pf = new ProductFilter();
// console.log("Green products (old):");

// for (let p of pf.filterByColor(products, Color.green)) {
//   console.log(` * ${p.name} is ${p.color}`);
// }

// console.log(`Green products (new)`);
// for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
//   console.log(` * ${p.name} is ${p.color}`);
// }

// console.log(`Large and Green products (combinator):`);
// let spec = new AndSpecification(
//   new ColorSpecification(Color.green),
//   new SizeSpecification(Size.large)
// );
// for (let p of bf.filter(products, spec)) {
//   console.log(` * ${p.name} is ${p.color} and ${p.size}`);
// }
