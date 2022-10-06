function solve(area, vol, input) {
    let result = [];
   let arr = JSON.parse(input);
   for(obj of arr){
       result.push({
           area: area.call(obj),
           volume: vol.call(obj)
        });
   }
   return result;
    

}
console.log(solve(
    area,
    vol,
    `[
    {"x":"1","y":"2","z":"10"},
    {"x":"7","y":"7","z":"10"},
    {"x":"5","y":"2","z":"10"}
    ]`
    ));
function vol() {
    return Math.abs(this.x * this.y * this.z);
};
function area() {
    return Math.abs(this.x * this.y);
};
