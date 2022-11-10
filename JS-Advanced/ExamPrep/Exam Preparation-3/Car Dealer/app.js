window.addEventListener("load", solve);

function solve() {
  let buttonPublish = document.getElementsByTagName('button')[0];
  let profitMade = document.getElementById('profit');
  let ul = document.getElementById('cars-list');
  buttonPublish.addEventListener('click',(e)=>{
    e.preventDefault();
      let make = document.getElementById('make').value;
      let model = document.getElementById('model').value;
      let year = document.getElementById('year').value
      let option = document.getElementById('fuel').value;
      let originalPrice = Number(document.getElementById('original-cost').value);
      let sellingPrice = Number(document.getElementById('selling-price').value);
      let tbody = document.getElementById('table-body');

      if(!make||!model||!year||!option||!originalPrice||!sellingPrice||originalPrice>sellingPrice){
        return;
      }

      let tr = document.createElement('tr');
      tr.className = 'row';

      let tdMake  = document.createElement('td');
      tdMake.textContent = make;

      let tdModel = document.createElement('td');
      tdModel.textContent = model;

      let tdYear = document.createElement('td');
      tdYear.textContent = year;

      let tdOption = document.createElement('td');
      tdOption.textContent = option;

      let tdOriginalPrice = document.createElement('td');
      tdOriginalPrice.textContent = originalPrice;

      let tdSellingPrice = document.createElement('td');
      tdSellingPrice.textContent = sellingPrice;

      
      let buttonEdit = document.createElement('button');
      buttonEdit.className = "action-btn edit";
      buttonEdit.textContent = 'Edit';
      buttonEdit.addEventListener('click',()=>{
        document.getElementById('make').value = tdMake.textContent;
        document.getElementById('model').value= tdModel.textContent;
        document.getElementById('year').value= tdYear.textContent;
        document.getElementById('fuel').value= tdOption.textContent;
        document.getElementById('original-cost').value= tdOriginalPrice.textContent;
        document.getElementById('selling-price').value= tdSellingPrice.textContent;
        tbody.removeChild(tr);

      });

      let buttonSell = document.createElement('button');
      buttonSell.className = "action-btn sell";
      buttonSell.textContent = 'Sell';
      buttonSell.addEventListener('click',()=>{
        let li = document.createElement('li');

        let spanMakeAndModel = document.createElement('span');
        spanMakeAndModel.textContent = tdMake.textContent + " " + tdModel.textContent;

        let spanYear = document.createElement('span');
        spanYear.textContent = tdYear.textContent;

        let spanProfit = document.createElement('span');
        spanProfit.textContent = Number(tdSellingPrice.textContent) - Number(tdOriginalPrice.textContent);
        let currentProfit = Number(profitMade.textContent);
        profitMade.textContent = (currentProfit + (Number(tdSellingPrice.textContent) - Number(tdOriginalPrice.textContent))).toFixed(2);
        li.appendChild(spanMakeAndModel);
        li.appendChild(spanYear);
        li.appendChild(spanProfit);
        li.className = 'each-list';
        ul.appendChild(li);
        tbody.removeChild(tr);
      });
      let tdButtons = document.createElement('td');
      tdButtons.appendChild(buttonEdit);
      tdButtons.appendChild(buttonSell);

      tr.appendChild(tdMake);
      tr.appendChild(tdModel);
      tr.appendChild(tdYear);
      tr.appendChild(tdOption);
      tr.appendChild(tdOriginalPrice);
      tr.appendChild(tdSellingPrice);
      tr.appendChild(tdButtons);
      tbody.appendChild(tr);

    
      document.getElementById('make').value = '';
      document.getElementById('model').value= '';
      document.getElementById('year').value= '';
      document.getElementById('fuel').value= '';
      document.getElementById('original-cost').value= '';
      document.getElementById('selling-price').value= '';
    });
}
