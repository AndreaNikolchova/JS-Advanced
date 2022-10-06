function create(words) {
   let div = document.getElementById("content");
  for(word of words){
      let currentDiv = document.createElement('div');
      let p = document.createElement('p');
      p.textContent = word;
      p.className = 'div p';
      p.style.display = 'none';
      currentDiv.appendChild(p);
      currentDiv.className = 'div';
      currentDiv.addEventListener('click',function(){
         p.style.display = 'inline';
      });
      div.appendChild(currentDiv);
  }
}