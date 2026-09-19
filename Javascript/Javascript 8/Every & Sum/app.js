console.log([2, 4, 6].every((el) => el % 2 == 0));
console.log([2, 4, 1, 6].every((el) => el % 2 == 0));
console.log([1, 3, 5].every((el) => el % 2 != 0));

console.log([1, 2, 3, 4].some((el) => el % 2 == 0));
console.log([1, 3, 5].some((el) => el % 2 != 0));