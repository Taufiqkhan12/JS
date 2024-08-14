const myObject = {
  js: "JavaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift",
};

for (const key in myObject) {
  //   console.log(`${key} is shortcut for ${myObject[key]}  `);
}

const programming = ["js", "ruby", "cpp", "java"];

for (const key in programming) {
  console.log(key, programming[key]);
}
