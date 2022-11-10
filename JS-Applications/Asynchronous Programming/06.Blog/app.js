async function attachEvents() {
    let loadPost = document.getElementById('btnLoadPosts');

    let url =`http://localhost:3030/jsonstore/blog/posts`;
    let response = await fetch(url);
    let data = await response.json();
    let select = document.getElementById('posts');

    loadPost.addEventListener('click',async()=>{
        for(let obj in data){
            let option = document.createElement('option');
            option.textContent =data[obj].title.toUpperCase();
            option.value = obj;
            select.appendChild(option);
        }
    });
    let view = document.getElementById('btnViewPost');
    view.addEventListener('click',async()=>{
        debugger;
        let select = document.getElementById('posts');
        let h1Title =  document.getElementById('post-title');
        h1Title.textContent = data[select.value].title.toUpperCase();
        let p = document.getElementById('post-body');
        p.textContent = data[select.value].body;
        let ul = document.getElementById('post-comments');
        debugger
        let urlComments =`http://localhost:3030/jsonstore/blog/comments/${data[select.value].postId}`;
        let responseComments = await fetch(urlComments);
        let dataComments = await responseComments.json();
        for(let obj in dataComments){
            let liComment = document.createElement('li');
            liComment.id = dataComments[obj].postId;
            liComment.value = dataComments[obj].text;
            ul.appendChild(liComment);
        }
    });
}

attachEvents();