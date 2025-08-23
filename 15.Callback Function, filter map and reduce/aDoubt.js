let user = {
    name:"Rohit",
    age:30
}
console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "name",{
    writable:false 
});

user.name = "xyz";
console.log(user);

// we did writable false to prevent accidental changes but  not for hacking
