import {showRegister} from "./register.js";
import { showLogin } from "./login.js";

export function removeSections(idString){
    let sections =  document.getElementsByTagName('section');
    document.getElementById(idString).style.display ='block';
    for(let section of sections){
     if(section.id != idString){
         section.style.display = 'none';
     }
 }
}

export function removeHeaders(){
    let headers =  document.getElementsByTagName('li');
    for(let header of headers){
      header.style.display = 'none';
    }
  
}
export function alreadyHaveAnAccount(index){
    let p =  document.getElementsByClassName('alreadyUser')[index];
    if(index === 0){
        p.addEventListener('click',showLogin);
    }
    else{
        p.addEventListener('click',showRegister);
    }
}

