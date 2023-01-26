const arr = [2,4];
function cb(val, idx, array)
{
    if(val % 3 === 0)
        return val;
}

Array.prototype.myFilter = myFilter;
function myFilter(...args)
{
    try{
        if(args.length === 0)
        {
            throw new Error ("No arguments passed in the array");
        }
        else if(args.length > 2)        
        {
            throw new Error ("Pass only 2 arguments");
        }

        const callback = args[0];
        const referthis = args[1];
        if(typeof callback !== 'function')
        {
            throw new Error(`${callback} as a function`);
        }

        const arr = this;
        const returnArr = [];

        for(let idx = 0; idx < arr.length; idx++)
        {
            if(idx in arr)
            {
                const val = arr[idx];
                const returnVal = callback.call(referthis, val, idx, arr);

                if(returnVal)
                {
                    returnArr.push(returnVal);
                }
            }
        }

        return returnArr;
    }catch(e)
    {
        console.log(e);
    }
}

const newArr = arr.myFilter(cb, "Hello");
console.log(newArr);