function multipleGreet(func, count) { //higher order function
    for(let i = 1; i <= count; i++) {
        func();
    }
}

let greet = function() {
    console.log("hello");
}

// multipleGreet(greet, 1000);
multipleGreet(function() {console.log("namaste")}, 1000);