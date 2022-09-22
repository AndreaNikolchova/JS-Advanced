function catalog(arr){
    arr.sort();
    let result = {};
    for(let props of arr)
    {
        let string = props.split(' : ');
        let concat = string[0]+ ": "+string[1];
       let letter = props[0];
       if(result[letter]!==undefined){
            result[letter] +=` | `+concat ;
       }
       else{
        result[letter] = concat;
       }
    
    }
    for(let res in result){
        console.log(res);
        let output  = result[res]? result[res].split(' | ') : result[res];
        for(let out of output)
        {
            console.log(`  ${out}`);
        }
    }

}
catalog(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);