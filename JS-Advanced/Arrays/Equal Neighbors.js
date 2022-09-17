function neighbors(matrix)
{
    let countofNeighbors = 0;
    for(let i = 1; i<matrix[0].length-2; i++){
        for(let j = 1;j<matrix[0].length-2; j++){
           if(matrix[i][j]==matrix[i][j+1]
            ||matrix[i][j]==matrix[i+1][j]
            ||matrix[i][j]==matrix[i][j-1]
            ||matrix[i][j]==matrix[i-1][j]){
                countofNeighbors++;
            }
        }
    }
    return countofNeighbors;
}
console.log(neighbors([
['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]
));