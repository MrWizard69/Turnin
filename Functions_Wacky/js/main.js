//Jordan Wilson
//8-1-13
//Wacky Functions

console.log("Let's play guess the number! :D"); //a game! guess the number! YAAAAYYY!

var ranNum = Math.ceil(Math.random() * 10 + 1); //the random number the user must guess
//console.log(ranNum); //this displays the random number. It helped me see if I was doing this right...


while(guess != ranNum){// while the users input doesn't equal the random number...
    var guess = prompt("Guess a number between 1 and 10"); // gets the users input
    if(guess < ranNum){// if the users guess is less than the random number
        console.log("Sorry, your guess is too low"); //the user gets a message telling them that they guessed too low
        guess = ""; //clears the guess variable
    }
    else if(guess > ranNum){
        console.log("Sorry, your guess is too high");
        guess = "";
    }
    else if(guess == ranNum){
        console.log("You got it!!!");
        break;
    }
}

