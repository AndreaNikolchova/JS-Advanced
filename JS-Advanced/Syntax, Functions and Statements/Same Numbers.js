function sameNumbers(x)
{
    let numberStr = x.toString();
    let firstDigit = numberStr[0];
    let flag = true;
    let sum=Number(firstDigit);
    for(let i = 1; i<numberStr.length; i++)
    {
        if(numberStr[i]!==firstDigit)
        {
            flag = false
        }
        sum+=Number(numberStr[i]);
    }
    console.log(flag);
    console.log(sum);
}
sameNumbers(1234);