function search() {
   let list = document.getElementsByTagName('li');
   for(let word of list){
      word.style.textDecoration= 'none';
      word.style.fontWeight = 'none';

   }
   let input = document.getElementsByTagName('input')[0].value;
   document.getElementById('result').textContent = ``;

   let count = 0;
   for(let word of list){
      let str = word.textContent;
      if(str.match(input)){
        word.style="text-decoration: underline"
         word.style.fontWeight = "bold";
        count++;
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
