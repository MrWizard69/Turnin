//Jordan Wilson
//8-1-13
//Wacky Functions

console.log("Let's play guess the number! :D");

var ranNum = Math.ceil(Math.random() * 10 + 1);
console.log(ranNum);


while(guess != ranNum){
    var guess = prompt("Guess a number between 1 and 10");
    if(guess < ranNum){
        console.log("Sorry, your guess is too low");
        guess = "";
    }
    else if(guess > ranNum){
        console.log("Sorry, your guess is too high");
        guess = "";
    }

}

