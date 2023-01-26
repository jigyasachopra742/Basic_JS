const arr=[1,2,3,2,4,2,5,2];
function lastidx(ar,idx=ar.length,...num)
{
        if(num.length>1 || num.length<1)
        {
            console.log("no");
        }
        else if(Array.isArray(ar) && isnum(num) && isnum(idx) && idx%1==0 && num%1==0)
        {
            for(let i=idx;i>-1;i--)
            {
                if(ar[i]==num)
                {
                    return i;
                }
            }
            return -1;
        }
}
console.log(lastidx(arr,4,2));