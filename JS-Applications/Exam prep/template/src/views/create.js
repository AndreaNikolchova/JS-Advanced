import { post } from "../api/api.js";
import {html} from "../api/lib.js";
import {page} from "../api/lib.js";
export function showCreate(ctx){
    ctx.render(template());
    ctx.checkUser();
}
const template = ()=> html` `;
async function onSubmit(event){
    event.preventDefault();

}