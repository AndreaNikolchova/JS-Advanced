window.addEventListener("load", solve);
function solve(){
    let btn = document.getElementById("publish-btn");
    let ulApproved = document.getElementById("published-list");

    btn.addEventListener('click',()=>{
        let ul = document.getElementById('review-list');
        let li = document.createElement('li');
        let article  =  document.createElement('article');
        let header = document.createElement('h4');
        let categoryP = document.createElement('p');
        let textP = document.createElement('p');

        let headerValue = document.getElementsByTagName('input')[0];
        let categoryValue = document.getElementsByTagName('input')[1];
        let textValue = document.getElementsByTagName('textarea')[0];
        if(!headerValue.value||!categoryValue.value||!textValue.value){
            return;
        }

        header.textContent = headerValue.value;
        categoryP.textContent = 'Category: '+ categoryValue.value;
        textP.textContent = 'Content: ' + textValue.value;

        let buttonEdit = document.createElement('button');
        let buttonApprove = document.createElement('button');

        buttonEdit.textContent = "Edit";
        buttonEdit.className='action-btn edit';
        buttonApprove.textContent = "Approve";
        buttonApprove.className='action-btn approve';

        buttonEdit.addEventListener('click',()=>{
    
            headerValue.value = header.textContent;
            categoryValue.value = categoryP.textContent.split(" ")[1];
            textValue.value = textP.textContent.split(" ")[1];
    
            ul.removeChild(li);
          
    
        });
        buttonApprove.addEventListener('click',()=>{
            li.removeChild(buttonApprove);
            li.removeChild(buttonEdit);
            ulApproved.appendChild(li);
            ul.removeChild(li);
        });

        article.appendChild(header);
        article.appendChild(categoryP);
        article.appendChild(textP);
        li.classList.add('rpost');
        li.appendChild(article)
        li.appendChild(buttonApprove);
        li.appendChild(buttonEdit);
        ul.appendChild(li);

        
        headerValue.value = "";
        categoryValue.value = "";
        textValue.value = "";

    });
    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener('click',()=>{

        let count = ulApproved.children.length;
        for(let i = 0; i<count; i++){
        ulApproved.removeChild(ulApproved.children[0]);
      }
        
    });

}

