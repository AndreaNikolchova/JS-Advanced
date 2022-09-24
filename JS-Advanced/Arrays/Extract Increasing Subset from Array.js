function extractSubset(arr){
    let result =[];
    let currentBiggest = arr[0];
    for(let num  of arr){
        if(currentBiggest<=num){
            currentBiggest = num;
            result.push(currentBiggest);
        }
    }
    return result;
}
console.log(extractSubset([20, 
    3, 
    2, 
    15,
    6, 
    1]
    
    
    ));