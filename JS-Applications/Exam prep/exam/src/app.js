import {page} from "./api/lib.js";
import {render} from "./api/lib.js";

import { showCatalog } from "./views/catalog.js";
import { showCreate } from "./views/create.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showHome } from "./views/homepage.js";
import { showLogin } from "./views/login.js";
import { clickLogout } from "./views/logout.js";
import { showRegister } from "./views/register.js";

const main = document.getElementsByTagName('main')[0];
let logout =  document.getElementsByClassName('user')[0].getElementsByTagName('a')[1];
logout.addEventListener('click',clickLogout);

page(decorateRender);
page('/',showHome);
page('/login',showLogin);
page('/register',showRegister);
page('/catalog',showCatalog);
page('/create',showCreate);
page('/catalog/:id',showDetails);
page('/edit/:id',showEdit)
page.start();

function decorateRender(ctx,next){
    ctx.render = renderMain;
    ctx.checkUser = checkIfUser;
    next();
}
function renderMain(content){
    render(content,main)
}
function checkIfUser(){
    if(!sessionStorage.userData){
        document.getElementsByClassName('user')[0].style.display ='none';
        document.getElementsByClassName('guest')[0].style.display ='inline-block';
    }
    else{
        document.getElementsByClassName('user')[0].style.display ='inline-block';
        document.getElementsByClassName('guest')[0].style.display ='none';
    }
}