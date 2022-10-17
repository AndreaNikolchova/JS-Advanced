class Stringer{
    constructor(str,length){
        this.innerString  = str;
        this.innerLength = Number(length);
    }

    increase(length){
        this.innerLength+=length;
    }
    decrease(length){
        if(this.innerLength - length<0){
            this.innerLength = 0;
        }
        else{
            this.innerLength-=length;
        }
    }
    toString(){
        if(this.innerLength === 0){
            return '...'
        }
        else{
            let string = this.innerString;
            if(string.length <= this.innerLength){
                return string;
            }
            else{
                let result = string.substring(0,this.innerLength);
                return result+'...';
            }
        }
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4); 
console.log(test.toString()); 
