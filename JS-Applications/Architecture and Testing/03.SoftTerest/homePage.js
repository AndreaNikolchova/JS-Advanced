import { showDashboard } from "./dashboard.js";
import {showRegister } from "./register.js";
import { removeSections } from "./utilities.js";
import { removeHeaders } from "./utilities.js";

export function showHomePage(){
    removeHeaders();
    header();
    getStartedButton();

 }
 function header(){
    document.getElementById('dashboard').style.display = 'block';
 
    if(localStorage.email != undefined){
       
        document.getElementById('create').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
        return;
    }
    removeSections('homepage');
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
 }

function getStartedButton(){
    let button = document.getElementById('buttonGetStarted');
    button.addEventListener('click',showRegister);
}

