function daysInAMonth(mount,year)
{
  let date = new Date(year,mount,0);
  console.log(date.getDate());
}
daysInAMonth(2, 2021);