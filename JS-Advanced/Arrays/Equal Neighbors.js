function neighbors(matrix)
{
    let countofNeighbors = 0;
    for(let i = 0; i<matrix.length; i++){
        for(let j = 0;j<matrix[i].length; j++){
            if(i === matrix.length-1)
            {
                if(matrix[i][j]===matrix[i][j+1]){
                    countofNeighbors++;
                }
            }
            else{
                if(matrix[i][j]===matrix[i+1][j]){
                    countofNeighbors++;
                }
                if(matrix[i][j]===matrix[i][j+1])
                {
                    countofNeighbors++;
                }
            }
            }
        }

    return countofNeighbors;
}
console.log(neighbors([
    [2, 2, 5, 7, 4],
    [4, 0, 5, 3, 4],
    [2, 5, 5, 4, 2]
]));