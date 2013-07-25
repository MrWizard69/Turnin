// Jordan Wilson
// Industry Conditions
// 7-25-13

var proj = prompt("You are working on a project that is expected to take X hours. How many hours?"); //asks how many hours a project will take

if(proj == ""){
    console.log("You didn't type anything in dummy!"); // if the silly user didn't type anything in...
}
else{
    var hours = prompt("How many hours at a time do you plan on working on it?"); // asks the user how many hours at a time they will work on it
}

if(hours == ""){
    console.log("You no typed nothin in!"); // again... if the silly user no types nothing in...
}
else{
    function time(a,b){
        var result = a/b; // a function that divides the project hours by the work hours
        console.log("At your current rate it should take you " + result + " hours");
        (result >= 24) ? console.log("Looks like it will take you a day or more") : console.log("It shouldn't take you too long =]");
    }
}

time(proj, hours);


