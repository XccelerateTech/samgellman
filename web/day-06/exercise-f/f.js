const transform = (string) => {

    let dictionary = ['j', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
    let numberArray = [];
    let newString = ""; 

    for (i = 0; i < string.length; i++) {
        numberArray.push(string[i]);
    }

    numberArray.sort();

    for (i = 0; i < string.length; i++) {
        newString += dictionary[Number(numberArray[i])];
    }

    return newString
}

let input = '1393803';
let output = transform(input);

console.log("Your input was " + input);
console.log("Your output was " + output);
