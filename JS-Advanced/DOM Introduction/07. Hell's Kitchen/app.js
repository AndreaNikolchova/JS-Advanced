function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
    let arr = document.getElementsByTagName('textarea')[0].value.split('"');
    arr.pop();
    arr.shift();
    let arrOfObj = [];
    for(let i = 0;i<arr.length; i++){
       if(i%2===0){
          let restaurantInfo = arr[i].split(' - ');
          let restaurantName = restaurantInfo[0];
          let workers = restaurantInfo[1].split(', ');
          let index = arrOfObj.findIndex(x=>x.name === restaurantName);
          let average = 0;
          if(index !==-1)
          {
            let max = 0;
             for(let i = 0 ; i<workers.length; i++){
                let splitName = workers[i].split(" ")[0];
                let splitSalary = Number(workers[i].split(" ")[1]);
               arrOfObj[index].workers.push({
                  name:splitName,
                  salary: Number(splitSalary.toFixed(2))
                 });
               average+=Number(splitSalary);
            }
            average/=workers.length;
             arrOfObj[index].average = Number(average.toFixed(2));
         }
         else{
         let obj = {
            name:restaurantName,
            average: 0,
            workers:[],
         }
         let max = 0;
         for(let i = 0 ; i<workers.length; i++){
           let splitName = workers[i].split(" ")[0];
           let splitSalary = Number(workers[i].split(" ")[1]);
           obj.workers.push({
            name:splitName,
            salary: Number(splitSalary.toFixed(2))
           });
           average+=Number(splitSalary);
         }
         average/=workers.length;
         obj.average = Number(average.toFixed(2));
         arrOfObj.push(obj);
      }
   }
   }
   let bestRestaurant = {};
   let max = 0;
   for( let obj of arrOfObj){
      if(obj.average>max){
         max = obj.average
         bestRestaurant = obj;
      }
   }
   
  
   bestRestaurant.workers.filter(x=>x.salary).sort((a,b)=>b-a);
   let bestSalary = bestRestaurant.workers[0].salary % 1 === 0 ? `${bestRestaurant.workers[0].salary}.00`:bestRestaurant.workers[0].salary;
   let output = document.getElementById('bestRestaurant').getElementsByTagName('p')[0];
   output.textContent = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.average.toFixed(2)} Best Salary: ${bestSalary}`;
   let outputWorkers = document.getElementById("workers").getElementsByTagName(`p`)[0];
   for(let worker of bestRestaurant.workers){
      outputWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
   }
   
   }
}