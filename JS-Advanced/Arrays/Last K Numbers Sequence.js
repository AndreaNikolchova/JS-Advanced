function getSequence(lenghtOfArr,countOfNums){
        let arr = [];
        arr[0] = 1;
    
        for (let i = 1; i < lenghtOfArr; i ++) {
    
            let sum = Number(0);
            for (let j = i - 1; j >= i - countOfNums; j--){
    
                if (j == -1){
                    break;
                }
    
                sum += Number(arr[j]);
            }
    
            arr[i] = Number(sum);
        }
    
        return arr;

}
getSequence(6,3);
