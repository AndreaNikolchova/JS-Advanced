function aggregate(line)
{
    let numbers = line.split(/[\[\]]/).toString();
    let actualNumbers = numbers.split(",");
    console.log(actualNumbers.sum());
    let sumInverse = numbers.array.forEach(element => 
    {
        element =  1/Number(element);
    });
    console.log(sumInverse.sum());
    let concatAnswer = numbers.array.forEach(element =>
    {
        element +=element;
    });

}
aggregate("[1, 2, 3]");
