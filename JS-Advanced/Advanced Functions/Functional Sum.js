function add2(num) {
    let sum = num;
 
    function calculate(num2) {
        sum += num2;
        return calculate;
    }
    
    calculate.toString = () => sum;
    return calculate;
}