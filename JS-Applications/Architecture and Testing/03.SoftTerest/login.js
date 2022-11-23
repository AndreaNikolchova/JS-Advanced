import { removeSections } from "./utilities.js";
import { removeHeaders } from "./utilities.js";
import {alreadyHaveAnAccount} from "./utilities.js";

export function showLogin(){
    removeSections('loginPage');
    removeHeaders();
    button();
    alreadyHaveAnAccount(1)
}
function button(){
    let signInButton = document.getElementById('signIn');
    signInButton.addEventListener('click', onClick);
}
function onClick(event){
 event.preventDefault();
    let data = takeInputData();


    postData(data);
   
   removeSections('dashboard-holder');
    removeHeaders();
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('create').style.display = 'block';
    document.getElementById('logout').style.display = 'block';

}
function takeInputData(){
    let email =  document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    return {email,password};
}
async function postData(inputData){
        let obj ={
            email: inputData.email,
            password: inputData.password
        }
        let url = 'http://localhost:3030/users/login';
     let promise = await fetch(url,{
        method: 'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(obj)
     });

        let data =  await promise.json();
        localStorage.setItem('email', data.email);
        localStorage.setItem('accessToken', data.accessToken);


}
