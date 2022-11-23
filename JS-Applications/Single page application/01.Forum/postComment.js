
import {getDataForPost} from "./postDetails.js";

 export function postButton(){
    let buttonPost = document.getElementsByTagName('button')[2];
    buttonPost.addEventListener('click',onClick);
 }
 
 async function onClick(event){
    event.preventDefault();
    let divDetails = document.getElementsByClassName('container')[1];
    let h2Title=  divDetails.getElementsByTagName('h2')[0];
 
    let post = await getDataForPost(h2Title.textContent);

    event.preventDefault();
    postData(getData(post._id));
    visualizeComment(getData(post._id));

}
async function postData(data){
    await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`,{
        method:'post',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });

}
function getData(id){
    let text = document.getElementById('comment');
    let username = document.getElementsByTagName('input')[2];
    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
   
    return {text : text.value,username: username.value, time:date+" "+time ,postId:id};
}

export function visualizeComment(data){
    let divHeader = document.getElementById('comments');
    let div = document.getElementById("user-comment");
    let clonedDiv = div.cloneNode(true);
    clonedDiv.name = 'comment';
 
    let strong = clonedDiv.getElementsByTagName('strong')[0];
    strong.textContent = data.username;
    
    let time = clonedDiv.getElementsByTagName('time')[0];
    time.textContent = data.time;
 
    let p = clonedDiv.getElementsByTagName('p')[1];
    p.textContent = data.text;
    clonedDiv.style.display ='block';
    divHeader.appendChild(clonedDiv);
 
 }