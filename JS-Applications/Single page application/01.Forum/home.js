export function homeLink(){
    let homeLink =  document.getElementsByTagName('a')[0];
    homeLink.addEventListener('click',onClick);

}
function onClick(){
    let divHomepage = document.getElementsByClassName('container')[0];
    divHomepage.style.display = 'block';

    let divDetails = document.getElementsByClassName('container')[1];
    divDetails.style.display = 'none';
    deleteComments();

    
}
function deleteComments(){
    let divHeader = document.getElementById('comments');
    debugger;
    
    for(let divs in divHeader.querySelectorAll('div[name="comment"]')){
        divHeader.removeChild(divHeader.querySelectorAll('div[name="comment"')[divs]);
    }
}
