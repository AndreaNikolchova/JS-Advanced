import { get,del } from "../api/api.js";
import {html,page} from "../api/lib.js";
import {getUserData} from "../utilities.js";
let id;
export async function showDetails(ctx){
    id = ctx.params.id;
    let album = await get(`/data/albums/${id}`);
    ctx.render(template(album));
    ctx.checkUser();

}
const template = (album)=> html`<section id="details">
<div id="details-wrapper">
  <p id="details-title">Album Details</p>
  <div id="img-wrapper">
    <img src=${album.imageUrl} alt="example1" />
  </div>
  <div id="info-wrapper">
    <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
    <p>
      <strong>Album name:</strong><span id="details-album">${album.album}</span>
    </p>
    <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
    <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
    <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
  </div>
  <div id="likes">Likes: <span id="likes-count">0</span></div>
  <div id="action-buttons">
  <a href="" id="like-btn">Like</a>
  ${getUserData()._id==album._ownerId?
    html`
  <a href="/edit/${album._id}" id="edit-btn">Edit</a>
  <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
`:
html``}
</div>
</div>
</section>`;
async function onDelete(event){
    event.preventDefault();
    await del(`/data/albums/${id}`);
    page.redirect('/catalog');
}

