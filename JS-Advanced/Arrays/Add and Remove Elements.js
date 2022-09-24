function elements(arr){
    let result = [];
    let num  = 1;
    for(let command of arr){

        if(command === 'add'){
            result.push(num);
        }
        else{
            result.pop();
        }
        num++;
    }
    if(result.length === 0){
        console.log('Empty');
        return;
    }
    for(let num of result){
        console.log(num);
    }
}
elements(['remove', 
'remove', 
'remove']

);