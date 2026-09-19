function sum(a, b) {
    return a + b;
}

function isAdult(age) {
    if(age >= 18) {
        return "adult";
    } else {
        return "not adult";
    }
}

console.log(isAdult(13));
console.log(isAdult(18));

let s = sum(2, 2);
console.log(s);
console.log(sum(2, 6));

console.log(sum(sum(1, 2), 3));