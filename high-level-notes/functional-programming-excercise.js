console.log("FUNCTIONAL PROGRAMMING EXERCISE");

// const jeff = {
//   name: "Jeff",
//   active: true,
//   cart: [],
//   purchases: [],
//   total: null,
// };

// const addItemWithSideEffects = (item, user) => user.cart.push(item);

// const addTaxWithSideEffects = (price) => price * 0.03;
// const purchaseItemsWithSideEffects = (user) => {
//   let runningTotal = 0;
//   user.cart.forEach((cartItem) => {
//     tax = addTaxWithSideEffects(cartItem.price);
//     runningTotal += cartItem.price + tax;
//     cartItem.price = {
//       price: cartItem.price,
//       tax,
//     };
//     user.purchases.push(cartItem);
//   });
//   user.cart = [];
//   user.total = runningTotal;
//   return user;
// };

// const refundItemWithSideEffects = (user, item) => {
//   let newTotal = user.total;
//   const purchases = user.purchases.filter((purchasedItem) => {
//     if (purchasedItem.item !== item.item) {
//       return purchasedItem;
//     } else {
//       newTotal -= purchasedItem.price.price + purchasedItem.price.tax;
//     }
//   });
//   user.purchases = purchases;
//   user.total = newTotal;
// };

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
