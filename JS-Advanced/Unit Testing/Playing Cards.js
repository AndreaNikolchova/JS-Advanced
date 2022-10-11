function cards(cardNum,cardType){
    let numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let types = ['S', 'H' , 'D', 'C'];
    if(numbers.includes(cardNum)&& types.includes(cardType)){
        switch(cardType){
                case 'S':
                    cardType = '\u2660';
                break;
                case 'H':
                    cardType = '\u2665';
                break;
                case 'D':
                    cardType= '\u2666 ';
                break;
                case 'C':
                    cardType = '\u2663 ';
                break;
        }
        return {
            number:cardNum,
            type: cardType,
            toString(){
                return this.number + this.type;
            }
        };
    }
    else{
        throw new Error('Error');
    }
}
console.log(cards('A', 'S').toString());