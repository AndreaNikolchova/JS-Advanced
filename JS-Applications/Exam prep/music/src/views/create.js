import { post } from "../api/api.js";
import {html} from "../api/lib.js";
import {page} from "../api/lib.js";
export function showCreate(ctx){
    ctx.render(template());
    ctx.checkUser();
}
const template = ()=> html` 
<section class="createPage">
<form @submit=${onSubmit}>
    <fieldset>
        <legend>Add Album</legend>

        <div class="container">
            <label for="name" class="vhide">Album name</label>
            <input id="name" name="name" class="name" type="text" placeholder="Album name">

            <label for="imgUrl" class="vhide">Image Url</label>
            <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

            <label for="price" class="vhide">Price</label>
            <input id="price" name="price" class="price" type="text" placeholder="Price">

            <label for="releaseDate" class="vhide">Release date</label>
            <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

            <label for="artist" class="vhide">Artist</label>
            <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

            <label for="genre" class="vhide">Genre</label>
            <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

            <label for="description" class="vhide">Description</label>
            <textarea name="description" class="description" placeholder="Description"></textarea>

            <button class="add-album" type="submit">Add New Album</button>
        </div>
    </fieldset>
</form>
</section>`;
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let data = Object.fromEntries(form);
    if(!data.name||!data.imgUrl||!data.price||!data.releaseDate||!data.artist||!data.genre){
        window.alert('Not all fields are field');

    }else{
        await post('/data/albums',data);
        page.redirect('/catalog');
    }


}