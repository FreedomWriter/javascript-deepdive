// console.log("FACTORY METHOD");

// /*
// MOTIVATION
// ----------

// Object ccreation logic becomes to convoluted
// Initializer is not descriptive
//     name is alwasy __init__
//     cannot overload with same sets of arguments with differentnames
//     can turn into "optional parameter hell"
// Wholesale object creation(non-piecewise, unlike Builder) can be outsourced to
//     a separate method (Factory Method)
//     that may exist in a separate class (Factory)
//     Can create heirarchy of factories with Abstract Factory

// FACTORY
// -------

// A component responisble solely for the wholesale (not piecewise) creation of objects
// */
// // Factory Method
// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   static newCartesianPoint(x, y) {
//     return new Point(x, y);
//   }
// }

// ncp = Point.newCartesianPoint(5, 5);
// console.log(ncp);

// //Factory

// class PointFactory {}
