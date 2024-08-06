const name = "Taufiq";
const repoCount = "12";

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("taufiq-k-khan");

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt([2]));
// console.log(gameName.indexOf("u"));

const newString = gameName.substring(0, 4);
// console.log(newString);

const anotherString = gameName.slice(-7, 5);
// console.log(anotherString);

const newString0ne = "   Taufiq";
// console.log(newString0ne);
// console.log(newString0ne.trim());

const url = "http://taufiq.com/taufiq%20khan";
console.log(url.replace("%20", "-"));
console.log(url.includes("taufiq"));

console.log(gameName.split("-"));
