// console.log("FUNCTIONAL PROGRAMMING EXERCISE");

// // // const jeff = {
// // //   name: "Jeff",
// // //   active: true,
// // //   cart: [],
// // //   purchases: [],
// // //   total: null,
// // // };

// // //Implement a cart feature:
// // //1. Add items to cart.
// // //2. Add 3% tax to item in cart.
// // //3. Buy item: cart --> purchases
// // //4. Empty cart

// // const addItemWithSideEffects = (item, user) => user.cart.push(item);

// // const addTaxWithSideEffects = (price) => price * 0.03;
// // const purchaseItemsWithSideEffects = (user) => {
// //   let runningTotal = 0;
// //   user.cart.forEach((cartItem) => {
// //     tax = addTaxWithSideEffects(cartItem.price);
// //     runningTotal += cartItem.price + tax;
// //     cartItem.price = {
// //       price: cartItem.price,
// //       tax,
// //     };
// //     user.purchases.push(cartItem);
// //   });
// //   user.cart = [];
// //   user.total = runningTotal;
// //   return user;
// // };

// // const refundItemWithSideEffects = (user, item) => {
// //   let newTotal = user.total;
// //   const purchases = user.purchases.filter((purchasedItem) => {
// //     if (purchasedItem.item !== item.item) {
// //       return purchasedItem;
// //     } else {
// //       newTotal -= purchasedItem.price.price + purchasedItem.price.tax;
// //     }
// //   });
// //   user.purchases = purchases;
// //   user.total = newTotal;
// // };

// // console.log(addItemWithSideEffects({ item: "udemy course", price: 5 }, jeff));
// // console.log(
// //   addItemWithSideEffects({ item: "egghead course", price: 15 }, jeff)
// // );
// // console.log(addItemWithSideEffects({ item: "kent course", price: 150 }, jeff));

// // console.log(purchaseItemsWithSideEffects(jeff));
// // console.log(
// //   refundItemWithSideEffects(jeff, { item: "udemy course", price: 5 })
// // );
// // console.log(jeff);

// const jeffDoesFunctional = {
//   name: "Jeff Does Functional",
//   active: true,
//   cart: [],
//   purchases: [],
// };

// // function purchaseItem(...fns) {
// //   return fns.reduce(compose);
// // }

// function purchaseItem(...fns) {
//   return fns.reduce(pipe);
// }
// function addItem(user, item) {
//   purchaseHistory.push(user);
//   const updateCart = [...user.cart, item];
//   return { ...user, cart: updateCart };
// }

// function applyTax(user) {
//   console.log("TAXING");
//   purchaseHistory.push(user);
//   const { cart } = user;
//   const taxRate = 1.3;
//   const updatedCart = cart.map((item) => {
//     return { name: item.name, price: item.price * taxRate };
//   });
//   return { ...user, cart: updatedCart };
// }

// function buyItem(user) {
//   purchaseHistory.push(user);
//   console.log("BUYING ITEM");
//   return { ...user, purchases: user.cart };
// }

// function emptyCart(user) {
//   purchaseHistory.push(user);
//   console.log("EMPTYING CART");
//   return { ...user, cart: [] };
// }

// function refundItem() {}

// const pipe = (f, g) => (...args) => g(f(...args));
// // const compose = (f, g) => (...args) => f(g(...args));
// const purchaseHistory = [];

// console.log(
//   purchaseItem(
//     addItem,
//     applyTax,
//     buyItem,
//     emptyCart
//   )(jeffDoesFunctional, {
//     name: "Laptop",
//     price: 200,
//   })
// );
// // console.log(
// //     purchaseItem(
// //   emptyCart,
// // buyItem,
// // applyTax,
// // addItem
// //     )(jeffDoesFunctional, {
// //       name: "Laptop",
// //       price: 200,
// //     })
// //   );
// console.log("original data: ", jeffDoesFunctional);
// console.log(purchaseHistory);
