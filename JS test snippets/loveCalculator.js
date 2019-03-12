// Random number generator
//var n = Math.random();
//console.log(n)

//Dice roll generator
// var n = Math.random();
// n = n * 6
// n = Math.floor(n) + 1;
// console.log(n);

// Love generator
var name1 = prompt("What is the name of person 1?");
var name2 = prompt("What is the name of person 2?");

var n = Math.random() * 100;
n = Math.floor(n) + 1; // 1-100

if(n > 70) {
    alert(name1 + " and " + name2 + " are a " + n + " % match. True soulmates!");
} 

if(n >30 && n <= 70) {
    alert(name1 + " and " + name2 + " are a " + n + " % match. Opposites attract, right?");
}
if(n < 30) {
    alert(name1 + " and " + name2 + " are a " + n + " % match. Some people just aren't meant to be...");    
}
