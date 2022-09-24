function sortNames(arr){
arr.sort((a,b)=> a.localeCompare(b));
for(let i =0;i<arr.length;i++){
    console.log(`${i+1}.${arr[i]}`);
}
}
sortNames(["John", "Bob", "Christina", "Ema"]);