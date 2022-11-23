
import { removeSections } from "./utilities.js";
import { removeHeaders } from "./utilities.js";

export async function showDashboard(){
    removeSections('dashboard-holder');
    removeHeaders();
    header();
    let data = await getData();
    visualizeData(data);

}
function header(){
    document.getElementById('dashboard').style.display = 'block';
    if(localStorage.email != undefined){
        document.getElementById('create').style.display = 'block';
        document.getElementById('logout').style.display = 'block';
        return;
    }
    document.getElementById('login').style.display = 'block';
    document.getElementById('register').style.display = 'block';
}
async function getData(){
    let promise = await fetch(`http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc`);
    let data  = await promise.json();
    return data;
}
function visualizeData(data){
    let dashboardPage = document.getElementById('dashboard-holder');
    if(data.length === 0){
        let h1 = document.createElement('h1');
        h1.textContent ="No ideas yet! Be the first one :)";
        dashboardPage.appendChild(h1);
        return;
    }
    for(let i = 0; i< data.length; i++){

        let div = createOutsideDiv();
        let divCardBody = createDivCardBody();
        let p = createP(data[i].title);
        divCardBody.appendChild(p);
        let img = createImg(data[i].img);
        let a = createA();

        console.log(div);
        div.appendChild(divCardBody);
        div.appendChild(img);
        div.appendChild(a);
        dashboardPage.appendChild(div);
    }   

}

function createOutsideDiv(){
    let div = document.createElement('div');
    div.className = "card overflow-hidden current-card details"
    div.style = "width: 20rem; height: 18rem;";
    return div;
}
function createDivCardBody(){
    let divCardBody = document.createElement('div');
    divCardBody.className = "card-body";
    return divCardBody;
}
function createP(text){
    let p = document.createElement('p');
        p.className = "card-text";
        p.textContent = text;
        return p;
}
function createImg(link){
    let img =  document.createElement('img');
    img.className = "card-image";
    img.src = link;
    return img;
}
function createA(){
    let a = document.createElement('a');
    a.className = 'btn';
    a.href = 'javascript:void(0)';
    a.textContent = 'Details';
    return a;
}
