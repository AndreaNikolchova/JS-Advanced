function createSortedList(){
let array = [];
let size = 0;
let list = {
   array,
   add: function(element){
    this.array.push(element);
    this.array.sort((a,b)=>a-b);
    this.size = this.array.length;
   },
   remove: function(index){
    if(index>=0&&index<this.array.length){
        this.array.splice(index,1);
        this.array.sort((a,b)=>a-b);
        this.size = this.array.length;

    }
   },
   get: function(index){
    if(index>=0&&index<this.array.length){
        return this.array[index];
    }
   },
   size
   
 }
 return list;

}

let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
