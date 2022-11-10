async function solution() {
 let url = 'http://localhost:3030/jsonstore/advanced/articles/list';
 let response = await fetch(url);
 let data = await response.json();
 let section = document.getElementById('main');
 for(let obj of data){

    let divAccordion = document.createElement('div');
    divAccordion.className = 'accordion';
    
    let divHead = document.createElement('div');
    divHead.className = 'head';

    let spanTitle = document.createElement('span');
    spanTitle.textContent = obj.title;

    let button = document.createElement('button');
    button.className = 'button';
    button.id = obj._id;
    button.textContent = 'More';
    
    divHead.appendChild(spanTitle);
    divHead.appendChild(button);
    
    let divExtra = document.createElement('div');
    divExtra.className ='extra';
    divExtra.style.display = 'none';
    
    let p = document.createElement('p');
    
    divExtra.appendChild(p);
    button.addEventListener('click',async()=>{
        if(button.textContent==='More'){
            let urlDetails = `http://localhost:3030/jsonstore/advanced/articles/details/${button.id}`;
            let responseDetails = await fetch(urlDetails);
            let detailsData = await responseDetails.json();
            p.textContent = detailsData.content;
            divExtra.style.display = 'block';
            button.textContent = 'Less';
        }
        else{
            divExtra.style.display = 'none';
            button.textContent = 'More';
        }

    });
    divAccordion.appendChild(divHead);
    divAccordion.appendChild(divExtra);
    section.appendChild(divAccordion);
}

}
solution();