const {assert} = require('chai');
const {isSymmetric} = require('../Check for Symmetry');

describe('test isSymmetric function',()=>{
    describe('incorrect input',()=>{
        it("if argument is string",()=>{
            let argument = 'str';
            assert.equal(isSymmetric(argument),false);
        });
        it("if argument is a number",()=>{
            let argument = 1;
            assert.equal(isSymmetric(argument),false);
        });
        it("if argument is undefined",()=>{
            let argument = undefined;
            assert.equal(isSymmetric(argument),false);
        });
        it("if argument is an object",()=>{
            let argument = {};
            assert.equal(isSymmetric(argument),false);
        });
        it("if argument is a bool",()=>{
            let argument = true;
            assert.equal(isSymmetric(argument),false);
        });
        it("if argument is null",()=>{
            let argument = null;
            assert.equal(isSymmetric(argument),false);
        });

    });
    describe('test with array',()=>{
        it('array that is not symmetric numbers',()=>{
            let argument = [1,2,3,4,2,1];
            assert.equal(isSymmetric(argument),false);
        });
        it('array that is symmetric numbers',()=>{
            let argument = [1,2,3,3,2,1];
            assert.equal(isSymmetric(argument),true);
        });
        it('array that is not symmetric string',()=>{
            let argument = ['1','2','3','4','2','1'];
            assert.equal(isSymmetric(argument),false);
        });
        it('array that is symmetric string',()=>{
            let argument = ['1','2','3','3','2','1'];
            assert.equal(isSymmetric(argument),true);
        });
        it('array that is symmetric mixed',()=>{
            let argument = ['1',2,'3','3',2,'1'];
            assert.equal(isSymmetric(argument),true);
        });
        it('array that is not  symmetric mixed',()=>{
            let argument = ['1',2,'3','3',2,'1'];
            assert.equal(isSymmetric(argument),true);
        });
    });

});
    

