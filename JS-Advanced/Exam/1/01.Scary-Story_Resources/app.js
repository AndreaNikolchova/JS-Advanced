window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById('form-btn');
  let ulPreview = document.getElementById("preview-list");
  publishButton.addEventListener('click',(e)=>{
    e.preventDefault();
      let firstName = document.getElementById("first-name");
      let lastName = document.getElementById("last-name");
      let age = document.getElementById("age");
      let title =  document.getElementById("story-title");
      let genre = document.getElementById("genre");
      let story = document.getElementById('story');

      if(!firstName.value||!lastName.value||!age.value||!title.value||!story.value){
        return;
      }

      let li = document.createElement('li');
      li.className = 'story-info';

      let article = document.createElement('article');

      let h4Name = document.createElement('h4');
      h4Name.textContent = 'Name: ' + firstName.value + " " +lastName.value;

      let pAge  = document.createElement('p');
      pAge.textContent = 'Age: ' + age.value;

      let pTitle = document.createElement('p');
      pTitle.textContent = 'Title: ' + title.value;

      let pGenre = document.createElement('p');
      pGenre.textContent = 'Genre: ' + genre.value;

      let pStory = document.createElement('p');
      pStory.textContent = story.value;

      let buttonSave = document.createElement('button');
      buttonSave.className = 'save-btn';
      buttonSave.textContent = 'Save Story';
      buttonSave.addEventListener('click',()=>{
        let div = document.getElementById('main');
        let count = div.childElementCount;

        for(let i = 0 ; i<count ;i++){
          div.removeChild(div.children[0]);
        }
        debugger;
        let h1 = document.createElement('h1');
        h1.textContent = 'Your scary story is saved!';
        div.appendChild(h1);
      })

      let buttonEdit = document.createElement('button');
      buttonEdit.className = 'edit-btn';
      buttonEdit.textContent = 'Edit Story';
      buttonEdit.addEventListener('click',()=>{
        firstName.value = h4Name.textContent.split(' ')[1];
        lastName.value =h4Name.textContent.split(' ')[2]; 
        age.value = pAge.textContent.split(' ')[1];
        title.value = pTitle.textContent.slice(7);
        story.value = pStory.textContent;
        genre.value = pGenre.textContent.split(' ')[1];
        buttonDelete.disabled = true;
        buttonEdit.disabled = true;
        buttonSave.disabled = true;
        publishButton.disabled = false;
        ulPreview.removeChild(li);

      });

      let buttonDelete = document.createElement('button');
      buttonDelete.className = 'delete-btn';
      buttonDelete.textContent = 'Delete Story';
      buttonDelete.addEventListener('click',()=>{
        ulPreview.removeChild(li);
        publishButton.disabled = false;
      });

      article.appendChild(h4Name);
      article.appendChild(pAge);
      article.appendChild(pTitle);
      article.appendChild(pGenre);
      article.appendChild(pStory);
      li.appendChild(article);
      li.appendChild(buttonSave);
      li.appendChild(buttonEdit);
      li.appendChild(buttonDelete);
      ulPreview.appendChild(li);
      publishButton.disabled = true;

       firstName.value = '';
       lastName.value =''; 
       age.value = '';
       title.value =  '';
       genre.value =  '';
       story.value = '';

  });
}
