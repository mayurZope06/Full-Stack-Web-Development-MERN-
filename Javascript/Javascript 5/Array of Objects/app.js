const classInfo = [
   {
        name: "Mayur",
        grade: "O",
        city: "Pune"
   },
   {
        name: "Mayuri",
        grade: "A+",
        city: "Pune"
   },
   {
        name: "Shradha",
        grade: "A",
        city: "Delhi"
   }
];

console.log(classInfo);
console.log(classInfo[1].name);
console.log(classInfo[1].grade);
console.log(classInfo[1].city);
classInfo[1].city = "Bangalore";

console.log(classInfo[1]);
classInfo[1].gender = "female";
console.log(classInfo[1]);