// Jordan Wilson
// Industry Conditions
// 7-25-13

var proj = prompt("You are working on a project that is expected to take X hours. How many hours?"); //asks how many hours a project will take

if(proj == ""){
    console.log("You didn't type anything in dummy!");
}
else{
    var hours = prompt("How many hours at a time do you plan on working on it?");
}

if(hours == ""){
    console.log("You no typed nothin in!");
}
else{
    function time(a,b){
        var result = a/b;
        console.log("At your current rate it should take you " + result + " hours");
        (result >= 24) ? console.log("Looks like it will take you a day or more") : console.log("It shouldn't take you too long =]");
    }
}

time(proj, hours);


