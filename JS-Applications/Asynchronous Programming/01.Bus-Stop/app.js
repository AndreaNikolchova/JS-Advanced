async function getInfo() {
   let input = document.getElementById("stopId");
   let stopValue = input.value;
   let url = `http://localhost:3030/jsonstore/bus/businfo/${stopValue}`;
   let stopName = document.getElementById('stopName');
   let ul = document.getElementById('buses'); 
   try{
      const response = await fetch(url);
      const data = await response.json();
      stopName.textContent = data.name;
      for(let bus in data.buses){
       let li = document.createElement('li');
       li.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
       ul.appendChild(li);
      }

   }
   catch(e){
      stopName.textContent = 'Error';
   }
}