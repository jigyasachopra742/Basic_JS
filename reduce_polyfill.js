const arr = [];
function cb(acc, curr) //acc = 0 (initially)
{
    acc = acc + curr;
    return acc;
}
Array.prototype.myReduce = myReduce;
function myReduce(...args)
{
    try{
        if(args.length === 0)
        {
            throw new Error("Pass some arguments please");
        }

        else if(args.length > 4)        
        {
            throw new Error ("Pass only 4 arguments");
        }

        const callback = args[0];
        const referthis =  args[1];

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

const newArr = arr.reduce(cb, 0); //initial value is 0 in acc of cb
console.log(newArr);