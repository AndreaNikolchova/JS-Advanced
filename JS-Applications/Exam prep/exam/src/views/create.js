import { post } from "../api/api.js";
import {html} from "../api/lib.js";

export function showCreate(ctx){
    ctx.render(template(onSubmit));
    ctx.checkUser();
    async function onSubmit(event){
        event.preventDefault();
        let form = new FormData(event.target);
        let data = Object.fromEntries(form);
        if(data.singer==="" || data.album===""||data.imageUrl==="" ||data.release==="" || data.label==="" || data.sales===""){
            alert(`empty fields`);
            return;
        }
        else{
            await createAlbum(data);
            ctx.page.redirect('/catalog');
        }
    }
    
}
const template = (onSubmit)=> html`
<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit=${onSubmit}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>
`;
 async function createAlbum(data) {
    let result = await post('/data/albums', data);
    return result;
}