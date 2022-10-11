const {expect} = require('chai');
const {sum} = require('../Sum of Numbers');

describe('sum',()=>{

    it('check the sum',()=>{
       let arr = [1,2,3]; 
        expect(sum(arr)).to.be.equal(6);
    });
    it('should take an array',()=>{
        let arr = 'str';
        expect(sum(arr)).to.be.NaN;
    });

});