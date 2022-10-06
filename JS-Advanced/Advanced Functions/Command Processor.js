function solution(){
    let string  = '';
    return{
        append: (text) => string+=text,
        removeStart: (index)=> string =string.substring(index),
        removeEnd: (index) => string = string.substring(0,string.length-index),
        print: ()=>console.log(string)
    }
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
