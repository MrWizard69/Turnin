//Jordan Wilson
//8-1-13
//Functions- Personal

var tree1 = prompt("You find two trees in the forrest. You want to see which tree is older. What is the diameter of the first tree in inches?");

if(tree1 == ""){
    console.log("Type something in!");
}
else{

    var tree2 = prompt("What is the diameter of the second tree in inches?");
}

if(tree2 == ""){
    console.log("Type something in!");
}
else{
    var treeH1 = prompt("How tall is the first tree in feet?");
}

if(treeH1 == ""){
    console.log("Type something in!");
}
else{
    var treeH2 = prompt("How tall is the second tree in feet?");
}

function treeRings(a,b,h1,h2,re){
    if(h1 > h2){
        console.log("The first tree is the tallest");
    }
    else if(h1 < h2){
        console.log("the second tree is the tallest");
    }
    else if(h1 == h2){
        console.log("The two trees seem to be about the same height");
    }
    if(a > b){
        re = console.log("The first tree is " + (a - b) + "in. wider");
        return re;
    }
    else if(a < b){
        re = console.log("The second tree is " + (b - a) + " in. wider");
        return re;
    }
    else if(a == b){
        re = console.log("The two trees are equally round");
        return re;
    }

}
var result = "";
var diameter = treeRings(tree1, tree2, treeH1, treeH2, result);

console.log(diameter);

