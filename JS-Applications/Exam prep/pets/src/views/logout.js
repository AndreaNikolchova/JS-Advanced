import { logout } from "../api/user.js";
import { page } from "../api/lib.js";
export async function logoutPage(ctx){
   await logout();
   page.redirect('/');
}