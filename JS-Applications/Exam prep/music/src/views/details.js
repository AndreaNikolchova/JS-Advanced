import { get,del } from "../api/api.js";
import {html,page} from "../api/lib.js";

let id;

export async function showDetails(ctx){
    id = ctx.params.id;
    let album = await get(`/data/albums/${id}`);
    let data = JSON.parse(sessionStorage.userData);
    if(data._id==album._ownerId){
        ctx.render(templateCreator(album));
    }
    else{
        ctx.render(templateNotCreator(album));
    }
}
const templateNotCreator = (album)=> html` <section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
        <div class="albumText">

            <h1>Name: ${album.name}</h1>
            <h3>Artist: ${album.artist}</h3>
            <h4>Genre: ${album.genre}</h4>
            <h4>Price: $${album.price}</h4>
            <h4>Date: ${album.releaseDate}</h4>
            <p>Description: ${album.description}</p>
        </div>
    </div>
</div>
</section>`;

const templateCreator = (album)=> html` <section id="detailsPage">
<div class="wrapper">
    <div class="albumCover">
        <img src=${album.imgUrl}>
    </div>
    <div class="albumInfo">
        <div class="albumText">
        <h1>Name: ${album.name}</h1>
        <h3>Artist: ${album.artist}</h3>
        <h4>Genre: ${album.genre}</h4>
        <h4>Price: $${album.price}</h4>
        <h4>Date: ${album.releaseDate}</h4>
        <p>Description: ${album.description}</p>
        </div>

        <div class="actionBtn">
            <a href="/edit/${album._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
        </div>
    </div>
</div>
</section>`;
async function onDelete(event){
    event.preventDefault();
    await del(`/data/albums/${id}`);
    page.redirect('/catalog');
}