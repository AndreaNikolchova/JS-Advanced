const {expect} = module.require('chai');
const {assert} = module.require('chai');
const {chooseYourCar} = module.require('./chooseYourCar.js');
describe('chooseYourCar',()=>{
    describe('choosingType',()=>{   
        it('Invalid year',()=>{
            assert.throws(()=>{chooseYourCar.choosingType('...','green',1800)},`Invalid Year!`);
            assert.throws(()=>{chooseYourCar.choosingType('...','green',1899)},`Invalid Year!`);
            assert.throws(()=>{chooseYourCar.choosingType('...','green',2023)},`Invalid Year!`);
            assert.throws(()=>{chooseYourCar.choosingType('...','green',3000)},`Invalid Year!`);
        });
        describe('type is Sedan',()=>{
            it('year lower then 2010',()=>{
                expect(chooseYourCar.choosingType('Sedan','green',1990)).to.be.equal(`This Sedan is too old for you, especially with that green color.`);
                expect(chooseYourCar.choosingType('Sedan','green',2009)).to.be.equal(`This Sedan is too old for you, especially with that green color.`);
                expect(chooseYourCar.choosingType('Sedan','green',2000)).to.be.equal(`This Sedan is too old for you, especially with that green color.`);
                expect(chooseYourCar.choosingType('Sedan','green',2004)).to.be.equal(`This Sedan is too old for you, especially with that green color.`);
            });
            it('year bigger then 2010',()=>{
                expect(chooseYourCar.choosingType('Sedan','green',2010)).to.be.equal(`This green Sedan meets the requirements, that you have.`);
                expect(chooseYourCar.choosingType('Sedan','green',2011)).to.be.equal(`This green Sedan meets the requirements, that you have.`);
                expect(chooseYourCar.choosingType('Sedan','green',2020)).to.be.equal(`This green Sedan meets the requirements, that you have.`);
                expect(chooseYourCar.choosingType('Sedan','green',2022)).to.be.equal(`This green Sedan meets the requirements, that you have.`);
            })
        });
        it('type is not Sedan',()=>{
            assert.throws(()=>{chooseYourCar.choosingType('...','green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType('coupe','green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType(0,'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType(2.5,'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType({},'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType([],'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType(true,'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType(undefined,'green',2022)},`This type of car is not what you are looking for.`);
            assert.throws(()=>{chooseYourCar.choosingType(null,'green',2022)},`This type of car is not what you are looking for.`);
        }); 
    });
    describe('brandName',()=>{
        it('Invalid information',()=>{
            assert.throws(()=>{chooseYourCar.brandName({},1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(null,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(1,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(undefined,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(true,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName('string',1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(-1,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName(2.5,1)},"Invalid Information!");
            ////
            assert.throws(()=>{chooseYourCar.brandName([],0.5)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName([],1.5)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.brandName([],2.345)},"Invalid Information!");
           /////
           assert.throws(()=>{chooseYourCar.brandName([],-12)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([],-1)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([],-100)},"Invalid Information!");
           ////
           assert.throws(()=>{chooseYourCar.brandName([],0)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([],1)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([],10)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([1,2,3],3)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([1,2,3],4)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.brandName([1,2,3],10)},"Invalid Information!");
        });
        it('valid information test',()=>{
            expect(chooseYourCar.brandName(['1','2'],0)).to.be.equal('2');
            expect(chooseYourCar.brandName(['1','2','3'],0)).to.be.equal('2, 3');
            expect(chooseYourCar.brandName(['1','2','3'],1)).to.be.equal('1, 3');
            expect(chooseYourCar.brandName(['1','2','3'],2)).to.be.equal('1, 2');
        })
    });
    describe('carFuelConsumption',()=>{
        it('Invalid information',()=>{
            assert.throws(()=>{chooseYourCar.carFuelConsumption({},1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(null,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption([],1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(undefined,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(true,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption('string',1)},"Invalid Information!");
           
            ////
            assert.throws(()=>{chooseYourCar.carFuelConsumption(0,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(-1,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(-100,1)},"Invalid Information!");
            assert.throws(()=>{chooseYourCar.carFuelConsumption(-10,1)},"Invalid Information!");
           /////
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,{})},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,null)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,[])},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,undefined)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,true)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,'string')},"Invalid Information!");
           ////
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,0)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,-1)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,-100)},"Invalid Information!");
           assert.throws(()=>{chooseYourCar.carFuelConsumption(1,-10)},"Invalid Information!");
          
        });
        describe('Valid information',()=>{
            it('burns too much',()=>{
                expect(chooseYourCar.carFuelConsumption(100,1000)).to.be.equal(`The car burns too much fuel - 1000.00 liters!`);
                expect(chooseYourCar.carFuelConsumption(100.5,1000)).to.be.equal(`The car burns too much fuel - 995.02 liters!`);
                expect(chooseYourCar.carFuelConsumption(56.67,134.89)).to.be.equal(`The car burns too much fuel - 238.03 liters!`);
            });
            it('efficient',()=>{
                expect(chooseYourCar.carFuelConsumption(100,1 )).to.be.equal(`The car is efficient enough, it burns 1.00 liters/100 km.`);
                expect(chooseYourCar.carFuelConsumption(100.5,2.5)).to.be.equal(`The car is efficient enough, it burns 2.49 liters/100 km.`);
                expect(chooseYourCar.carFuelConsumption(56.67,0.78)).to.be.equal(`The car is efficient enough, it burns 1.38 liters/100 km.`);
                expect(chooseYourCar.carFuelConsumption(500, 35)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
            });
            
        });
    });
});