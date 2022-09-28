function search() {
   let list = document.getElementsByTagName('li');
   for(let word of list){
      word.style.textDecoration= 'none';
      word.innerHTML = `${word.textContent}`;

   }
   let input = document.getElementsByTagName('input')[0].value;
   document.getElementById('result').textContent = ``;

   let count = 0;
   for(let word of list){
      let str = word.textContent;
      if(str.match(input)){
        word.style="text-decoration: underline"
      word.innerHTML = `<b>${word.textContent}</b>`;
        count++;
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
