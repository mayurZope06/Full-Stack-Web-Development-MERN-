const data = {
    email: "ironman@gmail.com",
    password: "abcd",
};

const dataCopy = {...data, id: 123, country: "India"};
console.log(dataCopy);

let arr = [1, 2, 3, 4, 5]; //val
let obj1 = {...arr}; //obj -> key:val
console.log(obj1);

let obj2 = {..."hello"}; //obj -> key:val
console.log(obj2);