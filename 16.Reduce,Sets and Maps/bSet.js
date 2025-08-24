const set1 = new Set([10,20,30, 40,30,10]);
console.log(set1);
console.log(typeof set1);

// syntax 2
const set2 = new Set();
set2.add(4);
set2.add(10);
set2.add("J");
set2.add(30);
set2.add(0.9);

console.log(set2);

// union
let set3 = new Set([...set1,...set2]);
console.log(set3);

// intersection
const res = [...set1].filter((num)=>set2.has(num));
console.log(res);

// iterate over set
for(let val of set3){
    console.log(val);
}