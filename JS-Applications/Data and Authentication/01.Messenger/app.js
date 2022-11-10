 function attachEvents() {
    let buttonSend =  document.getElementById('submit');
    buttonSend.addEventListener('click',async()=>{
        let inputs =  document.getElementsByTagName('input');
        let message = {
            author: inputs[0].value,
            content: inputs[1].value,
        };
        await fetch('http://localhost:3030/jsonstore/messenger',{
            method: 'post',
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(message),
        });
    });
    let buttonRefresh = document.getElementById('refresh');
    buttonRefresh.addEventListener('click',async()=>{
        let promise = await fetch(`http://localhost:3030/jsonstore/messenger`);
        let data =  await promise.json();
        let textarea =  document.getElementById('messages');
        let count = 0;
        for(let obj in data){
            if(Object.keys(data).length-1 === count){
                textarea.textContent+=`${data[obj].author}: ${data[obj].content}`;
                break;
            }
            textarea.textContent+=`${data[obj].author}: ${data[obj].content}${'\n'}`;
            count++;
        }
    });
}

attachEvents();