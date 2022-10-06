function addItem() {
    let ul = document.getElementById('items');
    let input = document.getElementById('newItemText').value;
    let newLi = document.createElement('li');
    newLi.textContent = input;

    let link = document.createElement("a");

    let text = document.createTextNode('[Delete]');

    link.appendChild(text);

    link.href = "#"

    newLi.appendChild(link);
    link.addEventListener("click",function(){
        ul.removeChild(newLi);
    });
    
    ul.appendChild(newLi);


}