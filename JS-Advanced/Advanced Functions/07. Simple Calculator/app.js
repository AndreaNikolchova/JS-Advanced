function calculator() {
return {
    init: (selector1, selector2, resultSelector)=>{
        let num1 = document.getElementById(selector1);
        let num2 = document.getElementById(selector2);
        let result = document.getElementById(resultSelector);
    },
    add:()=>{
        result.value = Number(num1.value)+Number(num2.value);
    },
    subtract: ()=>{
        result.value = Number(num1.value)-Number(num2.value);
    }
}
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 




