const myNums = [1, 2, 3, 4];
const initialValue = 0;
const myTotal = myNums.reduce((accumulator, currentValue) => {
  //   console.log(`acc:${accumulator} and currval:${currentValue}`);
  return accumulator + currentValue;
}, initialValue);

// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const cartTotal = shoppingCart.reduce((accumulator, currentItem) => {
  return accumulator + currentItem.price;
}, 0);

console.log(cartTotal);
