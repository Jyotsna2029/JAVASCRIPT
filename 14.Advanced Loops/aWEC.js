// own writable, enumerable and configurable
let obj = {};
Object.defineProperty(obj, 'name',{
    value:"rohit",
    writable:true,
    enumerable:true, 
    configurable:true
});
