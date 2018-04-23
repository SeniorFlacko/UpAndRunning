$(function () {
    //TO-DO: Functions when document ready
    $(".contenido").html('Holi Crayoli !');
});
// let myfuction = value => alert(value/7);
// myfuction(22);
var Game = /** @class */ (function () {
    function Game() {
        this.userChoice = prompt("Do you choose rock, paper or scissors?");
    }
    Object.defineProperty(Game.prototype, "randomNumber", {
        get: function () {
            return Math.floor(Math.random() * 3) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "computerchoice", {
        get: function () {
            var choice;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Game.prototype, "userchoice", {
        get: function () {
            return this.userChoice;
        },
        enumerable: true,
        configurable: true
    });
    Game.prototype.play = function (userChoice, computerChoice) {
        if (userChoice === void 0) { userChoice = this.userchoice; }
        if (computerChoice === void 0) { computerChoice = this.computerchoice; }
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
    };
    Game.prototype.recursivo = function (n) {
        if (n === 4)
            return n;
        else
            return 2 * this.recursivo(n + 1);
    };
    return Game;
}());
var game = new Game();
console.log(game.play());
console.log(game.recursivo(2));
