"use strict";

// let arr = ["a", "b", "c", "d", "e"];
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-3, -1));

// let arr2 = ["j", "i", "h", "g", "f"];

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(-1));

// console.log(arr.splice(2, 4));
// console.log(arr);
// console.log(arr.splice(-3, -1));
// console.log(arr);

// const arr2 = arr.reverse();
// console.log(arr);
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters.join("-"));
///////////////////////////////

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function (movement, index, array) {
//   // current element, current index, current array ALWAYS
//   // YOU CAN T BREAK OUT OF IT THAT WHY MAYBE YOU WANT TO USE "OF" "
//   if (movement > 0)
//     console.log(`Movement ${index + 1}: You deposited ${movement}$`);
//   else
//     console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}$`);
// });

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key} : ${value}`);
});

const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);
console.log("\n");
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value} : ${value}`);
});
