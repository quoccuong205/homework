// MY MAP
// Array.prototype.myMap = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(callback(this[i], i, this));
//   }
//   return arr;
// };
// let arr1 = [1, 2, 3];
// let arr2 = arr1.myMap((element) => element * 2);
// console.log(arr2);

// MY FILTER

// Array.prototype.myFilter = function (callback) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// let arr1 = [1, 2, 3];
// let arr2 = arr1.myFilter((element) => element > 2);
// console.log(arr2);

// MY REDUCE

Array.prototype.myReduce = function (callback, initial) {
  const arr = this;
  for (let i = 0; i < arr.length; i++) {
    if (initial === undefined && i === 0) {
      initial = arr[0];
      continue;
    }
    initial = callback(initial, arr[i], i);
  }
  return initial;
};
const array1 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array1.myReduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
