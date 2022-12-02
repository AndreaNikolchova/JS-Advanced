import { page } from './api/lib.js';
import { render } from './api/lib.js';

import { showHomepage } from './views/homepage.js';
import { showLogin } from './views/login.js';
import { logoutPage } from './views/logout.js';
import { showRegister } from './views/register.js';
import { showDashboard } from './views/dashboard.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';

const main = document.getElementById('content');
const logoutA = document.getElementsByTagName('a')[5];
logoutA.addEventListener('click',logoutPage);
checkIfLogin();

page(decorateContext);
page('/',showHomepage);
page('/register',showRegister);
page('/login',showLogin);
page('/catalog',showDashboard);
page('/create',showCreate);
page('/catalog/:id',showDetails);
page('/edit/:id',showEdit);


page.start();

function decorateContext(ctx,next){
    ctx.render = renderMain;
    ctx.checkIfLogin = checkIfLogin;
    next();
}
function renderMain(content){
    render(content,main);
}
function checkIfLogin(){

    if(sessionStorage.userData===undefined){
        document.getElementsByTagName('li')[4].style.display='none';
        document.getElementsByTagName('li')[5].style.display='none';
        document.getElementsByTagName('li')[2].style.display='block';
        document.getElementsByTagName('li')[3].style.display='block';
    }
    else{
        document.getElementsByTagName('li')[4].style.display='block';
        document.getElementsByTagName('li')[5].style.display='block';
        document.getElementsByTagName('li')[2].style.display='none';
        document.getElementsByTagName('li')[3].style.display='none';
    }
}