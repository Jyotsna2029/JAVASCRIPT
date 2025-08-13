let a = 10;
let b = a;
b = 30;     
console.log(b);
console.log(a);  //a is not changed hence it is immutable

let obj1 = {
    id:20,
    fname:"Rohit",
}
let obj2 = obj1;
// console.log(obj1);
obj2.id = 13;
console.log(obj1);   //obj1 also changed hence it is mutable
console.log(obj2);
