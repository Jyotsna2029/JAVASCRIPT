// key value pair with key as unique
const map1 = new Map();
map1.set(1,100);
map1.set("Rohit",90);
map1.set(2,80);
map1.set("Rohit",95);   //will be updated

console.log(map1);
console.log(map1.has("Rohit"));
map1.delete("Rohit");
console.log(map1);


// syntax 2
const map2 = new Map([[0,'A'],[1,'B'],[2,'C']]);
console.log(map2);


// for of loop
for(let [key, value] of map1){
    console.log(key, value);
}

// foreach
map2.forEach((key, value) =>{console.log(key,value)});