function rectangle(width,height,color){

    color = color[0].toUpperCase() + color.substring(1);
    function calcArea(){
        return Number(this.width*this.height);
    }
    return{
        width,height,color,calcArea
    }
}
let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
