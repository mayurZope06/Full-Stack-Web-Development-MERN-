const arrayAverage = (arr) => {
    let total = 0;
    for(let number of arr) {
        total += number;
    }
    return total / arr.length;
}

let arr = [9.86, 10, 9.45, 9.73];
console.log(arrayAverage(arr));