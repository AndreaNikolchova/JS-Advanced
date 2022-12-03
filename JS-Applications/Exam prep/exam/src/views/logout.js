import { logout } from "../api/user.js";
import {page} from "../api/lib.js";

export async function clickLogout(){
    await logout();
     page.redirect('/catalog');
}