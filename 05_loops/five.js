const coding = ["js", "ruby", "java", "python", "cpp"];

// coding.forEach(function (val) {
//   console.log(val);
// });

// coding.forEach((val) => {
//   console.log(val);
// });

// function printMe(val) {
//   console.log(val);
// }

// coding.forEach(printMe);

// coding.forEach((item, index, arr) => {
//   console.log(index, item, arr);
// });

const myCoding = [
  {
    languageName: "JavaScript",
    languageFileName: "js",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

// for (let i = 0; i < myCoding.length; i++) {
//   const element = myCoding[i];
//   console.log(element.languageName);
// }
