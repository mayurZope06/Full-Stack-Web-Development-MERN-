// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`)
//         }, 
//     };
//     return person;
// }     

//Constructors - doesn't return anything & start with capital
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {
//     console.log(`Hi, my name is ${this.name}`);
// }

// class Person {
//     constructor(name, age) {
//         console.log("Person class constructor. ")
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// class Student extends Person {
//     constructor(name, age, marks) {
//         console.log("Student class constructor. ")
//         super(name, age); //parent class constructor is being called
//         this.marks = marks;
//     }
// }

// class Teacher extends Person {
//     constructor(name, age, subject) {
//         super(name, age); //parent class constructor is being called
//         this.subject = subject;        
//     }
// }

// let p1 = new Person("adam", 20);
// let p2 = new Student("eve", 25, 96);



class Mammal {
    //base class / parent
    constructor(name) {
        this.name = name;
        this.type = "warm-blooded";
    }
    eat () {
        console.log("I am eating");
    }
}

class Dog extends Mammal {
    //child
    constructor(name) {
        super(name);
    }
    bark () {
        console.log("wooff..");
    }

    eat() {
        console.log("Dog is eating");
    }
}

class Cat extends Mammal {
    //child
    constructor(name) {
        super(name);
    }
    meow () {
        console.log("meow..");
    }
}