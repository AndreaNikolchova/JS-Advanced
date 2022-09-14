function checkValidity(x1,y1,x2,y2)
{
    let numberOfX1Y1 = Math.sqrt((0 - x1)**2 + (0 - y1)**2);
    let numberOfX2Y2 = Math.sqrt((x2 - 0)**2 + (y2- 0)**2);
    let numberOfX1Y1AndX2Y2 = Math.sqrt((x2 - x1)**2 + (y2 - y1)**2);
   if(Number(numberOfX1Y1) === numberOfX1Y1 && numberOfX1Y1 % 1 === 0)
   {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
   }
   else
   {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
   }
   if(Number(numberOfX2Y2) === numberOfX2Y2 && numberOfX2Y2 % 1 === 0)
   {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
   }
   else
   {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
   }
   if(Number(numberOfX1Y1AndX2Y2) === numberOfX1Y1AndX2Y2 && numberOfX1Y1AndX2Y2 % 1 === 0)
   {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
   }
   else
   {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
   }
}
checkValidity(2, 1, 1, 1);
