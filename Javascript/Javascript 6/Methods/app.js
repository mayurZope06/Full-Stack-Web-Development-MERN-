// const calculator = {
//     num: 55,
//     add: function(a, b) {
//         return a + b;
//     },
//     sub: function(a, b) {
//         return a - b;
//     },
//     mul: function(a, b) {
//         return a * b;
//     },
// };

// console.log(calculator);
// console.log(calculator.num);
// console.log(calculator.add);
// console.log(calculator.add(1, 2));
// console.log(calculator.sub(1, 2));
// console.log(calculator.mul(1, 2));

const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.add(1, 2));
console.log(calculator.sub(1, 2));
console.log(calculator.mul(1, 2));