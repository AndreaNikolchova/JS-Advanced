function solution (){
    let robotStorage ={
        protein:0,
        carbohydrate:0,
        fat:0,
        flavour:0,
    };
    let robotMeals ={
        apple: {
            carbohydrate:1,
            flavour:2
        },
        lemonade:{
            carbohydrate:10,
            flavour:20
        },
        burger:{
            carbohydrate:5,
            fat:7,
            flavour:3
        },
        eggs: {
            protein:5,
            fat:1,
            flavour:1,
        },
        turkey:{
            protein:10,
            carbohydrate:10,
            fat:10,
            flavour:10
        }
    };
   return function(str){
    let func= str.split(' ')[0];
   let element1 = str.split(' ')[1];
   let element2 = str.split(' ')[2];
    switch(func){
        case 'restock' :{
           robotStorage[element1] +=Number(element2);
           return `Success`;
        }
        case 'prepare':{
            for(let i = 1; i<= Number(element2); i ++ ){
            for(let ingredients in  robotMeals[element1]){
                if(robotStorage[ingredients]- robotMeals[element1][ingredients]<0){
                    return `Error: not enough ${ingredients} in stock`;
                }
                else{
                    robotStorage[ingredients]-= robotMeals[element1][ingredients];
                }
            }
        }
            return `Success`;
        }
        case 'report':{ 
       return `protein=${robotStorage.protein} carbohydrate=${robotStorage.carbohydrate} fat=${robotStorage.fat} flavour=${robotStorage.flavour}`;
    }
   }
}
}
let manager = solution (); 
console.log (manager ("restock flavour 50")); // Success 
console.log (manager ("prepare lemonade 4")); // Error: not enough carbohydrate in stock 
console.log

