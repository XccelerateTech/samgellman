function isPangram (string) {
var letters ="abcdefghijklmnopqrstuvwxyz";
var string = string.toLowerCase().replace(/[^a-z]/g,"");
console.log(string);
console.log(letters);
var i = 0;
var count = 0;
for (i=0;i<string.length;i++){
    //let currentLetter = string[i];
    console.log(string.indexOf(letters[i]));
    if (string.indexOf(letters[i])>=0){
        count++;
    }else {
        continue;
        }
    }
    console.log(letters);
    if (count==26){
    return true;
    }
    else{
    return false;
    }
};

isPangram('happy dogs always run around and NEVER like to go home')