function extractText() {
   let test =  document.getElementsByTagName('li');
   let result = document.getElementById('result');
   let string = '';
    for (let item of test){
       string+=item.textContent + '\n';
    }
    result.textContent = string;


}