import {html,render} from "../node_modules/lit-html/lit-html.js";
import {serverData} from "./utilities.js";

let template = html` <div class="row space-top">
<div class="col-md-12">
    <h1>Edit Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control" id="new-make" type="text" name="make" @change=${makeAndModel}>
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control id="new-model" type="text" name="model" @change=${makeAndModel}>
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control" id="new-year" type="number" name="year" @change=${year} >
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control" id="new-description" type="text" name="description" @change=${description} >
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control" id="new-price" type="number" name="price" @change=${price}>
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control" id="new-image" type="text" name="img" @change=${image}>
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material" >
        </div>
        <input type="submit" class="btn btn-info" value="Edit" @click=${onEdit}/>
    </div>
</div>
</form>`;
let div= document.getElementsByClassName('container')[0];
let id ="";
export function showEdit(ctx){
    id = ctx.path.split('/')[2];
    render(template,div);
}
function makeAndModel(event){
    if(event.target.value.length<4){
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
    }
    else{
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}
function year(event){
    if(event.target.value<1950 ||event.target.value>2050){
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
    }
    else{
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}
function description(event){
    if(event.target.value.length<10){
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
    }
    else{
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}
function price(event){
    if(event.target.value<0){
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
    }
    else{
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}
function image(event){
    if(event.target.value.length<0){
        event.target.classList.remove('is-valid');
        event.target.classList.add('is-invalid');
    }
    else{
        event.target.classList.remove('is-invalid');
        event.target.classList.add('is-valid');
    }
}
function onEdit(event){
    let form = new FormData(event.parentElement.parentElement.parentElement);
    let data =  Object.fromEntries(form);
    serverData(data,'put',`data/catalog/${id}`);
}