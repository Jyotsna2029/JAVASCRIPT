if(true){
   let a = 10;
   var b =20;
   const c = 30;
}
// // will give error
// console.log(a);
// console.log(b);
// console.log(c); 



greet();   //will run
function greet(){
    console.log("greet");
}


meet(); //will give error
const meet = function(){
    console.log("meet")
}
