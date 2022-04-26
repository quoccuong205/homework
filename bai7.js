let arr = [
  { make: "audi", model: "r8", year: "2012" },
  { make: "audi", model: "rs5", year: "2013" },
  { make: "ford", model: "mustang", year: "2012" },
  { make: "ford", model: "fusion", year: "2015" },
  { make: "kia", model: "optima", year: "2012" },
];

let obj = {};
for (let i in arr) {
  if (arr[i].make === "audi") {
    if (obj["audi"] == undefined) {
      obj["audi"] = [];
    }
    obj["audi"].push(arr[i]);
  } else if (arr[i].make === "ford") {
    if (obj["ford"] == undefined) {
      obj["ford"] = [];
    }
    obj["ford"].push(arr[i]);
  } else {
    if (obj["kia"] == undefined) {
      obj["kia"] = [];
    }
    obj["kia"].push(arr[i]);
  }
}
console.log(obj);
