const {expect} = module.require('chai');
const {mathEnforcer} = module.require('../mathEnforcer.js');

describe('mathEnforcer object',()=>{
    describe('test mathEnforcer.addFive(num)',()=>{
        describe('invalid argument',()=>{
            it('argument is a string',()=>{
                expect(mathEnforcer.addFive('word')).to.be.undefined;
            });
            it('argument is an array',()=>{
                expect(mathEnforcer.addFive([])).to.be.undefined;
            });
            it('argument is an object',()=>{
                expect(mathEnforcer.addFive({})).to.be.undefined;
            });
            it('argument is undefined',()=>{
                expect(mathEnforcer.addFive(undefined)).to.be.undefined;
            });
            it('argument is null',()=>{
                expect(mathEnforcer.addFive(null)).to.be.undefined;
            });
            it('argument is bool',()=>{
                expect(mathEnforcer.addFive(true)).to.be.undefined;
            });
        });
        describe('valid argument',()=>{
            it('test with integers and doubles',()=>{
                expect(mathEnforcer.addFive(5)).to.be.equal(10);
                expect(mathEnforcer.addFive(2.5)).to.be.equal(7.5);
                expect(mathEnforcer.addFive(-10)).to.be.equal(-5);
                expect(mathEnforcer.addFive(0)).to.be.equal(5);
                expect(mathEnforcer.addFive(-1)).to.be.equal(4);
            });
        });
    });
    describe('test mathEnforcer.subtractTen(num)',()=>{
        describe('invalid argument',()=>{
            it('argument is a string',()=>{
                expect(mathEnforcer.subtractTen('word')).to.be.undefined;
            });
            it('argument is an array',()=>{
                expect(mathEnforcer.subtractTen([])).to.be.undefined;
            });
            it('argument is an object',()=>{
                expect(mathEnforcer.subtractTen({})).to.be.undefined;
            });
            it('argument is undefined',()=>{
                expect(mathEnforcer.subtractTen(undefined)).to.be.undefined;
            });
            it('argument is null',()=>{
                expect(mathEnforcer.subtractTen(null)).to.be.undefined;
            });
            it('argument is bool',()=>{
                expect(mathEnforcer.subtractTen(true)).to.be.undefined;
            });
        });
        describe('valid argument',()=>{
            it('test with integers and doubles',()=>{
                expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
                expect(mathEnforcer.subtractTen(10.25)).to.be.equal(0.25);
                expect(mathEnforcer.subtractTen(-10)).to.be.equal(-20);
                expect(mathEnforcer.subtractTen(0)).to.be.equal(-10);
                expect(mathEnforcer.subtractTen(40)).to.be.equal(30);
            });
        });
    });
    describe('test mathEnforcer.sum(num1,num2)',()=>{
        describe('invalid arguments',()=>{
            describe('invalid n1',()=>{
            it('argument is a string',()=>{
                expect(mathEnforcer.sum('word',1)).to.be.undefined;
            });
            it('argument is an array',()=>{
                expect(mathEnforcer.sum([],1)).to.be.undefined;
            });
            it('argument is an object',()=>{
                expect(mathEnforcer.sum({},1)).to.be.undefined;
            });
            it('argument is undefined',()=>{
                expect(mathEnforcer.sum(undefined,1)).to.be.undefined;
            });
            it('argument is null',()=>{
                expect(mathEnforcer.sum(null,1)).to.be.undefined;
            });
            it('argument is bool',()=>{
                expect(mathEnforcer.sum(true,1)).to.be.undefined;
            });
        });
        describe('invalid n2',()=>{
            it('argument is a string',()=>{
                expect(mathEnforcer.sum(1,'word')).to.be.undefined;
            });
            it('argument is an array',()=>{
                expect(mathEnforcer.sum(1,[])).to.be.undefined;
            });
            it('argument is an object',()=>{
                expect(mathEnforcer.sum(1,{})).to.be.undefined;
            });
            it('argument is undefined',()=>{
                expect(mathEnforcer.sum(1,undefined)).to.be.undefined;
            });
            it('argument is null',()=>{
                expect(mathEnforcer.sum(1,null)).to.be.undefined;
            });
            it('argument is bool',()=>{
                expect(mathEnforcer.sum(1,true)).to.be.undefined;
            });
        });
        });
        describe('valid arguments',()=>{
            it('test with integers and doubles',()=>{
                expect(mathEnforcer.sum(5,5)).to.be.equal(10);
                expect(mathEnforcer.sum(-10,10)).to.be.equal(0);
                expect(mathEnforcer.sum(0,-5)).to.be.equal(-5);
                expect(mathEnforcer.sum(0,5)).to.be.equal(5);
                expect(mathEnforcer.sum(-1,5)).to.be.equal(4);
                expect(mathEnforcer.sum(2.5,2.5)).to.be.equal(5);
            });
        });
    });

});