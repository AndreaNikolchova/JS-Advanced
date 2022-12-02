import {html} from "../api/lib.js";
import {get} from "../api/api.js";
export async function showCatalog(ctx){
    let albums = await get(`/data/albums?sortBy=_createdOn%20desc&distinct=name`);
    ctx.render(template(albums));
    ctx.checkUser();
}
const template = (albums)=> html` <section id="catalogPage">
<h1>All Albums</h1>
${albums.length==0?html`<p>No Albums in Catalog!</p>`:albums.map(album=>templateCard(album))}
</section>`;

const templateCard = (album)=>html`
<div class="card-box">
<img src=${album.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${!sessionStorage.userData? html``:html` <div class="btn-group">
    <a href="/catalog/${album._id}" id="details">Details</a>
</div>`}
</div>
</div>`;