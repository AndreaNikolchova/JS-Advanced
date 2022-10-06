function arguments(...params){
    let result = [];
    for(let obj of params){
        let type = typeof(obj);
        console.log(`${type}: ${obj}`);
        if(result[type] !== undefined){
            result[type]++;
        }
        else{
            result[type] = 1;
        }
    }
let numbers= [];
   for(let key in result){
    if(!numbers.includes(result[key])){
        numbers.push(result[key]);
    }
   }
   numbers.sort((a,b)=>b-a);
   for(let num of numbers){
    for(let key in result){
        if(result[key]===num){
            console.log(key + " = " + result[key]); 
        }
    }
   }
}