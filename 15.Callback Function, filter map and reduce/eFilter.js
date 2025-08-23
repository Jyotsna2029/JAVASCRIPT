arr = [10,22,33,41,50];
let fun = function(num){
    return num%2 == 0;
}
const result = arr.filter(fun);
console.log(result);

// example
const students = [
    {name:"Rohan", age:22, marks:70},
    {name:"Mohan", age:24, marks:80},
    {name:"Darshan", age:28, marks:30},
    {name:"Mohit", age:32, marks:40},
    {name:"Shadik", age:12, marks:90}
];
const ans = students.filter((obj) => {
    return obj.marks>50;
});
console.log(ans);              

