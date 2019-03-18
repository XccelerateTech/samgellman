function multiplyNumber(input) {
    if(isNaN(input) || input <= 0) {
        throw new Error('Please enter a number greater than 0');
    }
    while (input < max_number) {
        input = input * 10;
    }
    return input;
}

var max_number = 1000000;
var input = 5; 
var output = multiplyNumber(input);

if (output instanceof Error) {
    console.log(input + ' as an input returns an Error');
} else {
    console.log(input + ' as an input returns ' + output + ' as an output');
}