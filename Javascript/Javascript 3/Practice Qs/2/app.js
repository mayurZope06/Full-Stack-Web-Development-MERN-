// Qs. For the given start state of an array, change it to final form using methods.
// ['january', 'july', 'march', 'august']
// ['july', 'june', 'march', 'august']

let months = ["january", "july", "march", "august"];
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);