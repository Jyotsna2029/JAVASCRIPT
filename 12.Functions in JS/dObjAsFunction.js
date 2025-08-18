let obj = {
    name: "Rohit", 
    age:30, 
    amount:420
}

function fun(obj1){
    console.log(obj1.name, obj1.age);
}
fun(obj);

// or can give parameters through destructor 
function fun({name, age}){
    console.log(name, age);
}
fun(obj);

function fun1(obj1){
    console.log(obj1.name, obj1.age);
}