function getSumFromFirstAndLastElement(arr)
{
    return Number(arr[0])  + Number(arr[arr.length -1]);
}
let num = getSumFromFirstAndLastElement(['20', '30', '40']);
console.log(num);