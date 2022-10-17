function generateReport() {
    let rows = document.getElementsByTagName('tr');
    let headers = document.getElementsByTagName('th');
    let output = document.getElementById('output');
    let result = [];
    let heads = [];
    for(let head of headers){
        let input = head.getElementsByTagName('input')[0];
        if(input.checked){
            heads.push(head.textContent);
        }
        else{
            heads.push(0);
        }
    }
    for(let index  = 1; index < rows.length;index++){
        let elements = rows[index].getElementsByTagName('td');
        let obj = {};
        for(let i = 0; i< heads.length ; i++){
            if(heads[i]!==0){
                obj[heads[i].toLowerCase().trim()] = elements[i].textContent;
            }
        }
        result.push(obj);
    }
    output.value = JSON.stringify(result);

}