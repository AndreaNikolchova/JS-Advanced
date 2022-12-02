import { html } from "../api/lib.js";
import {register} from "../api/user.js";
import {page} from "../api/lib.js";
const template = ()=>html`
`;
export function showRegister(ctx){
    ctx.render(template())
    ctx.checkUser();
}
async function onSubmit(event){
    event.preventDefault();
  
}