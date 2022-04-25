// let arr = [-3, 5, 1, 3, 2, 10];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(`Gia tri lon nhat: ${max}`)

// let iMax = 20;
// let jMax = 10;
// let f = new Array();

// for (i = 0; i < iMax; i++) {
//     f[i] = new Array();
//     for (j = 0; j < jMax; j++) {
//         f[i][j] = 0;
//     }
// }

let numbers = [1, 2, 3, 4, 5];
let deleted = numbers.splice(2, 1, 0);
console.log(numbers);