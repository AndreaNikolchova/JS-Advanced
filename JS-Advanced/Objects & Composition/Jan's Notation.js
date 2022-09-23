function jansNotation(input){

    let numbers = [];
    let operators = [];
    for(let numOrOperator of input){
        if(typeof(numOrOperator)==='number')
        {
           numbers.push(Number(numOrOperator));
        }
        else{
           operators.push(numOrOperator);
        }
    }
    if(operators.length>=numbers.length){
        console.log("Error: not enough operands!");
        return;
    }
    else if(operators.length<numbers.length-1){
        console.log("Error: too many operands!");
        return;
    }
    let calc ={
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
        '*': (a,b)=>a*b,
        '/': (a,b)=>a/b
    }
    operators.reverse();
    for(let i = 0;i<operators.length; i++){
        let numOne = numbers.pop();
        let numTwo = numbers.pop();
        let numResult = calc[operators[i]](numTwo,numOne);
        numbers.push(numResult);
    }
    console.log(numbers[0]);
}
jansNotation([31,
    2,
    '+',
    11,
    '/']);