function cityTaxes(name,population,treasury)
{
  let taxRate=10;
  function collectTaxes(){
    this.treasury+= Number(this.population)*Number(this.taxRate);
  }
  function applyGrowth(percentage){
    this.population+=this.population*(percentage/100);
  }
  function applyRecession(percentage){
    this.treasury-=this.treasury*(percentage/100);
  }
  return{
    name,
    population,
    treasury,
    taxRate,
    collectTaxes: collectTaxes,
    applyGrowth: applyGrowth,
    applyRecession: applyRecession
  }
}



const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


  
