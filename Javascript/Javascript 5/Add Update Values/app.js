const student = {
    name: "mayur", 
    age: 19,
    marks: 94.4,
    city: "Pune"
};

console.log(student.city);
student.city = "Mumbai";

console.log(student.city);

student.gender = "male";
console.log(student.gender);

console.log(student);

student.marks = [99, 100, 87];
console.log(student);


delete student.marks;
console.log(student);

delete student.city;
console.log(student);