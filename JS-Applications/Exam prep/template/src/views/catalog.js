import {html} from "../api/lib.js";
import {get} from "../api/api.js";
export async function showCatalog(ctx){
    ctx.render(template());
    ctx.checkUser();
}
const template = ()=> html``;
