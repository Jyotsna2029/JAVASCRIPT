let obj1 = {a:1, b:2}
let obj2 = obj1;   //shallow copy  copy by reference
console.log(obj2);
console.log(obj3,obj1);

let obj3 = structuredClone(obj1); //deep copy
obj3.a = 20;
console.log(obj3,obj1);