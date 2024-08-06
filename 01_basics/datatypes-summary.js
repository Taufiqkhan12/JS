// Primitive

// 7 types: String, Number, Boolean, null, Undefined, Symbol, BigInt

// Reference (Non-Primitive)

// Array, Object, Function

// ************************ Memory Types *******************************

// Stack (Primitive), Heap (Non-Primitive)

let myName = "Taufiq";
let anotherName = myName;
anotherName = " Khan";

console.log(myName);
console.log(anotherName);

let userOne = {
  email: "taufiq@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;
userTwo.email = "khan@.com";

console.log(userOne);
console.log(userTwo);
