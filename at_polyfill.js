//always code in try catch block in JS
function isNum(idx)
{
    return isFinite(idx) && !isNaN(parseFloat(idx));
}
function isArray(arr)
{
    return Array.isArray(arr);
}
function isFloat(num)
{
    const floatVal = parseFloat(num);
    return floatVal%1 !== 0;
}

Array.prototype.myAt = at;
function at(idx)
{
    try{
        const arr = this;
        if(!isArray(idx) && isNum(idx) && !isFloat(idx))
        {
            let newIdx = idx % arr.arr.length;
            if(idx < 0)
            {
                newIdx = idx + arr.length;
            }
            newIdx = (newIdx) % arr.length;
            return arr[newIdx];
        }else
        {
            throw "send correctly";
        }
    }catch(e)
    {
        console.log(e);
    }
}
const arr = [1,2,3,4];
console.log(arr.myAt(3));