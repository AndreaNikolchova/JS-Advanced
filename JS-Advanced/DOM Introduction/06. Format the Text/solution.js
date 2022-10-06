function solve() {
  let text = document.getElementById('input');
  let sentences = text.value.split('.');
  let div = document.getElementById('output');
  let count = 0;
  let p = document.createElement('p');
  let num = sentences.length;
 for(let i = 0; i<num; i ++){
  if(count === 3 ){
    div.appendChild(p);
    p = document.createElement('p');
    count = 0;
  }
  if(i+1===num)
  {
    p.textContent += sentences[i];
  }
  else{
    p.textContent += sentences[i] + '.';
    count++;
  }
 }
 if(count>0){

 div.appendChild(p);
}
}