const d1 = new Date("2025-03-16");
const d2 = new Date(2025,2,17);
console.log(d1);
console.log(d2);

// setting date components
const d = new Date();
d.setDate(8);
d.setFullYear(2004);
d.setMonth(9);
console.log(d.toString());