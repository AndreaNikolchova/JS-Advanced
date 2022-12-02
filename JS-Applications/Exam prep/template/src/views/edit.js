import { put,get } from "../api/api.js";
import {html} from "../api/lib.js";
import {page} from "../api/lib.js";
let id;
export async function showEdit(ctx){
   
    ctx.render(template(album));
    ctx.checkUser();
}
const template = ()=> html``;
async function onSubmit(event){
  
}