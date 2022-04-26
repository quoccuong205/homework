let largest = 0;
let second_largest = 0;
let arr = [1, 7, 9, 2, 5, 3, 8];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    second_largest = largest;
    largest = arr[i];
  } else if (arr[i] > second_largest && arr[i] != largest) {
    second_largest = arr[i];
  }
}
let new_arr = [second_largest, largest];
console.log(new_arr);
