let template = (onCreate) => html`<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form class="create-form" @submit= ${onCreate}>
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;


export async function showCreate(ctx) {
    ctx.render(template(onCreate));

    async function onCreate(e) {
        e.preventDefault();
        let form = new FormData(e.target);
        let data = Object.fromEntries(form);

        if (data.singer === '' || data.album === '' || data.imageUrl === '' || data.release === ''  ||data.label === '' || data.sales === '') {
            alert('all input fields must be filled');
            return;
        }
        else {
            await createAlbum(data);
            ctx.page.redirect('/dashboard');
        }
    }
}




/*export function showCreate(ctx){
    ctx.render(template());
    ctx.checkUser();
}
const template = ()=> html` 
<section id="create">
<div class="form">
  <h2>Add Album</h2>
  <form @submit=${onSubmit} class="create-form">
    <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
    <input type="text" name="album" id="album-album" placeholder="Album" />
    <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
    <input type="text" name="release" id="album-release" placeholder="Release date" />
    <input type="text" name="label" id="album-label" placeholder="Label" />
    <input type="text" name="sales" id="album-sales" placeholder="Sales" />

    <button type="submit">post</button>
  </form>
</div>
</section>`;
*/

async function onSubmit(event){
    event.preventDefault();
    let form = new FormData(event.target);
    let {singer,album,imageUrl,release,label,sales} = Object.fromEntries(form);
    if(!singer||!album||!imageUrl||!release||!label||!sales){
        alert('all input fields must be filled');
        return;
    }
    else{
        await post('/data/albums',data);
        page.redirect('/catalog');
    }
  
}