//Jordan Wilson
//8-1-13
//Functions Industry

var houseL = prompt("So you want to build a house? What is the length in yards?"); // a prompt that asks the length of a house

if(houseL == ""){
    console.log("You no types nothing in!"); //if the stupid user forgets to put anything in
}
else{
    var houseW = prompt("What is the Width of this house in yards?");
}
if(houseW == ""){
    console.log("You no types nothing in!");
}
else{
    var houseH = prompt("So what is height of that house in yards?");
}

if(houseH == ""){
    console.log("You no types nothing in!");
}
else{
    var volume = function(a,b,c){
        var vol = a * b * c;
        return vol;
    }
}

console.log("The volume of your new house is " + volume(houseL, houseW, houseH) + " yards");

var expectations = prompt("Is this result what you expected?");

expectations == 'yes' ? console.log("Very good! :D") : console.log("I'll take that as a no...");
