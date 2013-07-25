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
    var result = b - a;
    return result()
}
console.log(growth(sprout1,sprout2))



