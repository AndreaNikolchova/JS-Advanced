import {html} from "../api/lib.js";
import {get} from "../api/api.js";


const template = (animals) => html`<section id="dashboard">
<h2 class="dashboard-title">Services for every animal</h2>
<div class="animals-dashboard">
${animals.length==0 ? templateNoAnimals() : animals.map(animal=>templateCard(animal))}
</section>`;
const templateCard = (animal)=>html` <div class="animals-board">
<article class="service-img">
    <img class="animal-image-cover" src="${animal.image}">
</article>
<h2 class="name">${animal.name}</h2>
<h3 class="breed">${animal.breed}</h3>
<div class="action">
    <a class="btn" href="/catalog/${animal._id}">Details</a>
</div>
</div>`
const templateNoAnimals = ()=> html`<!--If there is no pets in dashboard-->
<div>
    <p class="no-pets">No pets in dashboard</p>
</div>`;


export async function showDashboard(ctx){
    let animals =await get(`/data/pets?sortBy=_createdOn%20desc&distinct=name`);
    ctx.render(template(animals));
    ctx.checkIfLogin();
}