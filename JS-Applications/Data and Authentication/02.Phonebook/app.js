function attachEvents() {
    let buttonLoad = document.getElementById('btnLoad');
    buttonLoad.addEventListener('click',async()=>{
        let promiseLoad = await fetch('http://localhost:3030/jsonstore/phonebook');
        let dataLoad = await promiseLoad.json();
        let ul = document.getElementById('phonebook');
        for(let phone in dataLoad){
            let li = document.createElement('li');
            li.textContent = dataLoad[phone].person +': '+  dataLoad[phone].phone;
            let buttonDelete = document.createElement('button');
            buttonDelete.textContent = 'Delete';
            li.appendChild(buttonDelete);
            buttonDelete.addEventListener('click',async()=>{
                await fetch(`http://localhost:3030/jsonstore/phonebook/${dataLoad[phone]._id}`,{
                    method:'delete',
                });
                ul.removeChild(li);
            });
            ul.appendChild(li);
        }
    });
    let buttonCreate = document.getElementById('btnCreate');
    buttonCreate.addEventListener('click',async()=>{
        let data = {
            person: document.getElementById('person').value,
            phone: document.getElementById('phone').value
          }
          
        await fetch('http://localhost:3030/jsonstore/phonebook',{
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data),
        });
        

    });
}

attachEvents();