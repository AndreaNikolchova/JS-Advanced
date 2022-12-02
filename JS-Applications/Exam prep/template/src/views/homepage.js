import {html} from "../api/lib.js";
export function showHome(ctx){
    ctx.render(template());
    ctx.checkUser();
}
const template = ()=> html``;
