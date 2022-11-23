import {getDataFromServer} from "./createPost.js";
import { postButton } from "./postComment.js";
import { visualizeComment } from "./postComment.js";

export async function hideHomepage(event){
    let divHomepage = document.getElementsByClassName('container')[0];
    divHomepage.style.display = 'none';

    let divDetails = document.getElementsByClassName('container')[1];
    divDetails.style.display = 'block';
    
    let h2Title=  divDetails.getElementsByTagName('h2')[0];
    h2Title.textContent = event.target.textContent;
    
    let postData = await getDataForPost(h2Title.textContent);
    let comments = await getComments(postData._id);
    console.log(comments);
    
    
    visualizePost(postData,divDetails);
    visualizeAllComments(comments);
    postButton();
    
}
 export async function getDataForPost(title){
    let data = await getDataFromServer();

    for(let id in data){
        
        if(data[id].title === title){
            
            return data[id];
        }
    }
}
function visualizePost(postData,divDetails){
    let divHeader=  divDetails.getElementsByClassName('header')[0];

    let spanUsername = divHeader.getElementsByTagName('span')[0];
    spanUsername.textContent=postData.username;

    let time = divHeader.getElementsByTagName('time')[0];
    time.textContent = postData.time;

    let pPost = divHeader.getElementsByClassName('post-content')[0];
    pPost.textContent=postData.post;
    divHeader.style.display = 'block';

}
async function getComments(id){
    let data = await getDataFromServerComments();
    let arr = [];
    console.log(id);
    for(let key in data){
        console.log(data[key]);
        if(data[key].postId == id){
            arr.push(data[key]);
           
        }
    }
    return arr;
}
async function getDataFromServerComments(){
    let promise = await fetch(`http://localhost:3030/jsonstore/collections/myboard/comments`);
    let data = await promise.json();
    return data;
}
function visualizeAllComments(comments){

    for(let comment in comments){
        console.log(comments[comment]);
        visualizeComment(comments[comment]);
    }

}


