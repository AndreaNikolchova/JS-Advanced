function aggregate(line)
{
   let concat = "";
   let sum =0;
   let sumInverse = 0;
    for(let i =0; i < line.length;i++)
    {
        concat+=line[i];
        sum+= Number(line[i]);
        sumInverse+=1/Number(line[i]);
    }
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);

}
aggregate([1, 2, 3]);
