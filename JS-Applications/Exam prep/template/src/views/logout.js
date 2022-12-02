import { logout } from "../api/user.js";
import {page} from "../api/lib.js";

export async function clickLogout(){
     logout();
     page.redirect('/');
}