import {html,page} from "../api/lib.js";
import {get, put} from "../api/api.js";


const template =(animal)=> html`
<section id="editPage">
    <form @submit=${onSubmit} class="editForm">
        <img src="./images/editpage-dog.jpg">
        <div>
            <h2>Edit PetPal</h2>
            <div class="name">
                <label for="name">Name:</label>
                <input name="name" id="name" type="text" value=${animal.name}>
            </div>
            <div class="breed">
                <label for="breed">Breed:</label>
                <input name="breed" id="breed" type="text" value=${animal.breed}>
            </div>
            <div class="Age">
                <label for="age">Age:</label>
                <input name="age" id="age" type="text" value=${animal.age}>
            </div>
            <div class="weight">
                <label for="weight">Weight:</label>
                <input name="weight" id="weight" type="text" value=${animal.weight}>
            </div>
            <div class="image">
                <label for="image">Image:</label>
                <input name="image" id="image" type="text" value=${animal.image}>
            </div>
            <button class="btn" type="submit">Edit Pet</button>
        </div>
    </form>
    </section>
    `;
let idAnimal;
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let data = Object.fromEntries(form);
    if(!data.name||!data.breed||!data.age||!data.weight||!data.image){
        window.alert('Empty fields');
        return;
    }
    else{
        await put(`/data/pets/${idAnimal}`,data);
        page.redirect(`/catalog/${idAnimal}`);

    }

}

export async function showEdit(ctx){
    let id = ctx.params.id;
    console.log(typeof id);
    idAnimal = id;
    let animal = await get(`/data/pets/${idAnimal}`);  
    ctx.checkIfLogin();
    ctx.render(template(animal));
}