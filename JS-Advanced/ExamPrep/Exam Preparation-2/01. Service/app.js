window.addEventListener("load", solve);
function solve(){
    let buttonSend = document.getElementsByTagName('button')[0];
    let sectionCompletedOrders = document.getElementById('completed-orders');
    buttonSend.addEventListener('click',(e)=>{
        e.preventDefault();
        let textareaForDescription = document.getElementById('description');
        let inputForClientName =  document.getElementById('client-name');
        let inputForClientPhone =  document.getElementById('client-phone');
        let optionComputer = document.getElementsByTagName('option')[0];
        if(!textareaForDescription.value||!inputForClientName.value||!inputForClientPhone.value){
            return;
        }

        let sectionOrders = document.getElementById('received-orders');

        let div = document.createElement('div');
        let productTypeH2 = document.createElement('h2');
        let clientInformationH3 = document.createElement('h3');
        let descriptionOfTheProblemH4 = document.createElement('h4');
        let buttonStartRepair = document.createElement('button');
        let buttonFinishRepair = document.createElement('button');

        buttonStartRepair.addEventListener('click',()=>{
            buttonStartRepair.disabled = true;
            buttonFinishRepair.disabled = false;
        });
        buttonFinishRepair.addEventListener('click',()=>{
            sectionOrders.removeChild(div);
            div.removeChild(buttonStartRepair);
            div.removeChild(buttonFinishRepair);
            sectionCompletedOrders.appendChild(div);
        });

        div.className = 'container';
        buttonStartRepair.className = 'start-btn';
        buttonStartRepair.textContent = 'Start repair';
        buttonFinishRepair.className = 'finish-btn';
        buttonFinishRepair.textContent = 'Finish repair';
        buttonFinishRepair.disabled = true;
        if(optionComputer.selected){
            productTypeH2.textContent = 'Product type for repair: Computer';
        }
        else{
            productTypeH2.textContent = 'Product type for repair: Phone';
        }
        clientInformationH3.textContent = 'Client information: ' + inputForClientName.value + ', ' + inputForClientPhone.value;
        descriptionOfTheProblemH4.textContent = 'Description of the problem: ' + textareaForDescription.value;


        div.appendChild(productTypeH2);
        div.appendChild(clientInformationH3);
        div.appendChild(descriptionOfTheProblemH4);
        div.appendChild(buttonStartRepair);
        div.appendChild(buttonFinishRepair);
        sectionOrders.appendChild(div);

        textareaForDescription.value = '';
        inputForClientName.value = '';
        inputForClientPhone.value = ''; 
    });
    let buttonClear = document.getElementsByTagName('button')[1];
    buttonClear.addEventListener('click',()=>{
        let divs = document.querySelectorAll("#completed-orders>.container");
        for(const iter of divs){
            sectionCompletedOrders.removeChild(iter);
        }
    });
}