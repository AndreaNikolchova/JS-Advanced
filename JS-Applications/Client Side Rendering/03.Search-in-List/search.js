import {towns} from './towns.js'
import {html,render} from "./node_modules/lit-html/lit-html.js";

let template = (items) => html`
<ul>
${items.map(item=>html`<li>${item}</li>`)}
</ul>
`;
let div = document.getElementById('towns');
render(template(towns),div);

let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',search);
function search(event){
    event.preventDefault();
    let input = document.getElementById('searchText');
    let lis = document.getElementsByTagName('li');
    let count = 0;
    for(let li of lis){
        if(li.textContent.match(input.value)){
            count++;
            li.className = 'active';
        }
    }
    let divResult = document.getElementById('result');
    divResult.textContent = `${count} matches found`; 


}
