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
const template = (album)=> html`<section id="edit">
<div class="form">
  <h2>Edit Album</h2>
  <form @submit=${onSubmit} class="edit-form">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value=${album.singer} />
    <input type="text" name="album" id="album-album" placeholder="Album" value=${album.album} />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value=${album.imageUrl} />
    <input type="text" name="release" id="album-release" placeholder="Release date" value=${album.release} />
    <input type="text" name="label" id="album-label" placeholder="Label" value=${album.label} />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" value=${album.sales} />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;
async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let data = Object.fromEntries(form);
    if(!data.singer||!data.album||!data.imageUrl||!data.release||!data.label||!data.sales){
        window.alert('Empty fields!');
    }
    else{
        await put(`/data/albums/${id}`,data);
        page.redirect(`/catalog/${id}`);
    }
  
}