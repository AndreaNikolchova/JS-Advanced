function carFactory(car){
    let obj = {};
    //model
    obj.model = car.model;
    //engine
    if(car.power <= 90 ){
        obj.engine={
            power: 90,
            volume:1800
        };
    }
    else if(car.power>90&&car.power<=120){
        obj.engine={
            power: 120,
            volume:2400
        };
    }
    else if(car.power>120){
        obj.engine={
            power: 200,
            volume:3500
        };
    }
    //carriage
    if(car.carriage === 'hatchback'){
        obj.carriage = {
            type: 'hatchback',
            color: car.color
        };
    }
    else{
        obj.carriage = {
            type: 'coupe',
            color: car.color
        };
    }
    //wheels
    if(car.wheelsize % 2 == 0)
    {
        let size = car.wheelsize - 1;
        obj.wheels = [size,size,size,size];
    }
    else{
        obj.wheels = [car.wheelsize,car.wheelsize,car.wheelsize,car.wheelsize];
    }

    return obj;

}
carFactory({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
});