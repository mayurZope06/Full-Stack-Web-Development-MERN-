// Check if all numbers in our array are multiples of 10 or not.
let nums = [10 ,20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);

console.log(ans);

// Create a function to find the min number in an array.0
// let min = nums.reduce((min, el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }   
// });

// console.log(min);

function getMin(nums) {
    let min = nums.reduce((min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }   
    });

    return min;
}

console.log(getMin(nums));
console.log(getMin([1, 2, 3, 4]));
console.log(getMin([1, 2, 3, -1]));