import {html,render} from "./node_modules/lit-html/lit-html.js";
let body = document.getElementsByTagName('body')[0];


let template =(items)=> html`
<button id="loadBooks" @click=${onClick.bind()}>LOAD ALL BOOKS</button>
<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>

            ${items.map(item=> html`
            <tr>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>
                <button @click=${onEdit.bind(item.title,item.author)}>Edit</button>
                <button @click=${onDelete}>Delete</button>
            </td>
        </tr>`)}

    </tbody>
</table>

<form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit" @click=${onAdd}>
</form>

<form id="edit-form" style = "display: none;">
    <input type="hidden" name="id">
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Save" @click=${onSubmit()}>
</form>`
render(template(await returnArrData()),body);
async function onAdd(event){
    event.preventDefault();
    let form = new FormData(event.target.parentElement);
    let {title,author} = Object.fromEntries(form);
    if(title&&author){
        await postBook({title,author});
        event.target.parentElement.reset();
        render(template(await returnArrData()),body);
    }

}
async function postBook(data){
    await fetch('http://localhost:3030/jsonstore/collections/books',{
        method: 'post',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(data)
    })
}
async function onEdit(event,title,author){
    event.preventDefault();
    let formAdd = document.getElementById('add-form');
    formAdd.style.display ='none';
    let formEdit = document.getElementById('edit-form');
    formEdit.style.display ='block';

    formEdit.getElementsByTagName('input')[1].value = title;
    formEdit.getElementsByTagName('input')[2].value = author;

}
async function onSubmit(event){
    event.target.parentElement.getElementsByTagName('input')[1].value;
    event.target.parentElement.getElementsByTagName('input')[2].value;

}
async function editServer(title,data){
    let allBooks = await getBooks();
    let bookId;
    for(let id in allBooks){
       if(allBooks[id].title ===title){
            bookId = id;
            break; 
       }
    }
    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`,{
        method: 'put',
        headers: {'Content-type':'application/json'},
        body: JSON.stringify(data)
    });
    render(template(await returnArrData()),body);

}
function onDelete(){

}
async function onClick(event){
    event.preventDefault();
    render(template(await returnArrData()),body);

}
async function getBooks(){
    let promise= await fetch('http://localhost:3030/jsonstore/collections/books');
    let data = await promise.json();
    return data;
}
async function returnArrData(){
    let data = await getBooks();
    let arr = [];
    for(let id in data){
        arr.push(data[id]);
    }
    return arr;
}