const d = new Date();

console.log(d.toDateString());

// ist time
console.log(d.toString());

// type of 
console.log(typeof d);

const t = new Date(1676464300453);
console.log(t);

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getMilliseconds());
console.log(d.getMinutes());

// to get milliseconds time
console.log(d.getTime());
const now =Date.now();
console.log(now);