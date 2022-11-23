let button = document.getElementsByTagName('button')[0];
button.addEventListener('click',onClick);
 clearActiveClass();
let a = document.getElementById("login");
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
    return {email,password};
}

async function postData(data){
    try{
        let promise = await fetch(`http://localhost:3030/users/login`,
        {
            method: 'post',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
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
}
