const {assert} = module.require('chai');
const {expect} = module.require('chai');
const {companyAdministration} = module.require('./companyAdministration.js');

describe('companyAdministration',()=>{
    describe('hiringEmployee',()=>{
        it('if position is not a programer, should throw Error',()=>{
            assert.throws(() => {companyAdministration.hiringEmployee('name','...',10)},`We are not looking for workers for this position.`);
            assert.throws(() => {companyAdministration.hiringEmployee('name','architect',10)},`We are not looking for workers for this position.`);
            assert.throws(() => {companyAdministration.hiringEmployee('name',null,10)},`We are not looking for workers for this position.`);
            assert.throws(() => {companyAdministration.hiringEmployee('name',undefined,10)},`We are not looking for workers for this position.`);
            assert.throws(() => {companyAdministration.hiringEmployee('name',true,10)},`We are not looking for workers for this position.`);
            assert.throws(() => {companyAdministration.hiringEmployee('name',1010,10)},`We are not looking for workers for this position.`);
        });
        describe('position is Programmer',()=>{
            it('Years of experience are lower then 3',()=>{
                expect(companyAdministration.hiringEmployee('name','Programmer',[])).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',0)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',-1)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',true)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',undefined)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',1)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',2)).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',{})).to.be.equal(`name is not approved for this position.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',null)).to.be.equal(`name is not approved for this position.`);
            });
            it('Years of experience is grater or equal to 3',()=>{
                expect(companyAdministration.hiringEmployee('name','Programmer',3)).to.be.equal(`name was successfully hired for the position Programmer.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',10)).to.be.equal(`name was successfully hired for the position Programmer.`);
                expect(companyAdministration.hiringEmployee('name','Programmer',200)).to.be.equal(`name was successfully hired for the position Programmer.`);
            });
        });
    });
    describe('calculateSalary',()=>{
        it('hours is not a number or is lower then 0',()=>{
            assert.throws(() => {companyAdministration.calculateSalary(-1)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(-10)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(-15)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(null)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(undefined)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary("...")},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary(true)},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary({})},"Invalid hours");
            assert.throws(() => {companyAdministration.calculateSalary([])},"Invalid hours");
        });
        it('if hours is bigger then 160',()=>{
            expect(companyAdministration.calculateSalary(161)).to.be.equal(3415);
            expect(companyAdministration.calculateSalary(170)).to.be.equal(3550);
            expect(companyAdministration.calculateSalary(200)).to.be.equal(4000);
            expect(companyAdministration.calculateSalary(215.75)).to.be.equal(4236.25);
        });
        it('if hours is less then 160',()=>{
            expect(companyAdministration.calculateSalary(0)).to.be.equal(0);
            expect(companyAdministration.calculateSalary(10)).to.be.equal(150);
            expect(companyAdministration.calculateSalary(100)).to.be.equal(1500);
            expect(companyAdministration.calculateSalary(159)).to.be.equal(2385);
            expect(companyAdministration.calculateSalary(25.5)).to.be.equal(382.5);
        });
    });
    describe('firedEmployee',()=>{
        it('invalid arguments',()=>{
            assert.throws(() => {companyAdministration.firedEmployee(-1,1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(10,1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(null,1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(undefined,1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee("...",1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(true,1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee({},1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee(2.3,0)},"Invalid input");
            //
            assert.throws(() => {companyAdministration.firedEmployee([],2.5)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([]," ")},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],null)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],undefined)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],true)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],{})},"Invalid input");
            //
            assert.throws(() => {companyAdministration.firedEmployee([],-1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],-10)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],-100)},"Invalid input");
            //
            assert.throws(() => {companyAdministration.firedEmployee([1,2,3,3,3,],6)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],1)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([1,2],3)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([1],2)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([1,2,3,3,3],5)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([],0)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([1,2],2)},"Invalid input");
            assert.throws(() => {companyAdministration.firedEmployee([1],1)},"Invalid input");
            //
        });
        it('valid arguments',()=>{
            expect(companyAdministration.firedEmployee([1,2,3],0)).to.be.equal('2, 3');
            expect(companyAdministration.firedEmployee([1,2,3],1)).to.be.equal('1, 3');
            expect(companyAdministration.firedEmployee([1,2,3],2)).to.be.equal('1, 2');
            
        });
    });
});