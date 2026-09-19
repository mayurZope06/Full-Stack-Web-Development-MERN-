// Qs. For the given start state of an array, change it to final form using splice.
// ["january", "july", "march", "august"]
// ['july', 'june', 'march', 'august']

let months = ["january", "july", "march", "august"];
months.splice(0, 2, "july", "june");
console.log(months);

// Qs. Return the index of the "javascript" from the given array, if it was reversed.
// ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"]
let lang = ["c", "c++", "html", "javascript", "python", "java", "c#", "sql"];
console.log(lang.reverse().indexOf("javascript"));