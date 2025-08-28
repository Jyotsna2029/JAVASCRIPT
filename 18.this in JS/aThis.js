let a = 10;
console.log(a);
let obj = {
    name:10
}
Object.freeze();
console.log(obj);
"use strict"
function greet(){
    console.log(this);
}