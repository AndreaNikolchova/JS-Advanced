function sortNegativeToPositive(arr){
    let result = [];
    for(let i =0;i<arr.length;i++) 
    {
        if(arr[i]<0){
            result.unshift(arr[i]);
        }
        else{
            result.push(arr[i]);
        }
        
    }
    result.forEach(x=> console.log(x));
}
sortNegativeToPositive([7, -2, 8, 9]);