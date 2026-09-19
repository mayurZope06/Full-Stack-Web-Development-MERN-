const student = {
    name: "mayur",
    age: 19,
    eng:92,
    math: 100,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} got avg marks = ${avg}`);
    }
}

student.getAvg();

function getAvg() {
    console.log(this);
}

getAvg();
 