function radar(speed,place)
{
    let speedAllowed = 0;
    switch(place)
    {
        case "motorway":
            speedAllowed = 130;
            break;
        case "interstate":
            speedAllowed = 90;
            break;
        case "city":
            speedAllowed = 50;
            break;
        case "residential":
            speedAllowed = 20;
            break;
    }
    if(speed>speedAllowed)
    {
        let speedOver = speed - speedAllowed;
        let status =" ";
        if(speedOver<=20)
        {
            status = "speeding";
        }
        else if(speedOver<=40)
        {
            status = "excessive speeding";
        }
        else{
            status = "reckless driving";
        }
        console.log(`The speed is ${speedOver} km/h faster than the allowed speed of ${speedAllowed} - ${status}`);
    }
    else
    {
        console.log(`Driving ${speed} km/h in a ${speedAllowed} zone`);
    }

}
radar(200, 'motorway');