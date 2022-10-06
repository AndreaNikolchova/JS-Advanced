function filterEmployees(data, criteria){
    let arr = JSON.parse(data);
    let nameOfCriteria = criteria.split('-');
    let count =0;
    for(let i =0 ;i<arr.length ; i++){
        if(arr[i][nameOfCriteria[0]]===nameOfCriteria[1]){
            console.log(`${count}. ${arr[i].first_name} ${arr[i].last_name} - ${arr[i].email}`);
            count++;

        }
    }
}
filterEmployees(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female'
)