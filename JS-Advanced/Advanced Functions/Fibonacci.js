function getFibonator(){
    let numFirst = 1;
    let numSecond = 0;

    return function(){
            let sum = numFirst + numSecond;
            numFirst = numSecond;
            numSecond = sum;
            return sum;
        
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
