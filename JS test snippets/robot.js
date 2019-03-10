var money = prompt("How much money would you like to spend on milk?")
var costPerBottle = prompt("What is the price of milk today?")


function getMilk(money, costPerBottle) {   
      console.log("leaveHouse");
      console.log("moveToStore");

    console.log("The robot could buy " + calcBottles(money, costPerBottle) + " bottles of milk."); //using sub.function 1

      console.log("moveToHouse");
      console.log("enterHouse");

      return calcChange(money, costPerBottle);
    }


function calcBottles(startingMoney, costPerBottle) { //sub.function 1: number of bottles
    
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    console.log(numberOfBottles);
    return numberOfBottles;
}


function calcChange(startingAmount, costPerBottle) { //sub.function 2: change 
    var change = startingAmount % costPerBottle;

    return change;

}


console.log("I have returned with your " + calcBottles(money,costPerBottle) + " bottles and $" + getMilk(money,costPerBottle) + " in change."); 