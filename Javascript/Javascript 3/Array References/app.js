let arr = ['a', 'b', 'c'];
// undefined

let arrCopy = arr;
// undefined

arr == arrCopy
// true

arr === arrCopy
// true

arr.push('d');
// 4

// arr
// ['a', 'b', 'c', 'd']

// arrCopy
// ['a', 'b', 'c', 'd']

arrCopy.pop();
// 'd'

console.log(arrCopy);
// ['a', 'b', 'c']

console.log(arr);
// ['a', 'b', 'c']
