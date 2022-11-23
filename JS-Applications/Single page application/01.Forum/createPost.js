import {hideHomepage} from "./postDetails.js";

export function buttonPost(){
    let buttonPost = document.getElementsByClassName('public')[0];
    buttonPost.addEventListener('click',onClick);
}
function onClick(event){
    event.preventDefault();
    if(!getData().title||!getData().post||!getData().username){
        return;
    }
    postData(getData());
    visualizePost(getData());
    clear();
}
function getData(){
    let title  = document.getElementById('topicName');
    let username = document.getElementById('username');
    let post =  document.getElementById('postText');
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return {
        title:title.value,
        username: username.value,
        post: post.value,
        time:date +" " + time
    };
}
async function postData(data){
   
    await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`,{
        method:'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

}
function clear(){
    document.getElementById('topicName').value = "";
    document.getElementById('username').value = "";
   document.getElementById('postText').value = "";
}
export function visualizePost(data){
    let divHeader = document.getElementsByClassName("topic-container")[0];
    let div = document.getElementsByClassName("topic-name-wrapper")[0];
    let clonedDiv = div.cloneNode(true);
    console.log(clonedDiv);
    clonedDiv.style.display = 'block';
    let a = clonedDiv.getElementsByTagName('a')[0];
    a.addEventListener('click',hideHomepage);
    let h2 =  clonedDiv.getElementsByTagName('h2')[0];
    h2.textContent = data.title;
    let timeHtml =  clonedDiv.getElementsByTagName('time')[0];
    timeHtml.textContent = data.time;
    let span = clonedDiv.getElementsByTagName('span')[0];
    span.textContent = data.username;
    divHeader.appendChild(clonedDiv);
   
 }
export async function getDataFromServer(){
    let promise = await fetch(`http://localhost:3030/jsonstore/collections/myboard/posts`);
    let data = promise.json();
    return data;
}
