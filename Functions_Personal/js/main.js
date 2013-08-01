//Jordan Wilson
//8-1-13
//Functions- Personal

var tree1 = prompt("You find two trees in the forrest. You want to see which tree is older. What is the radius of the first tree in inches?");// a prompt asking you how wide the first tree is

if(tree1 == ""){
    console.log("Type something in!"); //if the user types nothing in
}
else{

    var tree2 = prompt("What is the radius of the second tree in inches?");//asks the user for the radius of the second tree
}

if(tree2 == ""){
    console.log("Type something in!");// if the user types nothing in
}
else{
    var treeH1 = prompt("How tall is the first tree in feet?"); // asks the user how tall the first tree is
}

if(treeH1 == ""){
    console.log("Type something in!"); //if the user types nothing in
}
else{
    var treeH2 = prompt("How tall is the second tree in feet?"); //asks how tall the second tree is
}

function treeRings(a,b,h1,h2,re){ // a function called treeRings
    if(h1 > h2){
        console.log("The first tree is the tallest"); //compares if the first tree is taller than the second
    }
    else if(h1 < h2){
        console.log("the second tree is the tallest"); //compares if the second tree is taller than the first
    }
    else if(h1 == h2){
        console.log("The two trees seem to be about the same height"); //if the two trees are equally tall
    }
    if(a > b){
        re = console.log("The first tree is " + (a - b) + "in. wider"); // compares to see if the first tree is wider than the second and calcs the difference
        return re; //returns the results
    }
    else if(a < b){
        re = console.log("The second tree is " + (b - a) + " in. wider");// compares to see if the second tree is wider than the first and calcs the difference
        return re; //returns the result
    }
    else if(a == b){
        re = console.log("The two trees are equally round");
        return re;
    }

}
var result = "";
var diameter = treeRings(tree1, tree2, treeH1, treeH2, result);

console.log(diameter);

