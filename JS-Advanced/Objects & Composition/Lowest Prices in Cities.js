function lowestPrices(arr){
    let result ={};
    for(let item of arr){

        let[town,product,price] = item.split(' | ');
        price = Number(price);
        if(result[product] !== undefined){
            if(result[product].price > price){
            result[product].price = price;
            result[product].town = town;
            }
        }
        else{
            result[product] = {
                price: price,
                town:town
             };
       }
    }
    for(let obj in result){
        console.log(`${obj} -> ${result[obj].price} (${result[obj].town})`);
    }
}
lowestPrices(["Sofia City | BMW | 100000",
'Sofia City | Mitsubishi | 10000',
'Sofia City | Mercedes | 10000',
'Sofia City | NoOffenseToCarLovers | 0',
'Mexico City | Audi | 1000',
'Mexico City | BMW | 99999',
'Mexico City | Mitsubishi | 10000',
'New York City | Mitsubishi | 1000',
'Washington City | Mercedes | 1000"']
);