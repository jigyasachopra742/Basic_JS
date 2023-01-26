const arr = [1,2,3,4];

function cb(val, idx, arr)
{
    return val % 2 == 0;
}
const res = arr.filter(cb);
console.log(res);