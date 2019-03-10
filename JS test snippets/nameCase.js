//Always return first letter in upper case


var name = prompt("What is your name?");

//slice out the first letter and set to upper case
var nameFirstLetter = name.slice(0,1);
nameFirstLetter = nameFirstLetter.toUpperCase();

//the remaining letters are set to lower case regardless of input
name = name.toLowerCase();

//output
alert("Hello, " + nameFirstLetter + name.slice(1,name.length));