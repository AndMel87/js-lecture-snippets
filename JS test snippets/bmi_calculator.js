//BMI Calculator

var weight = prompt("What is your current weight in KGs?");
var height = prompt("What is your current height in meters? (E.g. 1.65)");

function bmiCalculator(weight,height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

var bmi = bmiCalculator(weight,height);

alert("Your BMI is " + bmi + ". Normal weight BMI = 18.5 – 24.9.");
