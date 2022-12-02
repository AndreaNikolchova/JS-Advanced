import page from "../node_modules/page/page.mjs";
import {showRegister} from "./register.js";
import { showHomePage } from "./dashboard.js";
import {showDetails} from "./details.js"
import { showEdit } from "./edit.js";
import { showCreate } from "./create.js";
import { showLogin } from "./login.js";

if(localStorage.username !== undefined){
    document.getElementById('guest').style.display ='none';
    document.getElementById('user').getElementsByTagName('a')[2].style.display='inline-block';
}
else{
    document.getElementById('guest').style.display ='inline-block';
    document.getElementById('user').style.display='none';
}
page('/register',showRegister);
page('/login',showLogin);
page('/index.html','/');
page('/dashboard','/');
page('/',showHomePage);
page('/details/:id',showDetails);
page('/details/:id/edit',showEdit);
page('/create',showCreate);
page.start();