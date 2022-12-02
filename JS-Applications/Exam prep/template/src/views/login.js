import { html } from "../api/lib.js";
import {login} from "../api/user.js";
import {page} from "../api/lib.js";
const template = ()=>html``;
export function showLogin(ctx){
    ctx.render(template());
    ctx.checkUser();
}
async function onSubmit(event){
    event.preventDefault();
}