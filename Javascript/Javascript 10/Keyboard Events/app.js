let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {
    console.log("code = ", event.code); //ArrowUp(U), ArrowDown(D), ArrowLeft(L), ArrowRight(R)
    // if(event.code == "ArrowUp") {
    //     console.log("character moves forward");
    // } else if(event.code == "ArrowDown") {
    //     console.log("character moves backward");
    // } else if(event.code == "ArrowLeft") {
    //     console.log("character moves left");
    // } else if(event.code == "ArrowRight") {
    //     console.log("character moves right");
    // }
    if(event.code == "KeyU") {
        console.log("character moves up");
    } else if(event.code == "KeyD") {
        console.log("character moves down");
    } else if(event.code == "KeyL") {
        console.log("character moves left");
    } else if(event.code == "KeyR") {
        console.log("character moves right");
    }
});
