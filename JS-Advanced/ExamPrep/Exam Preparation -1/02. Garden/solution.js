class Garden{
    constructor(spaceAvailable){
        this.spaceAvailable = Number(spaceAvailable);
        this.plants = [];
        this.storage = [];
    }
    addPlant(plantName,spaceRequired){
        if(this.spaceAvailable-Number(spaceRequired)<0){
            throw new Error("Not enough space in the garden.");
        }
        let obj={};
        obj[plantName] ={
            spaceRequired: spaceRequired,
            ripe: false,
            quantity:0,
        }
        this.spaceAvailable-=Number(spaceRequired);
        this.plants.push(obj);
        return `The ${plantName} has been successfully planted in the garden.`
    }
    ripenPlant(plantName, quantity){
        if(this.plants.findIndex(x=>x[plantName]!==undefined)===-1){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].ripe===true){
            throw new Error(`The ${plantName} is already ripe.`)
        }
        if(quantity<=0){
            throw new Error(`The quantity cannot be zero or negative.`)
        }
        if(quantity===1){
            this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].ripe = true;
            this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].quantity+=quantity;
            return `${quantity} ${plantName} has successfully ripened.`
        }
        else{
            this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].ripe = true;
            this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].quantity+=quantity;
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }
    harvestPlant(plantName){
        if(this.plants.findIndex(x=>x[plantName]!==undefined)===-1){
            throw new Error(`There is no ${plantName} in the garden.`)
        }
        if(this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)][plantName].ripe==false){
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`)
        }
        let plant = this.plants[this.plants.findIndex(x=>x[plantName]!==undefined)];
        this.plants.splice(this.plants.findIndex(x=>x[plantName]!==undefined),1);
        this.spaceAvailable+=Number(plant[plantName].spaceRequired);
        let curPlant = {};
        curPlant[plantName]={
            quantity:plant[plantName].quantity
        }
        this.storage.push(curPlant);
        return `The ${plantName} has been successfully harvested.`

    }
    generateReport(){
        let string = `The garden has ${this.spaceAvailable} free space left.${'\n'}`;
        this.plants.sort();
        string+=`Plants in the garden: `;
        for(let i = 0;i<this.plants.length;i++){
            if(i==this.plants.length-1){
                for(let name in this.plants[i]){
                    string+=`${name}${'\n'}`;
                }
            }
            else{
                for(let name in this.plants[i]){
                    string+=`${name}, `;
                }
               
            }
        }
        if(this.storage.length === 0){
            string+="Plants in storage: The storage is empty.\n"
        }
        else{
            string+="Plants in storage: ";
            for(let i = 0;i<this.storage.length;i++){
                if(i==this.storage.length-1){
                    for(let name in this.storage[i]){
                        string+=`${name} (${this.storage[i][name].quantity})`;
                    }
                }
                else{
                    for(let name in this.storage[i]){
                        string+=`${name} (${this.storage[i][name].quantity}), `;
                    }
                   
                }
            }
        }
        return string;
    }
}
const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());








