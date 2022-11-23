import { showHomePage } from "./homePage.js"; 
import {showRegister} from "./register.js";
import { showLogin } from "./login.js";
import {showDashboard} from "./dashboard.js";
import {showCreate} from "./create.js";

showHomePage();


let icon =  document.getElementById('icon');
icon.addEventListener('click',showHomePage);

let register = document.getElementById('register');
register.addEventListener('click',showRegister);

let login = document.getElementById('login');
login.addEventListener('click',showLogin);

let dashboard =  document.getElementById('dashboard');
dashboard.addEventListener('click',showDashboard);

let create = document.getElementById('create');
create.addEventListener('click',showCreate);




 