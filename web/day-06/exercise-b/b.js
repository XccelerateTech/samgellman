const reverse = (input) => {
    
    let inputString = input.toString();
    let reverseString = [];

    for (i = inputString.length - 1; i >= 0; i--) {
        reverseString.push(inputString[i]);
    }

    return reverseString;
}


let input = 54321;
let output = reverse(input);

console.log("Your input was " + input);
console.log("Your output was " + output);
