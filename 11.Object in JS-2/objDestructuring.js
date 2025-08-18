// destructuring with object
let obj = {
    name: "Rohit",
    money:420, 
    arr : [90,40,60,80],
    balance : 50,
    age:20
}
const {name, age} = obj;
console.log(name, age);

// also we can destructure 
const {money : paisa, balance:rupee} = obj;
console.log(paisa, rupee);

// destructuring with array
const arr = [3,2,1,5,10];
const[first,second,,fourth] = arr;
console.log(first, second, fourth);  

// const[first,second,...third] = arr;   ...third is rest operator
// console.log(first, second, third);  

const {arr:[x]} = obj;    //first element of arr;
console.log(x);

