import {html,page} from "../api/lib.js";
import {post} from "../api/api.js";

const template = () => html`<section id="createPage">
<form @submit=${onSubmit} class="createForm">
    <img src="./images/cat-create.jpg">
    <div>
        <h2>Create PetPal</h2>
        <div class="name">
            <label for="name">Name:</label>
            <input name="name" id="name" type="text" >
        </div>
        <div class="breed">
            <label for="breed">Breed:</label>
            <input name="breed" id="breed" type="text" >
        </div>
        <div class="Age">
            <label for="age">Age:</label>
            <input name="age" id="age" type="text" >
        </div>
        <div class="weight">
            <label for="weight">Weight:</label>
            <input name="weight" id="weight" type="text" >
        </div>
        <div class="image">
            <label for="image">Image:</label>
            <input name="image" id="image" type="text" >
        </div>
        <button class="btn" type="submit">Create Pet</button>
    </div>
</form>
</section>`

async function onSubmit(event){
    event.preventDefault();
    let form =  new FormData(event.target);
    let data = Object.fromEntries(form);
    if(!data.name||!data.breed||!data.age||!data.weight||!data.image){
        window.alert('Can not create post with empty fields');
        return;
    }
    else{
        await post(`/data/pets`,data);
        page.redirect('/');

    }
}

export function showCreate(ctx){
    ctx.render(template());
    ctx.checkIfLogin();
}