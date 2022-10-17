function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let textarea = JSON.parse(document.getElementsByTagName('textarea')[0].value);
      let bestRestaurant = document.getElementsByTagName('p')[0];
      let bestWorkers = document.getElementsByTagName('p')[1];
      let result = [];
      for(let i = 0; i<textarea.length;i++){
         let name = textarea[i].split(' - ')[0];
         let people = textarea[i].split(' - ')[1].split(', ');
         if(result.findIndex(x=>x.name === name)!==-1){
            let index = result.findIndex(x=>x.name === name);
            for(let worker of people){
               let name = worker.split(' ')[0];
               let salary = worker.split(' ')[1];
               result[index].workers.push({name,salary});
            }
            let sum = 0;
            for(let worker of result[index].workers){
               sum += Number(worker.salary);
            }
            result[index].averageSalary = sum/result[index].workers.length;
         }
         else{
            let obj = {
               name: name,
               workers:[],
            }
            let sum = 0;
            let count = 0;
            for(let worker of people){
               let name = worker.split(' ')[0];
               let salary = Number(worker.split(' ')[1]);
               obj.workers.push({name,salary});
               count++;
               sum+=salary;
            }
            obj.averageSalary = sum/count;
            result.push(obj);
         }
      }
      let best = result.sort((a,b)=>b.averageSalary - a.averageSalary)[0];
      best.workers.sort((a,b)=>b.salary - a.salary);
      bestRestaurant.textContent = `Name: ${best.name} Average Salary: ${Number(best.averageSalary).toFixed(2)} Best Salary: ${Number(best.workers[0].salary).toFixed(2)}`;
      for(let worker of best.workers){
         bestWorkers.textContent+= `Name: ${worker.name} With Salary: ${worker.salary} `;
      }
   }
}