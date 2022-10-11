const {expect} = require('chai');
const {isSymmetric} = require('../Check for Symmetry');
describe('isSymmetric',()=>{
    it("argument if it isn't an array",()=>{
        let argument = 'str';
        expect(isSymmetric(argument)).to.be.equal(false);
    }),
    it("argument if it isn't an array",()=>{
        let argument = 1;
        expect(isSymmetric(argument)).to.be.equal(false);
    }), 
    it("argument if it isn't an array",()=>{
        let argument = undefined;
        expect(isSymmetric(argument)).to.be.equal(false);
    }),
     it("argument if it isn't symmetric",()=>{
        let argument = [1,2,3,4,2,1];
        expect(isSymmetric(argument)).to.be.equal(false);
    }),
    it("argument if it is symmetric",()=>{
        let argument = [1,2,2,1];
        expect(isSymmetric(argument)).to.be.equal(true);
    }),
    it('Array',()=>{
        let argument = ['1','2','2','1'];
        expect(isSymmetric(argument)).to.be.equal(true);
    })
})
    

