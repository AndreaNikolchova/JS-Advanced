function cook(numberStr , ...params)
{
    let number = Number(numberStr);
    for(let i = 0;i<params.length;i++)
    {
        number = check(number,params[i]);
        console.log(number);
    }
    function check(number,operation)
    {
        switch(operation)
        {   
            case "chop":
                number/=2;
                break;
            case "dice":
                number = Math.sqrt(number);
                break;
            case "spice":
                number +=1;
                break;
            case "bake":
                number *=3;
                break;
            case "fillet":
                number-=number*0.20;
                break;

        }
        return number;
    }
}
cook('9', 'dice', 'spice', 'chop', 'bake', 'fillet');