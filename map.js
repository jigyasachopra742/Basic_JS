const arr = [5,10,15,20];

function rupee(val, idx, array)
{
    return "Rs." + val;
} 
const res = arr.map(rupee); //map takes a function
console.log(res);