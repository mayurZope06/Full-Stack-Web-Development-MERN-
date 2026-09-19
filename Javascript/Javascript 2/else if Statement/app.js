let age = 14;

if (age >= 18) {
    console.log("you can vote");
}
else if (age >= 18) {
    console.log("you cannot vote"); // this else if will not execute
}

if (age >= 18) {
    console.log("you can vote");
}
if (age >= 18) {
    console.log("you can vote"); // this will execute   
}

let age1 = 14;
if (age >= 18) {
    console.log("you can vote");
}
else if (age1 >= 18) {
    console.log("you cannot vote"); 
}
else if (age1 < 18) {
    console.log("you cannot vote2");
}

let marks = 89;

if (marks >= 80) {
    console.log("A+");
} else if (marks >= 60) {
    console.log("A");
} else if (marks >= 33) {
    console.log("B");
} else if (marks < 33) {
    console.log("F");
}

let month = "april";

if (month === "january") {
    console.log("winter is here");
} else if (month === "april") {
    console.log("summer is here");
}