console.log("FUNCTIONAL PROGRAMMING");

const jeff = {
  name: "Jeff",
  active: true,
  cart: [],
  purchases: [],
  total: null,
};

const addItem = (item, user) => user.cart.push(item);

const addTax = (price) => price * 0.03;
const purchaseItems = (user) => {
  let runningTotal = 0;
  user.cart.forEach((cartItem) => {
    tax = addTax(cartItem.price);
    runningTotal += cartItem.price + tax;
    cartItem.price = {
      price: cartItem.price,
      tax,
    };
    user.purchases.push(cartItem);
  });
  user.cart = [];
  user.total = runningTotal;
  return user;
};

const refundItem = (user, item) => {
  let newTotal = user.total;
  const purchases = user.purchases.filter((purchasedItem) => {
    if (purchasedItem.item !== item.item) {
      return purchasedItem;
    } else {
      newTotal -= purchasedItem.price.price + purchasedItem.price.tax;
    }
  });
  user.purchases = purchases;
  user.total = newTotal;
};

console.log(addItem({ item: "udemy course", price: 5 }, jeff));
console.log(addItem({ item: "egghead course", price: 15 }, jeff));
console.log(addItem({ item: "kent course", price: 150 }, jeff));

console.log(purchaseItems(jeff));
console.log(refundItem(jeff, { item: "udemy course", price: 5 }));
console.log(jeff);
