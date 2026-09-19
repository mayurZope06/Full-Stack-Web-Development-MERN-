function sum(...args) {
    //arguments
    for(let i = 0; i < args.length; i++) {
        console.log("you gave us: ", args[i]);
    }
}

console.log(sum(1));
console.log(sum(1, 2, 3, 4));

// function min(a, b, c, d) {
function min() {
    console.log(arguments);
    console.log(arguments.length);
}

console.log(min(1, 2, 3, 4));

function sum2 (...args) {
    return args.reduce((sum, el) => sum + el);
}

console.log(sum2(1, 2, 3, 4));

function min (msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el) {
            return el;
        } else {
            return min;
        }
    });
}

console.log(min("hello", 1, 2, 3, 4, -20));
console.log(min(10, 1, 2, 3, 4, -20));