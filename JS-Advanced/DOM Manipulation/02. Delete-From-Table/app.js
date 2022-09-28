function deleteByEmail() {
    let table = document.getElementsByTagName('tbody')[0];
    console.log(table);
    let rows = document.getElementsByTagName('td');
    console.log(rows);
    let result = document.getElementById('result');
    let input = document.getElementsByTagName('input').value;
    for(let email of rows){
        if(email.textContent.match(input)){
            table.removeChild(email);
            result.textContent = 'Deleted.'
            return;
    }
    }
    result.textContent = "Not found.";
}