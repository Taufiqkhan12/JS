const accountID = 123458098;
let accountEmail = "taufiq@gmail.com";
var accountPassword = "123@tau";
accountCity = "Mumbai";
let accountState;

accountCity = "Bengaluru";
console.log(accountID);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([
  accountID,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
