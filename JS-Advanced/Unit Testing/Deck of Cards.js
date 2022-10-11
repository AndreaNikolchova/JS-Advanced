function printDeckOfCards(cards) {
    let result  = [];
    let num = '';
    let type = '';
    for(let i=0; i<cards.length; i++){
        if(cards[i].length === 3){
             num = cards[i][0] + cards[i][1];
            type = cards[i][2];
        }
        else{
            num = cards[i][0];
            type = cards[i][1];
        }
        try{
            result.push(card(num,type).toString())

        }
        catch(er){
            console.log(`Invalid card: ${cards[i]}`);
            return;
        }
    }
    console.log(result.join(' '));

    function card(cardNum,cardType){
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
}
 printDeckOfCards(['AS', '10D', 'KH', '2C']);
  