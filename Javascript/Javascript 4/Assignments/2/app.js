let number = 287152;
let count = 0;
let num = number;

// while(num > 0) {
//   
//     num = Math.floor(num / 10);
//     count++;
// }

while(num > 0) {
    count++;
    num = Math.floor(num / 10);
}
console.log(count);