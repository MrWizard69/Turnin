//Jordan Wilson
//Wacky Conditionals
//7-24-13

var dist = prompt("In minecraft, your safe house is how many blocks away?");
var creeper = Math.floor((Math.random() * 5));

if(dist == ""){
    console.log("TYPE SOMETHING!!!");
}
else{
    var aday = prompt("How many blocks can you travel a day?");
}

if(aday == ""){
    console.log("No information for you!");
}
else{
    console.log("Your tavels should take " + (dist/aday) +" game days");
}

console.log("On your way to your safe house, you got jumped by " + creeper + " creepers!!!");

var creepSlayer = prompt("So... do you stand your ground or break in your new shoes? 1 = fight! 0 = run run run!");

if(creeper >= 2 && creepSlayer == 1){
    console.log("You managed to fight one off but the others surrounded you and gave you a creeper hug...");
}
else if(creeper >= 2 && creepSlayer == 0){
    console.log("You almost got away! But you ran into a random ditch you didn't see ahead and fell into lava, losing everything you had!");
}
else if(creeper < 2 && creepSlayer == 1){
    console.log("A glorious battle! You escape with honor!");
}
else if(creeper < 2 && creepSlayer == 0){
    console.log("You out ran the creeper! :D");
}
else if(creeper == 0 && creepSlayer == 1){
    console.log("What are you fighting??... Weirdo... Keep walking home and don't talk to strangers.");
}
else if(creeper == 0 && creepSlayer == 0){}

