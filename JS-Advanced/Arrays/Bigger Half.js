function getBiggerHalf(arr)
{
    arr.sort((a,b)=>a-b);
    let result = arr.slice(arr.length/2);
    return result;
}
console.log(getBiggerHalf([3, 19, 14, 7, 2, 19, 6]));
