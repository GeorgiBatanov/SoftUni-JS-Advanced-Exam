class footballTeam{

    constructor(clubName, country){
        this.clubName = clubName;
        this.country = country;
        this.invitedPlayers = [];
    }
    
    newAdditions(footballPlayers){
        let StringToReturn = "You successfully invite ";
        for (let Player of footballPlayers){
            let Elements = Player.split('/');
            let Name = Elements[0];
            let Age = Elements[1];
            let Value = Elements[2];
            let CurrentPlayer = {
                Name,
                Age,
                Value,
            }
            let ExistingPlayer = this.invitedPlayers.find(Player => Player.Name === Name)
            if (!ExistingPlayer){
                this.invitedPlayers.push(CurrentPlayer);
                StringToReturn += `${CurrentPlayer.Name}, `;
            }
            else {
                if (ExistingPlayer.Value <= CurrentPlayer.Value){
                ExistingPlayer.Value = CurrentPlayer.Value;
                }
            }

        }
        StringToReturn = StringToReturn.substring(0,StringToReturn.length - 2)
        StringToReturn += ".";
        return StringToReturn;
    }
    signContract(selectedPlayer){
        let Elements = selectedPlayer.split('/');
        let Name = Elements[0];
        let Playeroffer = Elements[1];
        let ExistingPlayer = this.invitedPlayers.find(Player => Player.Name === Name)
        if (!ExistingPlayer){
            throw new Error(`${Name} is not invited to the selection list!`)
        }
        if (Playeroffer < ExistingPlayer.Value){
            throw new Error(`The manager's offer is not enough to sign a contract with ${Name}, ${Playeroffer - ExistingPlayer.Value} million more are needed to sign the contract!`)
        }
        ExistingPlayer.Value = "Bought"
        return `Congratulations! You sign a contract with ${ExistingPlayer.Name} for ${Playeroffer} million dollars.`
    }
    ageLimit(Name, Age) {
        let ExistingPlayer = this.invitedPlayers.find(Player => Player.Name === Name)
        if (!ExistingPlayer){
            throw new Error(`${Name} is not invited to the selection list!`)
        }
        if (ExistingPlayer.Age < Age){
            if (Age - ExistingPlayer.Age < 5){
                return `${Name} will sign a contract for ${Age - ExistingPlayer.Age} years with ${this.clubName} in ${this.country}!`
            }
            else{
                return `${Name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
            }
        }
        else{
            return `${Name} is above age limit!`
        }
    }
    transferWindowResult(){
        let StringToReturn = "Players list:\n";
        this.invitedPlayers.forEach(Player => StringToReturn += `Player ${Player.Name}-${Player.Value}\n`)
        StringToReturn = StringToReturn.substring(0,StringToReturn.length - 1)
        return StringToReturn;
    }
}