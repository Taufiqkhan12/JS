const user = {
  username: "Taufiq",
  price: 199,
  welcomeMessage: function () {
    console.log(`${this.username}, Welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "Sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let userName = "Taufiq";
//   console.log(this.userName);
// }

// chai();

// const chai = function () {
//   let userName = "Taufiq";
//   console.log(this.userName);
// };

// chai();

// const chai = () => {
//   let userName = "Taufiq";
//   console.log(this);
// };

// chai();

// const addTwo = (value1, value2) => {
//   return value1 + value2;
// };

// console.log(addTwo(2, 3));

const addTwo = (val1, val2) => val1 + val2;

console.log(addTwo(2, 3));
