const obj = {
    name : "Rohit",
    accBal : 420,
    age: 30,
    gender: "Male",
}
// keys extractions
const arr = Object.keys(obj);
console.log(arr);

// values extraction
const arr1 = Object.values(obj);
console.log(arr1);

// key value extraction in arr
const arr2 = Object.entries(obj);
console.log(arr2);

