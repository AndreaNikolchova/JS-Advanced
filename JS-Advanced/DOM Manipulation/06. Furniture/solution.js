function solve() {
  let generateBtn = document.getElementsByTagName('button')[0];
  let buyButton = document.getElementsByTagName('button')[1];
  generateBtn.addEventListener('click',function(){
  let textArea = document.getElementsByTagName('textarea')[0].value;
  let table =  document.getElementsByClassName('table')[0];
  let tableBody = document.getElementsByTagName('tbody')[0];
  let jsonArr =  JSON.parse(textArea);
  for(let obj of jsonArr){
      let tr = document.createElement('tr');
      let td =  document.createElement('td');
      let img = document.createElement('img');
      img.src = obj['img'];
      td.appendChild(img);
      tr.appendChild(td);
      for(let criteria in obj){
        if(criteria !== 'img'){
          let td = document.createElement('td');
          let p = document.createElement('p');
          p.textContent = obj[criteria];
          td.appendChild(p);
          tr.appendChild(td);
        }
      }
      let tdr = document.createElement('td');
      let input = document.createElement('input');
      input.type = 'checkbox';
      tdr.appendChild(input);
      tr.appendChild(tdr);
      tableBody.appendChild(tr);
  }
  });
  buyButton.addEventListener('click',function(){
    let result =[];
    let sum = 0;
    let count=0;;
    let sumAverage = 0;
    let trs = document.getElementsByTagName('tr');
    for(let i = 1;i<trs.length ; i++){
      let tds = trs[i].getElementsByTagName('td');
      let input = tds[tds.length - 1].getElementsByTagName('input')[0];
      if(input.checked){
        let pName = tds[1].getElementsByTagName('p')[0];
        let pPrice = tds[2].getElementsByTagName('p')[0];
        let pDecor = tds[3].getElementsByTagName('p')[0];
        
        result.push(pName.textContent);
        sum+= Number(pPrice.textContent);
        count++;
        sumAverage +=Number(pDecor.textContent);
      }
    }
    sumAverage/=count;
    let textArea = document.getElementsByTagName('textarea')[1];
    textArea.value += `Bought furniture: ${result.join(', ')}${'\n'}`;
    textArea.value += `Total price: ${sum.toFixed(2)}${'\n'}`;
    textArea.value += `Average decoration factor: ${sumAverage.toFixed(2)}`;
  });
}