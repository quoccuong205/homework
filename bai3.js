let arr = [1, 7, 9, 2, 5, 3, 8];
let sum = 10;
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] + arr[j] === sum) {
      console.log("[" + arr[i] + "," + arr[j] + "]");
    }
  }
}
