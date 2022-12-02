import {render,html} from "../node_modules/lit-html/lit-html.js";
let button = document.getElementById('btnLoadTowns');
button.addEventListener('click',onClick);
function onClick(event){
    event.preventDefault();
    let form = new FormData(event.target.parentElement);
    let data = Object.fromEntries(form);
    let arr = data.towns.split(', ');
    console.log(template(arr));
    render(template(arr),document.getElementById('root'));
}

const template = (items) => html`
    <ul>
    ${items.map(i=> html`<li>${i}</li>`)}
    </ul>`;