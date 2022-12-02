import { get } from "../api/api.js";
import {html,render} from "../api/lib.js";


export function showSearch(ctx){
    ctx.render(templateSearchButton());
    ctx.checkUser();
}
const templateSearchButton =()=> html`<section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${onClick} class="button-list">Search</button>
</div>
<h2>Results:</h2>
</section>`;
const template = (albums)=> html` <section id="searchPage">
<h1>Search by Name</h1>

<div class="search">
    <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
    <button @click=${onClick} class="button-list">Search</button>
</div>
<h2>Results:</h2>
${albums.length==0?
    html`<p class="no-result">No result.</p>`:
    albums.map(album=>templateFound(album))}
</section>`;
async function onClick(){
let main = document.getElementById('main-content');
if(!document.getElementById("search-input").value){
    window.alert('Empty Field');
}
else{
    let albums = await get(`/data/albums?where=name%20LIKE%20%22${document.getElementById("search-input").value}%22`);
    render(template(albums),main);
}
}
const templateFound = (album)=> html`<div class="card-box">
<img src=${album.imgUrl}>
<div>
    <div class="text-center">
        <p class="name">Name: ${album.name}</p>
        <p class="artist">Artist: ${album.artist}</p>
        <p class="genre">Genre: ${album.genre}</p>
        <p class="price">Price: $${album.price}</p>
        <p class="date">Release Date: ${album.releaseDate}</p>
    </div>
    ${!sessionStorage.userData?html``:html` <div class="btn-group">
    <a href="/catalog/${album._id}" id="details">Details</a>
</div>`}

</div>
</div>
`;
