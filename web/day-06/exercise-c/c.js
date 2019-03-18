var players = [
    {name: "Lionel Messi", club: "FC Barcelona"},
    {name: "Christiano Ronaldo", club: "Real Madrid"},
    {name: "Luis Suarez", club: "FC Barcelona"},
    {name: "Gareth Bale", club: "Real Madrid"},
    {name: "Manuel Neuer", club: "FC Bayern Munchen"}
]

var nonBarca = players.filter(function(player) {
    return player.club != 'FC Barcelona';
})

var playerNames = players.map(function(player) {
    return player.name;
});


console.log(nonBarca);
console.log(playerNames);