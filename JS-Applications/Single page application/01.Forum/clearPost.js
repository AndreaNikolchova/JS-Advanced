export function buttonCancel(){
    let buttonPost = document.getElementsByClassName('cancel')[0];
    buttonPost.addEventListener('click',clear);
}
function clear(event){
    event.preventDefault();

    document.getElementById('topicName').value = "";
    document.getElementById('username').value = "";
   document.getElementById('postText').value = "";
}