function solve() {
let currentId = 'depot';
let span =  document.getElementsByClassName('info')[0];
let inputDepart = document.getElementById('depart');
let inputArrive = document.getElementById('arrive');

    async function depart() {
      let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`;
      let value = await fetch(url);
      let data  = await value.json();
      span.textContent = 'Next stop '+  data.name;
      inputArrive.disabled  = false;
      inputDepart.disabled = true;
      

    }

    async function arrive() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${currentId}`;
        let value = await fetch(url);
        let data  = await value.json();
        span.textContent = 'Arriving at '+  data.name;
        currentId = data.next; 
        inputArrive.disabled  = true;
        inputDepart.disabled = false;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();