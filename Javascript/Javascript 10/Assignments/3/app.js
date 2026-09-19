let inp = document.querySelector("#text");
let h2 = document.querySelector("h2");

inp.addEventListener("input", function() {
    console.log(inp.value);
    let filter = inp.value.replace(/[^a-zA-Z ]/g, '');
    h2.innerText = filter;
});