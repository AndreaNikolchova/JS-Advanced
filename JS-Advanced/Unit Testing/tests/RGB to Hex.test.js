const {expect} = require('chai');
const {rgbToHexColor} = require('../RGB to Hex.js');

describe('rgbToHexColor',()=>{
    it('red value is not a number',()=>{
        let red = 'ten';
        expect(rgbToHexColor(red,1,1)).to.be.undefined;
    }),
    it('red value is lower then 0',()=>{
        let red = -1;
        expect(rgbToHexColor(red,1,1)).to.be.undefined;
    }),
    it('red value is higher then 255',()=>{
        let red = 256;
        expect(rgbToHexColor(red,1,1)).to.be.undefined;
    }),
    it('green value is not a number',()=>{
        let green = 'ten';
        expect(rgbToHexColor(1,green,1)).to.be.undefined;
    }),
    it('green value is lower then 0',()=>{
        let green = -1;
        expect(rgbToHexColor(1,green,1)).to.be.undefined;
    }),
    it('green value is higher then 255',()=>{
        let green = 256;
        expect(rgbToHexColor(1,green,1)).to.be.undefined;
    }),
    it('blue value is not a number',()=>{
        let blue = 'ten';
        expect(rgbToHexColor(1,1,blue)).to.be.undefined;
    }),
    it('blue value is lower then 0',()=>{
        let blue = -1;
        expect(rgbToHexColor(1,1,blue)).to.be.undefined;
    }),
    it('blue value is higher then 255',()=>{
        let blue = 256;
        expect(rgbToHexColor(1,1,blue)).to.be.undefined;
    }),
    it('test if the answer is correct',()=>{
        let red = 1;
        let green = 1;
        let blue = 1;
        expect(rgbToHexColor(red,green,blue)).to.be.equal('#010101');
    })
    
});