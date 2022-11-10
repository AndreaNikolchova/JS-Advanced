class footballTeam{
    constructor(clubName,country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    newAdditions(footballPlayers){
        let result = [];
        for(let player of footballPlayers){
            let name = player.split('/')[0];
            let age = Number(player.split('/')[1]);
            let playerValue = Number(player.split('/')[2]);
            if(this.invitedPlayers.findIndex(x=>x.name === name)!==-1){
               if(this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].playerValue<playerValue){
                    this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].playerValue = playerValue;
               }
            }
            else{
                this.invitedPlayers.push({name,age,playerValue});
            }
            if(!result.includes(name)){
                result.push(name);
            }
        }
        return `You successfully invite ${result.join(', ')}.`;
    }
    signContract(selectedPlayer){
        let name = selectedPlayer.split("/")[0];
        let offer = Number(selectedPlayer.split("/")[1]);
        if(this.invitedPlayers.findIndex(x=>x.name === name)===-1){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        else{
            if(this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].playerValue>offer){
                throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].playerValue - offer} million more are needed to sign the contract!`);
            }
            this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].playerValue = 'Bought';
            return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
        }

    }
    ageLimit(name, age){
        if(this.invitedPlayers.findIndex(x=>x.name === name)===-1){
            throw new Error(`${name} is not invited to the selection list!`)
        }
        if(this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].age<age){
            if( age - this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].age < 5){
                return `${name} will sign a contract for ${age - this.invitedPlayers[this.invitedPlayers.findIndex(x=>x.name === name)].age} years with ${this.clubName} in ${this.country}!`;
            }
            else{
                return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
            }
        }
        else{
            return `${name} is above age limit!`;
        }
    }
    transferWindowResult(){
        let string  = `Players list:${'\n'}`;
        this.invitedPlayers.sort((a,b)=>a.name.localeCompare(b.name));
        for(let i = 0; i<this.invitedPlayers.length; i++){
            if(i === this.invitedPlayers.length - 1){
                string+=`Player ${this.invitedPlayers[i].name}-${this.invitedPlayers[i].playerValue}`;
            }
            else{
                string+=`Player ${this.invitedPlayers[i].name}-${this.invitedPlayers[i].playerValue}${'\n'}`;
            }
        }
        return string;
    }
}
let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());

