arr = [10,20,30,40,50];
arr.forEach(function(num){
    console.log(num);
});

ar = [10,20,30,40,50];
ar.forEach(function(num, index, a){
    a[index] = num *2; 
});
console.log(ar);