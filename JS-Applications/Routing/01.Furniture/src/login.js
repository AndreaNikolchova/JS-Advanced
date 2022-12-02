import {html,render} from "../node_modules/lit-html/lit-html.js";
import {serverData} from "./utilities.js";

let template = html`<div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Login" @click=${onClick}/>
    </div>
</div>
</form>`;
let div = document.getElementsByClassName('container')[0];
export function showLogin(){
    render(template,div);
}
async function onClick(event){
    event.preventDefault();
    try{
        await serverData(getFormData(event.target),'post','/users/login');
        window.location = new URL('http://127.0.0.1:5500/');
    }
    catch(e){
        console.log(e);
    }
}
function getFormData(target){
    let form = new FormData(target.parentElement.parentElement.parentElement);
    let {email, password} = Object.fromEntries(form);
    return {email, password};
    
}