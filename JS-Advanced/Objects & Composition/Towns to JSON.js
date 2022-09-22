function towns(arr){
    let result = [];
    let keys = arr[0].split(/\s*[|]\s*/g);
    arr.shift();
    for(let town of arr ){
        let obj ={};
        let info = town.split(/\s*[|]\s*/g);
        obj[keys[1]] = info[1];
        for(let i = 2; i<keys.length-1; i++)
        {
                let num = Number(info[i]).toFixed(2);
                obj[keys[i]] = Number(num);
        }
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}
towns(['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 | ']
);