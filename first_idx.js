const arr=[1,2,3,2,4,2,5,2];
function isnum(num){
    return isFinite(num) && !isNaN(parseFloat(num));
}
function firstidx(ar,idx=0,...num){
    if(num.length>1 || num.length<1){
        console.log("no");
    }
    else if(Array.isArray(ar) && isnum(num) && isnum(idx) && idx%1==0 && num%1==0){
        for(let i=idx;i<ar.length;i++){
            if(ar[i]==num){
                return i;
            }
        }
        return -1;
    }
}
console.log(firstidx(arr,2,1));