import {html,render} from"./node_modules/lit-html/lit-html.js";

let select = document.getElementById('menu');
visualize();
async function getDataFromServer(){
    let promise =  await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`);
    let data = await promise.json();
    return data;
}

async function visualize(){
    let obj = await getDataFromServer();
    let arr = [];
    for(let id in obj){
        arr.push(obj[id]);
    }
    let template = (items)=>html`
    ${items.map(item=>html`<option value ="${item._id}">${item.text}</option>`)}
    `;
    render(template(arr),select);
}

let button  = document.getElementsByTagName('input')[1];
button.addEventListener('click',onClick);

async function onClick(event){
    event.preventDefault();
    await postData(getData());
    await visualize();
}
async function postData(data){
    await fetch(`http://localhost:3030/jsonstore/advanced/dropdown`,{
        method:'post',
        headers:{'Content-type':'application/json'},
        body: JSON.stringify(data)
    });
}
function getData() {
    let input = document.getElementById('itemText');  
    return { text: input.value };
}
