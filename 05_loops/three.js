// for of

// [" ", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
  //   console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  if (greet == " ") continue;
  // console.log(greet);
}

// Maps

const map = new Map();
map.set("IN", "INDIA");
map.set("USA", "United States of America");
map.set("KSA", "KINGDOM of SAUDI ARABIA");

// console.log(map);

for (const [key, value] of map) {
  console.log(key, ":", value);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const [key, value] of myObject) {
//   console.log(key, value);
// }
