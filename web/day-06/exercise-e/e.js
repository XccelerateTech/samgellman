const uefaEuro2016 = (teams, score) => {
    let introString = 'At match ' + teams[0] + ' - ' + teams[1] + ', '
    if (score[0] == score[1]) {
        return introString + 'teams played a draw.'
    } else {
        if (score[0] > score[1]) {
            return introString + teams[0] + ' won!'
        } else return introString + teams[1] + ' won!' 
    }
}

console.log(uefaEuro2016(['Germany', 'Ukraine'],[2, 0])); // "At match Germany - Ukraine, Germany won!"
console.log(uefaEuro2016(['Belgium', 'Italy'],[0, 2])); // "At match Belgium - Italy, Italy won!"
console.log(uefaEuro2016(['Portugal', 'Iceland'],[1, 1])); // "At match Portugal - Iceland, teams played draw."