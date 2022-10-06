function addItem() {
    let text = document.getElementById("newItemText");
    let value = document.getElementById("newItemValue");
    let select = document.getElementById("menu");
    let option = document.createElement('option');
    option.value= value.value;
    option.textContent = text.value;
    text.value ="";
    value.value ="";
    select.appendChild(option);

}