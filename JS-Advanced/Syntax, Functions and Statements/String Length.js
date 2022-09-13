function stringLenght(x,y,z)
{
    let xNumber = x.length ;
    let yNumber = y.length ;
    let zNumber = z.length ;
    console.log(xNumber+yNumber+zNumber);
    console.log(Math.round((xNumber+yNumber+zNumber)/3));
}
stringLenght('chocolate', 'ice cream', 'cake');