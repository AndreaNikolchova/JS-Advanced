function solve() {
    let text = document.getElementById('text').value.toLowerCase();
    let result = document.getElementById('result');
    let convention = document.getElementById('naming-convention').value;
    let arrOfWords = text.split(' ');
    let resultString ='';

    if(convention !== "Camel Case" && convention!== "Pascal Case"){
      result.textContent = 'Error!';
      return;
    }
    
    if(convention === 'Pascal Case'){
      resultString+=arrOfWords[0][0].toUpperCase() + arrOfWords[0].substring(1);
    }
    else{
      resultString+=arrOfWords[0];
    }

    for (let i = 1; i<arrOfWords.length; i++){
      resultString+= arrOfWords[i][0].toUpperCase()+ arrOfWords[i].substring(1);
    }
    result.textContent = resultString;
}
