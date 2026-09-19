const student = {
    name: "mayur",
    age: 19,
    class: 3,
    subjects: ["TOC", "DBMS", "CNS", "SPOS"],
    username: "may@06",
    password: "abcd",
    city: "Pune"
};

let { username: user, password: secret, city: place = "Mumbai" } = student;

console.log(user);
console.log(secret);
console.log(place);


