function hello() {
    console.log("hello");
}

function printName() {
    console.log("apna college");
}

function print1to5() {
    for(let i = 0; i <= 5; i++) {
        console.log(i); 
    }
}

function isAdult() {
    let age = 18;

    if(age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}

hello();
printName();
print1to5();
isAdult();