function square(number)
{
    let row = "";
    for(let i = 1; i<=number;i++)
    {
        row+="* ";
    }
    for (let i = 1;i<=number;i++)
    {
        console.log(row);
    }
}