//Jordan Wilson
//8-1-13
//Functions Industry

var houseL = prompt("So you want to build a house? What is the length in yards?");

if(houseL == ""){
    console.log("You no types nothing in!");
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


