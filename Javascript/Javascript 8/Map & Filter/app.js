//Map
let num = [1, 2, 3, 4];

let double = num.map((el) => {
    return el * el;
});

console.log(double);

let arr = [1, 2, 3, 4, 5];

let students = [{
    name: "mayur",
    marks: 95,
},
{
    name: "mayuri",
    marks: 99,
}, 
{
    name: "may",
    marks: 97,
}];

let gpa = students.map((el) => {
    return el.marks / 10;
});

console.log(gpa);

//Filter
let nums = [1, 2, 3, 4, 7, 8, 2, 9, 10, 12, 11];
let ans = nums.filter((el) => {
    return el % 2 == 0; // even -> true, odd -> false
});
console.log(ans);
