let arr = [1, 2, 3, 4, 5];

arr.forEach((el) => {
    console.log(el);
});

arr.forEach(function(el) {
    console.log(el);
});

// let print = function (el) {
//     console.log(el);
// };

// arr.forEach(print);

let arr1 = [{
    name: "mayur",
    marks: 95,
},
{
    name: "mayuri",
    marks: 99,
}, 
{
    name: "may",
    marks: 96,
}];

console.log(arr1);

arr1.forEach((student) => {
    console.log(student.marks);
});

