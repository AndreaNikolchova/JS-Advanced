function checkIfMatrixIsMagical(matrix){
    let sum = 0;
    let helper = 0;
    for(let row = 0; row<matrix.length;row++){
        for(let col = 0; col<matrix.length;col++){
            helper+= matrix[row][col];
        }
        if(row === 0){
            sum = helper;
        }
        if(helper !== sum){
            return false;
        }
        helper = 0;
    }
    for(let col = 0; col<matrix.length;col++){
        for(let row = 0; row<matrix.length;row++){
            helper+= matrix[row][col];
        }
        if(helper !== sum){
            return false;
        }
        helper = 0;
    }
    return true;
}
console.log(checkIfMatrixIsMagical([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
   ));