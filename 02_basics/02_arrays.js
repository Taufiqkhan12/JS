const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// marvelHeros.push(dcHeros);

// console.log(marvelHeros);
// console.log(marvelHeros[3]);

const allHeroes = marvelHeros.concat(dcHeros);

// console.log(allHeroes);

// marvelHeros.push(...dcHeros);
// console.log(marvelHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]];

const realAnotherArray = anotherArray.flat(Infinity);
// console.log(realAnotherArray);

console.log(Array.isArray("Taufiq"));
console.log(Array.from("Taufiq"));
console.log(Array.from({ name: "Taufiq", userName: "Taufiq" }));

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
