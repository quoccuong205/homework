const arr1 = [1, 2, 3, 4, 5, 6, 7, 9, 9, 8, 7, 7];
const arr2 = [3, 5, 9, 10, 88];

let receive_arr = arr1.filter((element) => arr2.includes(element));
let unique_arr = [...new Set(receive_arr)];
console.log(unique_arr);
