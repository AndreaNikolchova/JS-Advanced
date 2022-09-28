function sumTable() {
 let prices = document.getElementsByTagName('td');
 let sum =0;
 for(let i = 0;i<prices.length;i++){
    if(i%2!==0){
        sum+= Number(prices[i].textContent);
    }
 }
  document.getElementById('sum').textContent = sum;
}