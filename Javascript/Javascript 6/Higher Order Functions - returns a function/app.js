// let odd = function(n) {
//     if(!(n % 2 == 0));
// }

// let even = function(n) {
//     console.log(n % 2 == 0);
// }

function oddOrEvenFactory(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if(request = "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }

}  

let request = "odd"; //even