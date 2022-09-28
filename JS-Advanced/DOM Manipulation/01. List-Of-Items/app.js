function addItem() {
   let ul = document.getElementById('items');
   let input = document.getElementById('newItemText').value;
   let newLi = document.createElement('li');
   newLi.textContent = input;
   ul.appendChild(newLi);
}