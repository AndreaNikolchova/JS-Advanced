function solve() {
let btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click',function(){
  let textArea = document.getElementsByTagName('textarea')[0].value;
  let tableBody = document.getElementsByClassName('tbody')[0];
  let jsonArr =  JSON.stringify(textArea);
  console.log(jsonArr)

});
function read(jsonArr){
  let tr = document.createElement('tr');
  for(let i = 0 ; i<jsonArr.length;i++){

  }
}


}