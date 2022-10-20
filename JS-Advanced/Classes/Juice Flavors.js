function juiceFlavor(arr){
    class Juice{
    constructor(flavor,quantity){
        this.flavor = flavor;
        this.quantity = Number(quantity);
    }
    addQuantity(value){
        this.quantity+=value;
    }
    }
    let result =[];
    let all = [];
    for(let flavor of arr){
        let flavorLine  = flavor.split(' => ')[0];
        let flavorQuantity  = flavor.split(' => ')[1];
        if(all.findIndex(x=> x.flavor === flavorLine) !== -1){
            let index = all.findIndex(x=> x.flavor === flavorLine);
            all[index].addQuantity(Number(flavorQuantity));
            if(all[index].quantity/1000>1&&result.findIndex(x=>x.flavor === flavorLine)===-1){
                result.push(all[index]);
            }
        }
        else{

            let juice = new Juice(flavorLine,flavorQuantity);
            if(flavorQuantity/1000 >1)
            {
                result.push(juice);
                
            }
            all.push(juice);
        }
    }
    for(let juice of result){
            console.log(juice.flavor + " => " + Math.floor(juice.quantity/1000));
    }

}
juiceFlavor(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']
);
