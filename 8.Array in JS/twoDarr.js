// TWO D ARRAY
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
console.log(arr2d);
console.log(arr2d[2][1]);

// two d to 1d arr
let newArr = arr2d.flat(Infinity);  //INPUT IS 1 FOR 2D TO 1D AND 2 FOR 3D TO 1D
console.log(newArr);

// to chack if array is arr
console.log(Array.isArray(newArr));
