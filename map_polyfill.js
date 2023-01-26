const arr = [50,100,150,200];
function cb(val, idx, array)
{
    return "Rs. " + val;
}

Array.prototype.myMap = myMap;
function myMap(...args) //cb function in ...args
{
    try{
        if(args.length === 0)
        {
            throw new Error("Please provide arguments");
        }

        if(args.length > 2)
        {
            throw new Error("Arguments should be less than 2");
        }
        const callback = args[0]; //cb
        if(typeof callback !== 'function')
        {
            throw new Error(`${callback} as a function`);
        }

        const referthis = args[1];
        const arr = this;
        const returnArr = [];

        for(let idx = 0; idx < arr.length; idx++)
        {
            if(idx in arr)
            {
                const res = callback.call(referthis, arr[idx], idx, arr);
                returnArr[idx] = res; //PUSHING ALL THE VALUES ISKA MATLAB HOTA HAI MAP FUNCTION

            }
        }

        return returnArr;


    }catch(e)
    {
        console.log(e);
    }
}

const newArr = arr.myMap(cb); //we are passing a callback function as arguments in the function
console.log(newArr);