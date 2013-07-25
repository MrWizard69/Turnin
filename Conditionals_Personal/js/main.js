// Jordan Wilson
// Personal conditions
// 7-25-13

var sprout1 = prompt("Say you are starting a new garden, how tall in cm is your new little sprout?"); //asks the user how tall your sprout is
var weeds = Math.floor(Math.random() * 10); // calcs random weed count

if(sprout1 == ""){
    console.log("I don't think you typed anything in..."); //checks if the user typed anything in
}
else{

    var sprout2 = prompt("At the end of the first month how tall in cm is your plant now?"); // asks the user how tall the sprout is at the end of month 1
}

function growth(a,b){
    var result = (b - a);
    console.log("Your plant grew " + result + "cm in one month"); // calcs the total growth in a function
}
growth(sprout1, sprout2);  // calls the growth function

console.log("During the middle of the second month, you noticed " + weeds + " weeds growing..."); // displays how many weeds have appeared

if(weeds <= 4){
    console.log("Your plant is now " + (sprout2 + weeds) + "cm tall and all weeds are dead!"); //if the weeds <= 4 we add sprout2 with the total number of weeds
}
else if(weeds > 4 && weeds <= 6){
    console.log("It would be a good idea to unearth those weeds"); // if the weeds is > 4 and <= 6 then you are asked if you want to pick the weeds
    var weedpker = prompt("Do you wish to pick those weeds? 1 = yes, 0 = no");

    if(weedpker == 1){
        console.log("You picked all the weeds and saved your plant!"); // if the user says yes(1) then you save your plant
    }
    else if(weedpker == 0){
        console.log("You lazy sap! The weeds have invaded your plants personal space!"); // if the user says no(0) then you kill your plant
    }
    else if(weedpker ==""){
        console.log("You typed nothing in!"); // if the user types nothing in...
    }
}
else{
    console.log("Due to your poor gardening practices, your plant is now dead!"); // if the weeds is > 6 you kill your plant
}



