let arr = ["face", "zalo", "face", "gmail", "zalo", "zalo"];

let count = {};
for (let i of arr) {
  if (count[i]) {
    count[i] += 1;
  } else {
    count[i] = 1;
  }
}
console.log(count);
