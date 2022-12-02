import { html,render } from "../node_modules/lit-html/lit-html.js";
import { cats } from "./catSeeder.js";

let divAll = document.getElementById('allCats');
const template = (items) => html` 
<ul>
${items.map(cat=>html`
<li>
<img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
<div class="info">
<button @click=${show.bind(cat.id)} class="showBtn">Show status code</button>
<div class="status" style="display: none" id="${cat.id}">
<h4>Status Code: ${cat.statusCode}</h4>
<p>${cat.statusMessage}</p>
</div>
</div>
</li>
`)}
</ul>
`;
render(template(cats),divAll);

function show(event){
    event.preventDefault();
    if(event.target.textContent===`Show status code`){
        let parent = event.target.parentElement;
        let div = parent.getElementsByTagName('div')[0];
        div.style.display = 'block';
        event.target.textContent = 'Hide status code';
    }
    else{
        let parent = event.target.parentElement;
        let div = parent.getElementsByTagName('div')[0];
        div.style.display = 'none';
        event.target.textContent = 'Show status code';
    }

}
