const arr = [1,2,4,5];
const res = arr.map((num)=>{
    return num*num;
});


// selection and then modification
const a = [1,2,3,4,5];
const result = arr.filter((num) => num%2==0).map((num)=>num*num);
console.log(result);