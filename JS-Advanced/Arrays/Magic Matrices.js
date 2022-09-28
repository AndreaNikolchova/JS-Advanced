function checkIfMatrixIsMagical(matrix){
function sum(arr){
    let sum = 0;
    for(let num of arr){
        sum+=Number(num);
    }
    return sum;
}
let sumCol = 0;
    let sumWanted = sum(matrix[0]);

 for(let rows = 0; rows< matrix[0].length; rows++){
    if(sumWanted !== sum(matrix[rows])){
        return false;
    }
    for(let cols = 0 ; cols<matrix[0].length;cols++){
        sumCol+=matrix[rows][cols];
    }
    
    if(sumWanted !== sumCol){
        return false;
    }
    sumCol =0;
    
 }
 return true;
}
console.log(checkIfMatrixIsMagical([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   
   ));