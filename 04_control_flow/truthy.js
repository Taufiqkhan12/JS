const userEmail = "taufiq@.com";

if (userEmail) {
  //   console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// 'false', '0', ' ', [], {}, function(){}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  //   console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;

// console.log(val1);

// ternary operator

// condition ? true : false

const iceTeaPrice = 70;
iceTeaPrice >= 80
  ? console.log("Ice tea greater than 80")
  : console.log("Less than 80");
