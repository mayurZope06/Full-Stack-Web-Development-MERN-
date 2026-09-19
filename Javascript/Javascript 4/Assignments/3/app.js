let number = 287152;
let sum = 0;
let num = number; 

while (num > 0) {
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

console.log(sum);