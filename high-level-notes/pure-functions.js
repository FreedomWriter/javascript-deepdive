console.log("FUNCTIONAL PROGRAMMING");

/*
To be pure a function must have
-------------------------------
- `referntial transparency` - given the same input, you will always get the same output
- no `side effects`.

function a and function b both have referential transparency. Function b, given number 5, or function a, given to itself two values which will evaluate to 5 and it will produce 500 in either case

function a(num1, num2) {
  return num1 + num2;
}

function b(num) {
  return num * 100;
}
console.log(b(5));
console.log(b(a(0, 5)));



The goal isn't to write only pure functions, that's not possible, but instead you want to minimize side effects. This makes debugging easier, there are fewer places to hunt down where the error is comming from.

A simple function should:
-------------------------
1. Do one thing, and do it well.
2. Have a return statement
3. be pure
4. have no shared state
5. have Immutable state - we can modify, but we always return a new copy of the output, we never directly modify our global state
6. be composable
7. be predictable

IDEMPOTENT
----------
The idea of a function that always returns or does what we expect it to do. This differs from the idea of a pure function in that a function can be indempotent and not pure. A easy way to demonstrate this is to look at the following two functions:



idempotent, not pure:
    const notGood1 =(num) => console.log(num)

Because console.log logs to the window, it is affecting the world outside of itself, therefore it is not pure. However, it will log 5 as long as it is given 5. "Given the same input, it will produce the same output"

Idempotence also has to do with the idea that you can call yourself, inside of yourself and still get the same result.

idempotent: - no matter how many times you nest Math.abs() around -50, you will get 50 back
  console.log(Math.abs(Math.abs(Math.abs(-50))));

not indempotent: - will decrease by 50 each time it's called within itself
  const helper = (num) => num - 50;
  console.log(helper(helper(helper(100))));

Math.abs(Math.abs(-50))

*/

const notGood1 = (num) => Math.random(num);
const notGood2 = (num) => console.log(num);

const jeff = {
  name: "Jeff",
  active: true,
  cart: [],
  purchases: [],
  total: null,
};

const addItemWithSideEffects = (item, user) => user.cart.push(item);

const addTaxWithSideEffects = (price) => price * 0.03;
const purchaseItemsWithSideEffects = (user) => {
  let runningTotal = 0;
  user.cart.forEach((cartItem) => {
    tax = addTaxWithSideEffects(cartItem.price);
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

const refundItemWithSideEffects = (user, item) => {
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

// console.log(addItemWithSideEffects({ item: "udemy course", price: 5 }, jeff));
// console.log(
//   addItemWithSideEffects({ item: "egghead course", price: 15 }, jeff)
// );
// console.log(addItemWithSideEffects({ item: "kent course", price: 150 }, jeff));

// console.log(purchaseItemsWithSideEffects(jeff));
// console.log(
//   refundItemWithSideEffects(jeff, { item: "udemy course", price: 5 })
// );
// console.log(jeff);
