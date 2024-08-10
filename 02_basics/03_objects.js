// singleton
// Object.create;

// object literals

const mySym = Symbol("myKey1");

const User = {
  name: "Taufiq",
  [mySym]: "myKey1",
  "fullname":"Taufiq Khan",
  age: "20",
  location: "Mumbai",
  email: "taufiq@gmail.com",
  isLoggedIn: false,
};

// console.log(User.email);
// console.log(User["email"]);
// console.log(User["fullname"])
// console.log(User[mySym]);


// overwrite

User.email ="taufiq1@gmail.com";
// Object.freeze(User);
User.email="tau@gmail.com"
// console.log(User)

User.greeting = function(){
    console.log("Hello User");
}

User.greeting1 = function(){
    console.log(`Hello User, ${this.name}`);
}

console.log(User.greeting());
console.log(User.greeting1())