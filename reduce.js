const arr = [1,2,3,4];

const res = arr.reduce(function cb(acc, curr){
    acc = acc + curr;
    return acc;
}, 0); //acc ki inital value is 0

console.log(res);