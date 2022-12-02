import{html,render} from "./node_modules/lit-html/lit-html.js";

document.querySelector('#searchBtn').addEventListener('click', onClick);
let tableBody = document.getElementsByTagName('tbody')[0];

function onClick(event) {
   event.preventDefault();
   let input = document.getElementById('searchField');
   let trs = document.getElementsByTagName('tr');
   let trsClass = document.getElementsByClassName('select');

   for(let tr of trs){
       if(tr.textContent.toLowerCase().match(input.value.toLowerCase())){
           tr.className = 'select';
       }
       else{
         tr.className = '';
       }
   }
   input.value ="";

}

async function getDataFromServer(){
   let promise =  await fetch(`http://localhost:3030/jsonstore/advanced/table`);
   let data = await promise.json();
   return data;
}
async function visualize(){
   let obj = await getDataFromServer();
   let arr = [];
   for(let id in obj){
       arr.push(obj[id]);
   }
   let template = (items)=>html`
   ${items.map(item=>html`<tr><td>${item.firstName+ " " + item.lastName}</td><td>${item.email}</td><td>${item.course}</td></tr>`)}
   `;
   render(template(arr),tableBody);
}
await visualize();