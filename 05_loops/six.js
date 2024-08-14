// const coding = ["js", "ruby", "java", "python", "cpp"];

// const values = coding.forEach((items) => {
//   console.log(items);
//   return items;
// });

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => {
//   return num >= 5;
// });

// const newNums = [];

// myNums.forEach((num) => {
//   if (num >= 5) {
//     newNums.push(num);
//   }
// });

// console.log(newNums);

const books = [
  { title: "Book One", genre: "Fiction", publish: 1995, edition: 1998 },
  { title: "Book Two", genre: "Science", publish: 2001, edition: 2003 },
  { title: "Book Three", genre: "History", publish: 1990, edition: 1992 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1998, edition: 2001 },
  { title: "Book Five", genre: "Fiction", publish: 2005, edition: 2007 },
  { title: "Book Six", genre: "Science", publish: 2011, edition: 2013 },
  { title: "Book Seven", genre: "History", publish: 1983, edition: 1985 },
  { title: "Book Eight", genre: "Non-Fiction", publish: 2007, edition: 2009 },
  { title: "Book Nine", genre: "Fiction", publish: 1993, edition: 1995 },
  { title: "Book Ten", genre: "Science", publish: 2000, edition: 2002 },
];

// const userBooks = books.filter((bk) => {
//   return bk.genre === "History";
// });

const userBooks = books.filter((bk) => {
  return bk.publish >= 1900 && bk.genre === "History";
});

console.log(userBooks);
