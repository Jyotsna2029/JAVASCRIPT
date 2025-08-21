let  obj = {
    name:"Deepak",
    age:13, 
    gender:"Male",
    city:"Delhi"
};
// for in loop it can  iterate over keys in an object;
for(let key in obj){
    console.log(key, obj[key]);
}

let objPrototype = Object.create(obj);
objPrototype.money = 420;
objPrototype.id = 123
console.log(objPrototype);
console.log(Object.keys(objPrototype)); //only money and key no access of obj keys which are there in objPrototype
console.log("-----------------------------");
for(let key in objPrototype){// it has access of each key in objPrototype including obj
    console.log(key, objPrototype[key]);  
}

console.log("-----------------------------");

let student = {
}
student.name = "rohit";
student.age = 20;

console.log(Object.getOwnPropertyDescriptor(student, "name"));

