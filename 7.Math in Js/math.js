console.log(Math.E);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.cos);

// random
console.log(Math.random()); //(0-1)
console.log(Math.random()*10); //(0-9)
console.log(Math.floor(Math.random()*10)); //(0-9) integer only
console.log(Math.ceil(Math.random()*10)); //(1-10) integer only
// floor
console.log(Math.floor(23.712));
// ceil
console.log(Math.ceil(23.712));

// min-max
let min = 0;
let max = 20;
console.log(Math.floor(Math.random()*(max-min+1)+min));  //0-20 ke beech ke number
console.log(Math.floor(Math.random()*(6-1+1)+1));  //ludo