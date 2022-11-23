let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',onClick);
clearActiveClass();
let a = document.getElementById("register");
a.className = 'active';

let divUser = document.getElementById("user");
divUser.style.display ='none';

async function onClick(event){
    event.preventDefault();
    postData(getDataFromInput());
    clearInputs();
}

function getDataFromInput(){
    let email = document.getElementsByTagName('input')[0].value;
    let password = document.getElementsByTagName('input')[1].value;
    let rePassword = document.getElementsByTagName('input')[2].value;
    return {email,password,rePassword};
}
function validation(data){
    if(data.password!==data.rePassword){
        throw new Error("Passwords do not match!");
    }
    return data;
    
}

async function postData(data){
    try{
        let promise = await fetch(`http://localhost:3030/users/register`,
        {
            method: 'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(validation(data))
        });
        let token = await promise.json();  
        if(!promise.ok){
            throw new Error(token.message);
        }
        localStorage.setItem('accessToken',token.accessToken);
        localStorage.setItem('username', token.email);
        localStorage.setItem('ownerId', token._id);
        document.getElementsByTagName('p')[1].textContent = "";
        document.getElementsByTagName('span')[0].textContent= token.email;
        window.location = './index.html';
       


    }
    catch(e){
        let p = document.getElementsByTagName('p')[1];
        p.textContent = e.message;
        clearInputs();
    }
}
function clearActiveClass(){
    for(let a of document.querySelectorAll('a')){
        a.className ='';
    }
}
function clearInputs(){
    document.getElementsByTagName('input')[0].value ="";
    document.getElementsByTagName('input')[1].value ="";
    document.getElementsByTagName('input')[2].value ="";
}