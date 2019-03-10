//buy number of bottles
    function getMilk(bottles) {   
      console.log("leaveHouse");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
      console.log("moveRight");
      console.log("buy " + bottles + " bottles of milk");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("enterHouse");
    }

     getMilk(12)



    //How many bottles can $10 buy at price $1.5

    var milkPrice = 1.5;

    function getMilk(money) {   
      console.log("leaveHouse");
      console.log("moveRight");
      console.log("moveRight");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveUp");
      console.log("moveRight");
      console.log("moveRight");

   var numberOfBottles = Math.floor(money / milkPrice);

      console.log("The robot could buy " + numberOfBottles + " bottles of milk for the provided $" + money + ".");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveDown");
      console.log("moveLeft");
      console.log("moveLeft");
      console.log("enterHouse");
    }

    getMilk(5)

