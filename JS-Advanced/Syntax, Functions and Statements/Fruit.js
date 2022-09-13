function calculateKilos(fruit,grams,price)
{
    let kilos = Number(grams)/1000;
    let priceOfFruit = price*kilos;
    console.log(`I need $${priceOfFruit.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}
calculateKilos('orange', 2500, 1.80);