function getPreviousDay(year,mount,day)
{
    let date = new Date(year,mount-1,day-1);
    console.log(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`);
}
getPreviousDay(2016, 9, 30);