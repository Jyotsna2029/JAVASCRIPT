let obj ={
    name:"hemant",
    age:20,
    amount:420,
    city:"jaipur"
}
let keyOfObj = Object.keys(obj);
console.log(keyOfObj);
for(let i = 0; i< keyOfObj.length; i++){
    console.log(obj[keyOfObj[i]]);
}