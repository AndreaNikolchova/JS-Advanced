function findGreatesCommonDivisor(x,y)
{
    let divisor =0;
    if(x>y)
    {
        for(let i = 1; i <= x; i++)
        {
            if(Number(x)%i===0&&Number(y)%i===0)
            {
               divisor = i;
            }
        }

        
    }
    else{
        for(let i = 1; i <= y; i++)
        {
            if(Number(x)%i===0&&Number(y)%i===0)
            {
               divisor = i;
            }
        }
    }
    console.log(divisor);
}
findGreatesCommonDivisor(2154, 458);
