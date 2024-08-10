// var c = 300;

let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log(a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Taufiq";

  function two() {
    const website = "Youtube";
    // console.log(username);
  }
  //   console.log(website);
  two();
}

one();

if (true) {
  const username = "Taufiq";
  if (username === "Taufiq") {
    const website = " Youtube";
    // console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);

console.log(addOne(5));

function addOne(value) {
  return value + 1;
}

const addTwo = function (value) {
  return value + 2;
};

console.log(addTwo(5));
