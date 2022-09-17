function getDiagonalSums(matrix){
    let mainDiagonalIndex = 0;
    let secondaryDiagonalIndex = matrix[0].length;
    let sumMain = 0;
    let sumSecondary = 0;
    for(let i=0;i<matrix[0].length;i++){
        sumMain+=matrix[i][mainDiagonalIndex];
        sumSecondary+= matrix[i][secondaryDiagonalIndex-1];
        mainDiagonalIndex++;
        secondaryDiagonalIndex--;
    }
    console.log(sumMain + ' '+sumSecondary);
}
getDiagonalSums([[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]   
   );