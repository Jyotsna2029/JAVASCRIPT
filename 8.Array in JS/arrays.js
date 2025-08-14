const arr =[2,35,1,8,9];
console.log(arr);

// array length
console.log(arr.length);

// elt at index 
console.log(arr[4]);
console.log(arr.at(4)); //can take -ve index

// arrays are passed by reference
// same array
const newArr = arr;
console.log(newArr);
console.log(newArr == arr);


// copy of arr alag alag
const copyArr = structuredClone(arr);
console.log(arr == copyArr);

// push element 
arr.push(30);
arr.push(178);
console.log(arr);

// pop element
arr.pop();
console.log(arr);

// unshift add elt at the start
arr.unshift(1);
console.log(arr);

// shift delete elt from start
arr.shift(1);
console.log(arr);

// array with hole
delete arr[2];
console.log(arr);

// index of first occurence
console.log(arr.indexOf(35));

// element is present or not
console.log(arr.includes(35));

// slicing the array
// original isn't changed
console.log(arr.slice(2,4)); //(start,end); 

// splice the array
// origional is changed
console.log(arr.splice(3,2));//(start, no of values)
console.log(arr.splice(1,2,"Placement","2026-27","25lpa"));//(start, no of values)
console.log(arr);

// array to string 
console.log(arr.toString());
console.log(arr.join("&"));

// concatenate arr;
const a1 = [2,3,5,7];
const a2 = [9,11,13,15];
const a3 = [17,19,21,23];
console.log(a1.concat(a2,a3));
console.log(a1.concat(a2,a3));

// array in array
a1.push(a2);
console.log(a1);

