function sum(arr,startIndex,endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex<0){
        startIndex = 0;
    }
    if(endIndex>arr.length-1){
        endIndex = arr.length-1;
    }
    let sumNumbers= 0;
    for(let i  = startIndex ; i<=endIndex; i++){
        sumNumbers+=Number(arr[i]);
    }
    return sumNumbers;
}
console.log(sum([10, 'twenty', 30, 40], 0, 2));
