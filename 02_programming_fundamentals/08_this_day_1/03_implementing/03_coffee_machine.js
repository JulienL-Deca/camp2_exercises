// See Sparta courses for the exercise summary

const machine = {
  litersOfCoffee: 0,
  expressoLength: 0.08,
  longCoffeeLength: 0.15,

  expresso: function () {
    //si assez de café j'enlève 0.08 de café au réservoir et je renvoi true
    if (this.litersOfCoffee >= this.expressoLength) {
      this.litersOfCoffee -= this.expressoLength;
      return  true;
    } else {
      return false;
    }
  },

  longCoffee: function() {
    //si assez de café j'enlève 0.15 de café au réservoir et je renvoi true
    if (this.litersOfCoffee >= this.longCoffeeLength) {
      this.litersOfCoffee -= this.longCoffeeLength;
      return  true;
    } else {
      return false;
    }
  },

  fillWithLitersOfCoffee: function(nbLitersToFill ) {
    //modifie la quantité de café disponible
    this.litersOfCoffee += nbLitersToFill  ;
  }
};

// Coffee Machine usage. Insert your code above this comment

/*
machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true ==> 0.08
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true ==> 0.15
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false
*/
module.exports = machine;
