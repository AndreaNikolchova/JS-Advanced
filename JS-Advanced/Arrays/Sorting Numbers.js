function sortingNumbers(arr){
    arr.sort((a,b)=>a-b);
    let result = [];
    let num =arr.length;
    for(let i = 0;i<num;i++){
        if(i%2===0)
        {
            result.push(arr.shift());
        }
        else{
            result.push(arr.pop());
        }
    }
    return result;
}
console.log(sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));