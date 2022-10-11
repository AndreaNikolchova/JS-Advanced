//1.
class Person{
    constructor(first,last,agex,emailx){
        this.firstName = first;
        this.lastName = last;
        this.age = agex;
        this.email = emailx;
    }
    toString(){
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }

}
