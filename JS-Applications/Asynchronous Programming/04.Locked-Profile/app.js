async function lockedProfile() {
    let url = `http://localhost:3030/jsonstore/advanced/profiles`;
    let promise = await fetch(url);
    let data = await promise.json();

    let main = document.getElementById('main');
    let div = main.getElementsByTagName('div')[0];
    let hiddenDiv = div.getElementsByTagName('div')[0];
    hiddenDiv.style.display = 'none';

    for(let key in data){

       let cloned = div.cloneNode(true);

       let inputUsername = cloned.getElementsByTagName('input')[2];
       let inputEmail = cloned.getElementsByTagName('input')[3];
       let inputAge = cloned.getElementsByTagName('input')[4];

       let button = cloned.getElementsByTagName('button')[0];

       inputUsername.value = data[key].username;
       inputEmail.value = data[key].email;
       inputAge.value = data[key].age;
       
        main.appendChild(cloned);

        button.addEventListener('click',()=>{
            let inputUnlocked = button.parentElement.getElementsByTagName('input')[1];
            if(inputUnlocked.checked === true){
            if(button.textContent =='Show more'){
                
                    let div = button.parentElement.getElementsByTagName('div')[0];
                    div.style.display = 'block';
                    button.textContent = 'Hide it';
                
            }
            else if(button.textContent =='Hide it'){
                    let div = button.parentElement.getElementsByTagName('div')[0];
                    div.style.display = 'none';
                    button.textContent = 'Show more';
            }
        }
        });
    }
    main.removeChild(div);
}