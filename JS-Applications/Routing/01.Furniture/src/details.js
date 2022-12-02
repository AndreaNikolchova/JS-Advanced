import {html,render} from "../node_modules/lit-html/lit-html.js";
import {serverData} from "./utilities.js";

let template =(data)=> html`
<div class="row space-top">
<div class="col-md-12">
    <h1>Furniture Details</h1>
</div>
</div>
<div class="row space-top">
<div class="col-md-4">
    <div class="card text-white bg-primary">
        <div class="card-body">
            <img src=.${data.img}/>
        </div>
    </div>
</div>
<div class="col-md-4">
    <p>Make: <span>${data.make}</span></p>
    <p>Model: <span>${data.model}</span></p>
    <p>Year: <span>${data.year}</span></p>
    <p>Description: <span>${data.description}</span></p>
    <p>Price: <span>${data.price}</span></p>
    <p>Material: <span>${data.material}</span></p>
    <div id="owner">
        <a href=/details/${data._id}/edit class="btn btn-info">Edit</a>
        <a href=”javascript:void(0)” class="btn btn-red" @click=${onDelete}>Delete</a>
    </div>
</div>
</div>
</div>`;
let div = document.getElementsByClassName('container')[0];
let id = "";
export async function showDetails(ctx){
     id = ctx.path.split('/')[2];
    let data = await serverData(null,null,`/data/catalog/${id}`);
    render(template(data),div);
    /*if(data._ownerId === localStorage.accessToken){
        document.getElementById('owner').style.display ="block";
    }
    else{
        document.getElementById('owner').style.display ="none";
    }*/
    }
async function onDelete(){
    await serverData(null,'delete',`/data/catalog/${id}`);
    window.location = new URL('http://127.0.0.1:5500/');
}