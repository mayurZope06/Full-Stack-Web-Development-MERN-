const classInfo = {
    mayur: {
        grade: "O",
        city: "Pune"
    },
    mayuri: {
        grade: "A+",
        city: "Pune"
    },
    shradha: {
        grade: "A",
        city: "Mumbai"
    },
}

console.log(classInfo);
console.log(classInfo.mayuri);
console.log(classInfo.mayuri.city);
classInfo.mayuri.city = "Bangalore";
console.log(classInfo.mayuri);