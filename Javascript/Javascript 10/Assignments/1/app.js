let btns = document.querySelectorAll("button");
let p = document.querySelectorAll("p");

for (btn of btns) {
    // btn.onclick = sayHello;
    // btn.onclick = sayName;

    btn.addEventListener("keypress", keyPress);
    btn.addEventListener("mouseout", function () {
        console.log("mouseouttt");
    });
}

window.addEventListener("scroll", function () {
        console.log("Page is being scrolled");
});

window.addEventListener("load", function () {
        this.alert("Page has loaded!");
});

function keyPress() {
    alert("You presses a key");
}

