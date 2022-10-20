const {expect} = module.require('chai');
const {bookSelection} = module.require('./solution.js');

describe('bookSelection object',()=>{
    describe('isGenreSuitable',()=>{
        describe('not suitable',()=>{
            it("the age is 12 or less, genre is Thriller",()=>{
                expect(bookSelection.isGenreSuitable("Thriller",0)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${0} age`);
                expect(bookSelection.isGenreSuitable("Thriller",11)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${11} age`);
                expect(bookSelection.isGenreSuitable("Thriller",1)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${1} age`);
                expect(bookSelection.isGenreSuitable("Thriller",-12)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${-12} age`);
                expect(bookSelection.isGenreSuitable("Thriller",12)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${12} age`);
                expect(bookSelection.isGenreSuitable("Thriller",5)).to.be.equal(`Books with ${"Thriller"} genre are not suitable for kids at ${5} age`);
            });
            it("the age is 12 or less, genre is Horror",()=>{
                expect(bookSelection.isGenreSuitable("Horror",0)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${0} age`);
                expect(bookSelection.isGenreSuitable("Horror",11)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${11} age`);
                expect(bookSelection.isGenreSuitable("Horror",1)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${1} age`);
                expect(bookSelection.isGenreSuitable("Horror",-12)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${-12} age`);
                expect(bookSelection.isGenreSuitable("Horror",12)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${12} age`);
                expect(bookSelection.isGenreSuitable("Horror",5)).to.be.equal(`Books with ${"Horror"} genre are not suitable for kids at ${5} age`);
            });
            describe("suitable age and genre",()=>{
                it('should return "Those books are suitable"',()=>{
                    expect(bookSelection.isGenreSuitable("Romance",10)).to.be.equal(`Those books are suitable`);
                    expect(bookSelection.isGenreSuitable("Romance",100)).to.be.equal(`Those books are suitable`);
                    expect(bookSelection.isGenreSuitable("Words",23)).to.be.equal(`Those books are suitable`);
                    expect(bookSelection.isGenreSuitable("Smt",90)).to.be.equal(`Those books are suitable`);
                });
            });
            });
            
    });
    describe('isItAffordable',()=>{
        describe('invalid arguments',()=>{
            describe('invalid price',()=>{
                it('price is string',()=>{
                    expect(bookSelection.isItAffordable("word",1)).to.throw();
                });
                it('price is bool',()=>{
                    expect(bookSelection.isItAffordable(true,1)).to.throw();
                });
                it('price is undefined',()=>{
                    expect(bookSelection.isItAffordable(undefined,1)).to.throw();
                });
                it('price is null',()=>{
                    expect(bookSelection.isItAffordable(null,1)).to.throw();
                });
                it('price is object',()=>{
                    expect(bookSelection.isItAffordable({},1)).to.throw();
                });
                it('price is array',()=>{
                    expect(bookSelection.isItAffordable([],1)).to.throw();
                });
            });
            describe('invalid budget',()=>{
                it('budget is string',()=>{
                    expect(bookSelection.isItAffordable(1,"word")).to.throw();
                });
                it('budget is bool',()=>{
                    expect(bookSelection.isItAffordable(1,true)).to.throw();
                });
                it('budget is undefined',()=>{
                    expect(bookSelection.isItAffordable(1,undefined)).to.throw( );
                });
                it('budget is null',()=>{
                    expect(bookSelection.isItAffordable(1,null)).to.throw();
                });
                it('budget is object',()=>{
                    expect(bookSelection.isItAffordable(1,{})).to.throw();
                });
                it('budget is array',()=>{
                    expect(bookSelection.isItAffordable(1,[])).to.throw();
                });
            });
        });
        
    });
});