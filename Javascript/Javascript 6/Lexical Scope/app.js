function outerFun() {
    let x = 5;
    let y = 6;

    function innerFunc() { //function scope
        let a = 10;
        console.log(x);
        console.log(y);
    }
    // console.log(a); //error
    innerFunc();
}

outerFun();