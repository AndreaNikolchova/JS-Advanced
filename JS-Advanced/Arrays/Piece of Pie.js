function pieceOfPie(arr,firstPie,secondPie){
    let startIndex = arr.indexOf(firstPie);
    let endIndex = arr.indexOf(secondPie);
    return arr.slice(startIndex,endIndex+1);
}
console.log(pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'
));