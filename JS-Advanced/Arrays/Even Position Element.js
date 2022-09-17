function getEvenPosition(arr){
    console.log(arr.filter((n,i)=>i%2==0).join(' '));
}
getEvenPosition(['20', '30', '40', '50', '60']);