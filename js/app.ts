declare var jQuery:any;
declare var $:any;

$(function() {
    //TO-DO: Functions when document ready
    $(".contenido").html('Holi Crayoli !');
});

// let myfuction = value => alert(value/7);
// myfuction(22);

class Game{
    userChoice:string;

    constructor(){
        this.userChoice = prompt("Do you choose rock, paper or scissors?");
    }

    get randomNumber(){
        return Math.floor( Math.random() * 3 ) + 1;
    }

    get computerchoice(){
        let choice: string;
        switch (this.randomNumber) {

            case 1:
                choice = 'rock';
                break;

            case 2:
                choice = 'papper';
                break;

            case 3:
                choice = 'scissors';
                break;
        
            default:
                choice = '';
                break;
        }
        return choice;
    }

    get userchoice(){
        return this.userChoice;
    }

    play( userChoice: string = this.userchoice, computerChoice:string = this.computerchoice): string{
        console.log('Computer choose: ', computerChoice);
        
        if (userChoice === computerChoice)
            return "It's a tie!";
        
        if (userChoice === "rock") 
            if (computerChoice === "scissors")
                return "You win!";
            else
                return "You lose! Try again.";

        
        if (userChoice === "paper") 
            if (computerChoice === "rock") 
                return "You win!";
            else
                return "You lose! Try again.";
        
        if (userChoice === "scissors") 
            if (computerChoice === "rock")
                return "You lose! Try again.";
            else
                return "You win!";
    }

    recursivo(n:number):number{
        if(n===4)
            return n;
        else
            return 2*this.recursivo(n+1);
    }
}


let game = new Game();
console.log(game.play());
console.log(game.recursivo(2));