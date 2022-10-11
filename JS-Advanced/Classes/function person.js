function getPersons(){
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
    let anna = new Person('Anna','Simpson',22,'anna@yahoo.com');
    let sofuni = new Person('SoftUni');
    let stefan = new Person('Stephan','Johnson',25);
    let gabriel =new Person('Gabriel','Peterson',24,'g.p@gmail.com');
return [anna,sofuni,stefan,gabriel]
}