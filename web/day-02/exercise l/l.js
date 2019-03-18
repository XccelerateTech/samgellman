function countChar(word, char) {
    word = word.toUpperCase();
    char = char.toUpperCase();
    var letters = word.split('');
    var counter = 0;
    for (i = 0; i < letters.length; i++) {
        if (letters[i] == char) {
            counter++;
        }
    }
    return counter;
}

result = countChar("Happy People? Perfect!", 'p');
console.log(result);