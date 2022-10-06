function solve(){
   let products = document.getElementsByClassName('add-product');
   let textArea = document.getElementsByTagName('textarea')[0];
   let sum = 0;
   let productSelected =[];
   let checkout = false;
   for(let i =0;i<products.length;i++){
      products[i].addEventListener('click',function(){
         if(checkout === true){
            return;
         }
         sum+=Number(products[i].parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent);
         textArea.value+=`Added ${products[i].parentElement.parentElement.getElementsByClassName("product-title")[0].textContent} for ${Number(products[i].parentElement.parentElement.getElementsByClassName("product-line-price")[0].textContent).toFixed(2)} to the cart.\n`;
         if(!productSelected.includes(products[i].parentElement.parentElement.getElementsByClassName("product-title")[0].textContent))
         {
            productSelected.push(products[i].parentElement.parentElement.getElementsByClassName("product-title")[0].textContent);
         }
      });
   }
   let buttonEnd = document.getElementsByClassName("checkout")[0];
   buttonEnd.addEventListener('click',function(){
      if(checkout === true){
         return;
      }
      textArea.value+= `You bought ${productSelected.join(', ')} for ${sum.toFixed(2)}.`;
    checkout =true;
      

   });
   

}