import {html} from "../api/lib.js";
import {get} from "../api/api.js";
export async function showCatalog(ctx){
    let albums = await get('/data/albums?sortBy=_createdOn%20desc');
    ctx.render(template(albums));
    ctx.checkUser();
}
const template = (albums)=> html` <section id="dashboard">
<h2>Albums</h2>
${albums.length==0?html`<h2>There are no albums added yet.</h2>`:templateAll(albums)}
</section>`;
const templateCard = (album)=>html`
<li class="card">
<img src=${album.imageUrl} alt="travis" />
<p>
  <strong>Singer/Band: </strong><span class="singer">${album.singer}</span>
</p>
<p>
  <strong>Album name: </strong><span class="album">${album.album}</span>
</p>
<p><strong>Sales:</strong><span class="sales">${album.sales}</span></p>
<a class="details-btn" href="/catalog/${album._id}">Details</a>
</li>`
const templateAll = (albums)=>html`<ul class="card-wrapper">
${albums.map(album=> templateCard(album))}
</ul>`;
