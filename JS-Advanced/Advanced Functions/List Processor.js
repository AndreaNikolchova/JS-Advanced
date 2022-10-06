function getList(arr){

    function funcs(){
        let result =[]
        return{
            add: (value) =>result.push(value),
            remove: (value) => {
                for(let val =0 ; val<result.length;val++){
                    if(result[val]=== value){
                        result.splice(val,1);
                    }
                }
            },
            print: () => console.log(result.join(','))
        }
    }
    let func = funcs();
    for(let fun of arr){
        let funName = fun.split(' ')[0];
        let funValue = fun.split(' ')[1];
        switch(funName.toLowerCase()){
            case 'add':{
                func.add(funValue);
            }
            break;
            case 'remove':{
                func.remove(funValue);
            }
            break;
            case 'print':{
                func.print(funValue);
            }
            break;
        }
      
    }
}
getList(['add pesho', 'add george', 'add peter', 'remove peter','print']);
