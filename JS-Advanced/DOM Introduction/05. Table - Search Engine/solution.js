function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let list = document.getElementsByTagName('td');
      let input = document.getElementsByTagName('input')[0].value.toLowerCase();
      for(let word of list){
         word.parentElement.classList.remove('select');
         
         }
      for(let word of list){
         let str = word.textContent.toLowerCase();
         if(str.match(input)){
            word.parentElement.classList.add('select');
         }
      }
      
      document.getElementsByTagName('input')[0].value = '';
     
      
   }
}