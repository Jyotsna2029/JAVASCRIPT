const obj = {
    name : "Rohit",
    accountNum : "13456789",
    accBal : 420,
    age: 30,
    gender: "Male",
    0:100,
    undefined:"x"
}
// print object
console.log(obj);

// access elements in object
console.log(obj.name);
console.log(obj["name"]);
// console.log(obj[name]);   ERROR
console.log(obj["0"]);  //only possibilty to access
console.log(obj[0]);  //only possibilty to access

// undefined key can be there but isn't recommended
console.log(obj.undefined);


