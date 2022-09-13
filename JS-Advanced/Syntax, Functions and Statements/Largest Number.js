function largestNumber(x,y,z)
{
    if(x>=y&&x>=z)
    {
        console.log(`The largest number is ${x}.`);
    }
    else if(y>=x&&y>=z)
    {
        console.log(`The largest number is ${y}.`);
    }
    else
    {
        console.log(`The largest number is ${z}.`);
    }
}
largestNumber(5, -3, 16);