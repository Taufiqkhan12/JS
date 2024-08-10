function sayMyName() {
  console.log("T");
  console.log("A");
  console.log("U");
  console.log("F");
  console.log("I");
  console.log("Q");
}

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }

function addTwoNumbers(num1, num2) {
  //     let result = num1+num2;
  //    return result;

  return num1 + num2;
}

const result = addTwoNumbers(1, 2);
// console.log("Result:", result);

function loginUserMessage(userName = "sam") {
  if (!userName) {
    console.log("Please enter a username");
    return;
  }
  return `${userName} Just Logged In`;
}

// console.log(loginUserMessage("Taufiq"));

function calculateCartPrice(...num1) {
  return num1;
}

// console.log(calculateCartPrice(100, 200, 873, 780));

const user = {
  username: "Taufiq",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "Sam",
  price: 399,
});

const myNewArray = [200, 300, 400];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400]));
