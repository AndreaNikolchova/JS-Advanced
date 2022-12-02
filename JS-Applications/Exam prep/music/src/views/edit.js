import { put,get } from "../api/api.js";
import {html} from "../api/lib.js";
import {page} from "../api/lib.js";
let id;
export async function showEdit(ctx){
    id = ctx.params.id;
    let album = await get(`/data/albums/${id}`);
    ctx.render(template(album));
    ctx.checkUser();
}
const template = (album)=> html` 
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" value=${album.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" value=${album.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" value=${album.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" value=${album.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" value=${album.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" value=${album.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">${album.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
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
    }
    else{
        await put(`/data/albums/${id}`,data);
        page.redirect(`/catalog/${id}`);
    }


}