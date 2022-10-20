const {expect} = module.require('chai');
const {lookupChar} = module.require('../Char Lookup.js');

describe('charLookUp function',()=>{
   describe('incorrect arguments',()=>{
        it('first argument is number',()=>{
            expect(lookupChar(10,10)).to.be.undefined;
        });
        it('first argument is bool',()=>{
            expect(lookupChar(true,10)).to.be.undefined;
        });
        it('first argument is object',()=>{
            expect(lookupChar({},10)).to.be.undefined;
        });
        it('first argument is array',()=>{
            expect(lookupChar([],10)).to.be.undefined;
        });
        it('first argument is null',()=>{
            expect(lookupChar(null,10)).to.be.undefined;
        });
        it('first argument is undefined',()=>{
            expect(lookupChar(undefined,10)).to.be.undefined;
        });
        it('second argument is string',()=>{
            expect(lookupChar("word",'...')).to.be.undefined;
        });
        it('second argument is object',()=>{
            expect(lookupChar("word",{})).to.be.undefined;
        });
        it('second argument is array',()=>{
            expect(lookupChar("word",[])).to.be.undefined;
        });
        it('second argument is number,but not an integer',()=>{
            expect(lookupChar("word",2.3)).to.be.undefined;
        });
        it('second argument is null',()=>{
            expect(lookupChar("word",null)).to.be.undefined;
        });
        it('second argument is bool',()=>{
            expect(lookupChar("word",true)).to.be.undefined;
        });
        it('second argument is undefined',()=>{
            expect(lookupChar("word",undefined)).to.be.undefined;
        });
   });
   describe('invalid index length',()=>{
        it('length is bigger then the string length',()=>{
            expect(lookupChar('abc',4)).to.be.equal('Incorrect index');
            expect(lookupChar('abc',10)).to.be.equal('Incorrect index');
        });
        it('length is equal to the string length',()=>{
            expect(lookupChar('abc',3)).to.be.equal('Incorrect index');
        });
        it('length is less then the string length',()=>{
            expect(lookupChar('abc',-1)).to.be.equal('Incorrect index');
            expect(lookupChar('abc',-10)).to.be.equal('Incorrect index');
        });
        
   });
   describe('result',()=>{
        it('test with valid arguments',()=>{
            expect(lookupChar('Vladi',2)).to.be.equal('a');
            expect(lookupChar('abc',2)).to.be.equal('c');
            expect(lookupChar('qwerty',0)).to.be.equal('q');
        });
   });
});