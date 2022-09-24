function sortByTwoCriteria(arr){
    arr.sort((a,b)=>{
        if(a.length!==b.length){
            return a.length-b.length;
        }
        else{
            return a.localeCompare(b);
        }
    });
    console.log(arr.join('\n'));
}
sortByTwoCriteria(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George']
);