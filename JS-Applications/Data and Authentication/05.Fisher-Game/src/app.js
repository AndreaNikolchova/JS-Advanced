clearActiveClass();
let a = document.getElementById("home");
a.className = 'active';
let divUser = document.getElementById("user");
divUser.style.display ='none';
divUser.addEventListener('click',onClickLogout);
let buttonAdd = document.getElementsByClassName('add')[0];
buttonAdd.addEventListener('click',onClickAdd);
disableUpdateAndDelete();
let span = document.getElementsByTagName('span')[0];
checkLoginOrRegister();
loadButton();

 async function onClickAdd(event){
    event.preventDefault();
    let form = new FormData(event.target.parentElement.parentElement);
    let {angler,weight,species,location,bait,captureTime} = Object.fromEntries(form);
    weight = Number(weight);
    captureTime = Number(captureTime);
    let ownerId = localStorage.ownerId;
    let obj = {angler,weight,species,location,bait,captureTime,ownerId};
    await postData(obj);
    await load(event);

}
async function postData(data){
    await fetch(`http://localhost:3030/data/catches`,{
        method:'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    } )
}
function disableButtons(){
    for(let button of document.querySelectorAll('button')){
        if(button.className !== 'load'){
            button.disabled = true;
        }
    }
}
function checkLoginOrRegister(){
    if(localStorage.username !== undefined){
        span.textContent = localStorage.username;
        let div = document.getElementById("guest");

        div.style.display = 'none';
      
        divUser.style.display ='inline-block';
        buttonAdd.disabled = false;

    }
    else{
        span.textContent = 'guest';
        disableButtons();
    }
}
function clearActiveClass(){
    for(let a of document.querySelectorAll('a')){
        a.className ='';
    }
}

async function onClickLogout(event){
   await getServerLogout();
    localStorage.clear();
    event.target.style.display = 'none';

    let div = document.getElementById("guest");
    div.style.display = 'inline-block';
    span.textContent = 'guest';
    disableButtons();
}
async function getServerLogout(){
    await fetch('http://localhost:3030/users/logout',{
        method: 'get',
        headers: {'X-Authorization':`${localStorage.accessToken}`}
    });
}

function loadButton(){
    let button = document.getElementsByClassName('load')[0];
    button.addEventListener('click',load);
}
async function load(event){
event.preventDefault();
let data = await getCatches();
if(data.length > 2){
    let divCatches = document.getElementById('catches');
    for(let i = 2; i<data.length; i++){
        let div = document.getElementsByClassName('catch')[0];
        let divClone = div.cloneNode(true);
        let inputs = divClone.getElementsByTagName('input');
        inputs[0].value = data[i].angler;
        inputs[1].value = data[i].weight;
        inputs[2].value = data[i].species;
        inputs[3].value = data[i].location;
        inputs[4].value = data[i].bait;
        inputs[5].value = data[i].captureTime;
        divCatches.appendChild(divClone);
    }
}
}
async function getCatches(){
    let promise = await fetch(`http://localhost:3030/data/catches`);
    let data = await promise.json();
    return data;
}
async function disableUpdateAndDelete(){
    let data = await getCatches();
    for(let i = 0; i<data.length; i++){
        if(data[i].ownerId!=localStorage.ownerId){
           let div = document.getElementsByClassName('catch')[i];
           div.getElementsByTagName('button')[0].disabled = true;
           div.getElementsByTagName('button')[1].disabled = true;
        }
    }
}