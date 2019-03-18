let suits = ['spades', 'hearts', 'clubs', 'diamonds'];
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10, 11, 12, 13];
let deck = [];
let bucket = []

for (i = 0; i < 52; i++) {
    bucket.push(i);
}

for (i = 0; i < suits.length; i++) {
    for (j = 0; j < number.length; j++) {
        card = [];
        card[0] = suits[i];
        card[1] = number[j];
        deck.push(card);
    }
}

//card_count = Math.floor(Math.random() * 4) + 1;

card_count = 4;

if (card_count == 1) {console.log("Your hand has " + card_count + " card.");}
else {console.log("Your hand has " + card_count + " cards.");}


my_hand = [];
number_array = [0,0,0,0,0,0,0,0,0,0,0,0,0];

for (i = 0; i < card_count; i++) {
    random = Math.floor(Math.random() * (52 - i));
    my_hand[i] = deck[random];
    number_array[deck[random][1]-1]++;
    deck.splice(random, 1);
}


console.log(number_array);
let three_of_a_kind = 0;
let pair = 0;
let two_pair = 0;
let total_pairs = 0;


let max_occurence = Math.max(...number_array);

if(max_occurence === 2 && card_count == 4) {

    for (i = 0; i < 13; i++) {
        if (number_array[i] === 2) {
            total_pairs++;
        }
    }
}


if (max_occurence === 3) { 
    toak = 1; 
}

if (max_occurence === 2) {
    if (total_pairs === 2) {
        two_pair = 1;
    } else {
        pair = 1;
    }
}

console.log(my_hand);
console.log(pair + " we do or don't have a pair");
console.log(three_of_a_kind + " we do or don't have three of a kind");
console.log(two_pair + " we do or don't have a two-pair");




/*
if (card_count == 2) {
    if (card_numbers[0] == card_numbers[1]) {
        pair = 1;
    }
}

if (card_count == 3) {
    if (card_numbers[1] === card_numbers[2]) {
        if (card_numbers[2] === card_numbers[3]) {
            toak = 1;
        } else {
            pair = 1;
        }
    } else {
        if (card_numbers[2] === card_numbers[3]) {
            pair = 1;
        }
    }
}




/*
for (i = card_count; i >= 2; i--) { 
    if(card_numbers[card_count - 1] === card_numbers[card_count - 2]) {
        if (i === 2) {
            pair = 1;
        } else {
            if (card_numbers[card_count - 3] === card_numbers[card_count -1]) {
                toak = 1;
            } else {
                if (i === 3) {
                    pair = 1;
                    break;
                } else {
                    if (card_numbers[card_count - 4] === card_numbers[card_count - 3]) {
                        two_pair = 1;
                    } else {
                        pair = 1;
                        break;
                    }
                }
            }
        }
    }
}*/

