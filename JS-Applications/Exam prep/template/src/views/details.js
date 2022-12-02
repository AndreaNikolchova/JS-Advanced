import { get,del } from "../api/api.js";
import {html,page} from "../api/lib.js";

export async function showDetails(ctx){
    ctx.render(template());
}
const template = ()=> html` `;

