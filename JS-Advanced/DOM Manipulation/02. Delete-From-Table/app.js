function deleteByEmail() {
    let table = document.getElementsByTagName('tbody')[0];
    let rows = document.getElementsByTagName('td');
    
    let result = document.getElementById('result');
    let input = document.getElementsByTagName('input')[0].value.toLowerCase();

    for(let email of rows){
        if(email.textContent.toLowerCase().match(input)){
            table.removeChild(email.parentElement);
            result.textContent = 'Deleted.'
            return;
    }
    }
    result.textContent = "Not found.";
}