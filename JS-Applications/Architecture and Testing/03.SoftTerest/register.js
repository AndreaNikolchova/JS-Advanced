import { removeSections } from "./utilities.js";
import { removeHeaders } from "./utilities.js";
import {alreadyHaveAnAccount} from "./utilities.js";


export function showRegister(){
    removeSections('registerPage');
    removeHeaders();
    button();
    alreadyHaveAnAccount(0);
}
function button(){
    let signUpButton = document.getElementById('signUp');
    signUpButton.addEventListener('click',onClick);
}

function onClick(event){
 event.preventDefault();
    let data = takeInputData();
    try{
        validate(data.email,data.password,data.rePassword);
        postData(data);
    }
    catch(e){
        window.alert(e.message);

    }
    removeSections('dashboard-holder');
    removeHeaders();
    document.getElementById('dashboard').style.display = 'block';
    document.getElementById('create').style.display = 'block';
    document.getElementById('logout').style.display = 'block';
  

}
function takeInputData(){
    let email =  document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let rePassword =  document.getElementById('inputRepeatPassword').value;
    return {email,password,rePassword};
}
function validate(email,password,rePassword){
    if(email.length < 3||password.length<3||password !== rePassword){
        throw new Error('Invalid email or password please try again!');
    }
   
}
async function postData(inputData){
    try{
        let obj ={
            email: inputData.email,
            password: inputData.password
        }
        let url = 'http://localhost:3030/users/register';
    let promise = await fetch(url,{
        method: 'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(obj)
     });
        if(!promise.ok){
            throw new Error('You already have an account with this email.')
        }

        let data =  await promise.json();
        localStorage.setItem('email', data.email);
        localStorage.setItem('accessToken', data.accessToken);
    }
    catch(e){
        window.alert(e.message);
    }

}


