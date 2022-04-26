let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [3, 4, 8, 9, 12];
let array3 = [];
// cach 1
for (let i = 0; i < array1.length; i++) {
  for (let j = 0; j < array2.length; j++) {
    if (array1[i] === array2[j]) {
      array3.push(array1[i]);
    }
  }
}
console.log(array3);

//cach 2
let array4 = array1.filter((element) => array2.includes(element));
console.log(array4);
