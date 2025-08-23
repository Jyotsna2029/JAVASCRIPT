// on array
let arr = [10,20,5,15,20];
for(let value of arr){
    console.log(value);
}
// om strings
let str = "I am a person!";
for(let value of str){
    console.log(value);
}

// on objects
const obj = {
    name:"chavvi",
    age:22,
    gender:"female"
}

// for(let val of obj){  //will give error as object is not iterable
//     console.log(val);
// }
// iterate change obj to array
for(let val of Object.keys(obj)){
    console.log(val,obj[val]);
}

