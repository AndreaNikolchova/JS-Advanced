const {expect} = module.require('chai');
const {isOddOrEven} = module.require("../Even or Odd.js");

describe('isOddOrEven function',()=>{
    it('check type with number',()=>{
        let argument = 10;
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('check type with object',()=>{
        let argument = {};
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('check type with an array',()=>{
        let argument = [];
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('check type with null',()=>{
        let argument = null;
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('check type with undefined',()=>{
        let argument = undefined;
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('check type with bool',()=>{ 
        let argument = true;
       expect(isOddOrEven(argument)).to.be.undefined;
    });
    it('with even string',()=>{
        let argument = "Vlacheto";
        expect(isOddOrEven(argument)).to.be.equal('even');
    });
    it('with odd string',()=>{
        let argument = "Vladi";
        expect(isOddOrEven(argument)).to.be.equal('odd');
    });
});