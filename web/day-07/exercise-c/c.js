function Gambler (id, cash, bet, odds) {
    this.id = id; 
    this.cash = cash; 
    this.bet = bet;
    this.odds = odds;
    this.games = 0;

    this.gamble = function gamble() {
        let random = Math.random();
        this.games++;
        if (random <= this.odds) {
            cash += bet;
            console.log("Gambler " + this.id + " just won!  His bankroll is now " + this.cash + " dingleberries." )
        } else {
            this.cash -= this.bet;
            console.log("Gambler " + this.id + " just lost!  His bankroll is now " + this.cash + " dingleberries." )
        }
    }

    this.bankrupt = function bankrupt() {
        if (this.cash <= 0) {
            console.log("Hot Damn! " + this.id + " ran out of money!  He played a total of " + this.games + " games!");
            return true;
        } else return false;
    }

}




gamblers = [];
gambler_count = 10;
starting_cash = 100;
bet_amount = 10;
odds = 0.4;
odds_increment = 0.02;

counter = 0;

for (var i = 0; i < gambler_count; i++) {
    gamblers[i] = new Gambler(i, starting_cash, bet_amount, odds + i * odds_increment);
}

var bool = true
while (bool) {
    for (var i = 0; i < gambler_count; i++) {
        gamblers[i].gamble();
        if (gamblers[i].bankrupt()) bool = false;
    }
    console.log(' ');
}


