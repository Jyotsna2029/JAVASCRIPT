function names(fun){
    console.log("Hello, I am name!");
    fun();
}

function greet(){
    console.log("Hello, I am Callback Fun!");
}
const greet1 = function(){
    console.log("Hello, I am Callback Fun!");
}
names(greet); 
// OR
names(greet1); 
// OR
names(function greet(){
    console.log("Hello, I am Callback Fun!");
});
// or
names(() =>{
    console.log("Hello, I am Callback Fun!");
});


// // setinterval  is the real world example of callback function
// function fetchData(){
//     console.log("I am fetching the data");
// }
// // setInterval(fetchData, 2000) ;    

