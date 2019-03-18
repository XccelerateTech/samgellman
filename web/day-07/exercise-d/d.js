class Monster {
  
   constructor(option) {
        this.health = 100;
        this.name = option.name; 
   }
  
   wound(damage) {
        this.health -= damage; 
        if (this.health <= 0) console.log('monster dead');
    }

}

function attackMonster (opponent) {
    let damage = Math.floor(Math.random() * 16) + 5;
    opponent.wound(damage);
}


var jimbo = new Monster({ name: 'Jimbo the Monster' });
let counter = 0;

while (jimbo.health > 0) {
    counter++;
    attackMonster(jimbo);
}

console.log(jimbo.name + ' died after ' + counter +' total attacks. Happy!  Sad!');



