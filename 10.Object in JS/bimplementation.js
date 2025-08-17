const obj = new Object();
// property add
obj.name = "A";
obj.age = 20;
obj.gender = "Male";
obj.x = 30;
console.log(obj);
// property delete
delete obj.x;
console.log(obj);
// property update
obj.name = "Hemant";
console.log(obj);