"use strict";

const data = [5, 2, 4, 1, 15, 8, 3];

const age = data.map(function (data) {
  return data <= 2 ? data * 2 : data * 4 + 16;
});

console.log(age);

const age18 = age.filter((age) => age >= 18);
console.log(age18);

let avg = data.reduce(function (acum, data, i, arr) {
  return acum + data / arr.length;
}, 0);
console.log(avg);

// Exercising arrow funcions and chaining
//1. calcAvgHumanAge
const dogAges = [5, 2, 4, 1, 15, 8, 3];
const calcAvgHumanAge = (dogAges) =>
  dogAges
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((age) => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAvgHumanAge(dogAges));
