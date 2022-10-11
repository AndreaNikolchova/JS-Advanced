function getTickets(arr,sortCriteria){
    class Tickets{
        constructor(destination,price,status){
            this.destination = destination;
            this.price= Number(price);
            this.status = status;
        }
    }
    let result = [];
    for(let line of arr){
        let ticketLine = line.split('|');
        let ticket =  new Tickets(ticketLine[0],ticketLine[1], ticketLine[2]);
        result.push(ticket);
    }
    if(sortCriteria ==='price'){
        result.sort((a,b)=> a[sortCriteria]- b[sortCriteria]);
    }
    else{

        result.sort((a,b)=> a[sortCriteria].localeCompare(b[sortCriteria]));
    }
    return result;
}
console.log(getTickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'
));
//