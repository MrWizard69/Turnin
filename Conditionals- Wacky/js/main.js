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
