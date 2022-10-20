class Hex{
    constructor(value){
        this.hex = Number(value);
    }
    valueOf(){
        return this.hex;
    }
    toString(){
        return "0x" + this.hex.toString(16).toUpperCase();
    }
    plus(num){
        let sum  = this.hex + num.hex;
        return new Hex(sum);
    }
    minus(num){
        let dif  = this.hex - num.hex;
        return new Hex(dif);
    }
    parse({string}){
        return parseInt(string,16);
    }
    
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
console.log(FF.parse('AAA'));
