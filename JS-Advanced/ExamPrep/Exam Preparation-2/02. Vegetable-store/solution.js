class VegetableStore{
    constructor(owner,location){
        this.owner = owner;
        this.location = location;
        this.availableProducts =[];
    }
    loadingVegetables(vegetables){
        let resultString =[];
        for(let vegetable of vegetables){
            let type = vegetable.split(' ')[0];
            let quantity = vegetable.split(' ')[1];
            let price = vegetable.split(' ')[2];
            if(this.availableProducts.findIndex(x=>x[type] !== undefined) === -1){
                let obj = {};
                obj[type] = {
                    quantity:Number(quantity),
                    price:Number(price)
                };
                this.availableProducts.push(obj);
            }
            else{
                this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].quantity+=Number(quantity);
                if(this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].price < Number(price)){
                    this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].price = Number(price);
                }
            }
            if(!resultString.includes(type)){
                resultString.push(type);
            }
        }
        return `Successfully added ${resultString.join(', ')}`;
    }
    buyingVegetables(selectedProducts){
        let totalPrice = 0.00;
        for(let product of selectedProducts){
            let nameOfProduct = product.split(' ')[0];
            let quantity = Number(product.split(' ')[1]);
            if(this.availableProducts.findIndex(x=>x[nameOfProduct] !== undefined) === -1){
                throw new Error(`${nameOfProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }
            if(this.availableProducts[this.availableProducts.findIndex(x=>x[nameOfProduct] !== undefined)][nameOfProduct].quantity<quantity){
                throw new Error(`The quantity ${quantity} for the vegetable ${nameOfProduct} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            let priceOfCurrent =quantity *this.availableProducts[this.availableProducts.findIndex(x=>x[nameOfProduct] !== undefined)][nameOfProduct].price;
            totalPrice+=priceOfCurrent;
            this.availableProducts[this.availableProducts.findIndex(x=>x[nameOfProduct] !== undefined)][nameOfProduct].quantity -= quantity;
        }
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }
    rottingVegetable(type, quantity){
        if(this.availableProducts.findIndex(x=>x[type] !== undefined) === -1){
            throw new Error(`${type} is not available in the store.`);
        }
        if(this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].quantity<quantity){
            this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        }
        else{
            this.availableProducts[this.availableProducts.findIndex(x=>x[type] !== undefined)][type].quantity -= quantity;
            return   `Some quantity of the ${type} has been removed.`;
        }

    }
    revision(){
        let string  = `Available vegetables:${'\n'}`;
        let prices = [];
        for(let product in this.availableProducts){
            for(let key in this.availableProducts[product]){
                prices.push(this.availableProducts[product][key].price);

            }
        }
        prices.sort((a,b)=>a-b);
        for(let price of prices){
            for(let product in this.availableProducts){
                for(let key in this.availableProducts[product]){
                if(this.availableProducts[product][key].price === price){
                    string+=`${key}-${this.availableProducts[product][key].quantity}-$${this.availableProducts[product][key].price}${'\n'}`;
                    break;
                }
            }
            }
        }
        string += `The owner of the store is ${this.owner}, and the location is ${this.location}.`;
        return string;
    }

}
let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());



