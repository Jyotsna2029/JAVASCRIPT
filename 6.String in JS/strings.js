let str1 = "Hello Everybody";
let str2 = "   Hello World   ";
let str3 = `Namaste Everyone!`;
console.log(str1, str2, str3);

// `` 
let price = 80;
console.log(`Price of 1kg tomato is ${price} \n inflamation is high`);

// string concatenation
console.log(str1+str2);

// string length
console.log(str1.length);

// escape character
console.log(`Price of 1kg tomato is ${price} \\n inflamation is high`); //to print \n

// character of string
let special = "ComputerVision";
console.log(special[7]); 

// to lowercase
console.log(str3.toLowerCase());
// to uppercase
console.log(str3.toUpperCase());

console.log(special.indexOf("Vision"));
console.log(special.indexOf("vision"));
console.log(special.includes("Vision"));

// substring
console.log(special.slice(0,6)); //can take negative index from last
console.log(special.substring(7, 15));  //doesnt take negative index

// replacing content
console.log(str3.replace("a", 'j'));
console.log(str3.replaceAll("a", 'j'));

// string to array using delimiter
let s = "Money! Honey! Sunny! Funny";
console.log(s.split("!"));

// trim
console.log(str2.trim());
// trim from start
console.log(str2.trimStart());
// trim from end
console.log(str2.trimEnd());

// new way to create string   in heap and it's type is object
let l = new String("Hello Coder Army!");
console.log(l);