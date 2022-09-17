function biggestElementInMatrix(matrix){
    let maxNumber = -10000000;
    for(let arr of matrix)
    {
        for(let i =0; i<arr.length;i++){
            if(maxNumber<arr[i]){
                maxNumber = arr[i];
            }
        }
    }
    return maxNumber;
}
console.log(biggestElementInMatrix([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]   
   ));