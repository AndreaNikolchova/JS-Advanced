import {html,page} from "../api/lib.js";
import {get,del} from "../api/api.js";


const templateUser =(animal)=> html`
<section id="detailsPage">
<div class="details">
    <div class="animalPic">
        <img src=${animal.image}>
    </div>
    <div>
        <div class="animalInfo">
            <h1>Name: ${animal.name}</h1>
            <h3>Breed: ${animal.breed}</h3>
            <h4>Age: ${animal.age}</h4>
            <h4>Weight: ${animal.weight}</h4>
            <h4 class="donation">Donation: 0$</h4>
            <div class="actionBtn">
                <a href="#" class="donate">Donate</a>
            </div>
    </div>
</div>
</section>`;

const templateCreator =(animal)=> html`
<section id="detailsPage">
<div class="details">
    <div class="animalPic">
        <img src=${animal.image}>
    </div>
    <div>
        <div class="animalInfo">
            <h1>Name: ${animal.name}</h1>
            <h3>Breed: ${animal.breed}</h3>
            <h4>Age: ${animal.age}</h4>
            <h4>Weight: ${animal.weight}</h4>
            <h4 class="donation">Donation: 0$</h4>
            <div class="actionBtn">
            <a href="/edit/${animal._id}" class="edit">Edit</a>
            <a  @click=${onDelete}href="javascript:void(0)" class="remove">Delete</a>
                <a href="#" class="donate">Donate</a>
            </div>
    </div>
</div>
</section>`;
let idAnimal;
export async function showDetails(ctx){
     idAnimal = ctx.params.id;
    let animal = await get(`/data/pets/${idAnimal}`);  
    ctx.checkIfLogin();
    let _id = null;
    if(sessionStorage.userData!=undefined){
        let data = JSON.parse(sessionStorage.userData);
        _id = data._id;  
    
        if(_id == animal._ownerId){
            
            ctx.render(templateCreator(animal));
        }else{

            ctx.render(templateUser(animal));
        }
          
    }
}
async function onDelete(){
    await del(`/data/pets/${idAnimal}`)
    page.redirect('/');
}