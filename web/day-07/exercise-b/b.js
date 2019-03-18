function Player(name) {
    this.name = name;
    this.health = 100; 
    this.winstreak = 0; 
    this.attack = function(opponent) {
        opponent.health -= 10;
    };
}

var adam = new Player('Adam');
var matthew = new Player('Matthew');

Player.prototype.healthBoost = function() {
    this.health += 5;
}

random = 0; 
counter = 0; 

while (adam.health > 0 && matthew.health > 0) {
   
    counter++;
    random = Math.floor(Math.random() * 2); 
   
    if (random == 1) {
        adam.attack(matthew); 
        adam.winstreak++;
        matthew.winstreak = 0;
    } else { 
        matthew.attack(adam);
        matthew.winstreak++;
        adam.winstreak = 0;
    }

    if (adam.winstreak == 3) adam.healthBoost();
    if (matthew.winstreak == 3) matthew.healthBoost();

    console.log(adam.health);
}

var winner;

if (adam.health == 0) winner = matthew;
else winner = adam;

console.log(winner.name + " won the fight.  He had " + winner.health + " points left. There were " + counter + " total fights.");


