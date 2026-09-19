let names = ["tony", "bruce", "peter", "steve", "abc","xyz"];
//let winner = names[0];
//let runnerup = names[i];
//let secondRunnerup = names[2];

let [winner, runnerup, ...others    ] = names;
console.log(winner);
console.log(runnerup);
console.log(others);