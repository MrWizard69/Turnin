// Jordan Wilson
// Personal conditions
// 7-25-13

var sprout1 = prompt("Say you are starting a new garden, how tall in cm is your new little sprout?");
var weeds = Math.floor(Math.random() * 10);

if(sprout1 == ""){
    console.log("I don't think you typed anything in...");
}
else{

    var sprout2 = prompt("At the end of the first month how tall in cm is your plant now?");
}

function growth(a,b){
    var result = (b - a);
    console.log("Your plant grew " + result + "cm in one month");
}
growth(sprout1, sprout2);

console.log("During the middle of the second month, you noticed " + weeds + " weeds growing...");

if(weeds <= 4){
    console.log("Your plant is now " + sprout2 * weeds + "cm tall and all weeds are dead!");
}
else if(weeds > 4 && weeds < 6){
    console.log("It would be a good idea to unearth those weeds");
    var weedpker = prompt("Do you wish to pick those weeds? 1 = yes, 0 = no");

    if(weedpker == 1){
        console.log("You picked all the weeds and saved your plant!");
    }
    else if(weedpker == 0){
        console.log("You lazy sap! The weeds have invaded your plants personal space!");
    }
}
else{
    console.log("Due to your poor gardening practices, your plant is now dead!");
}



