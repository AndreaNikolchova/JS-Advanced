function towns(input){
  let obj=input.map(x=>{
    let split = x.split(" <-> ")
    return{
        name : split[0],
        population: Number(split[1])
    }
  }
    );
    let registry={};
    for(let town of obj){
        if(registry[town.name] !== undefined){
         registry[town.name]+=Number(town.population);
        }
        else{
            registry[town.name] = town.population;
        }
    }
    for (let reg in registry)
    {
        console.log(reg + " : " + registry[reg]);
    }
}
towns(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']

);