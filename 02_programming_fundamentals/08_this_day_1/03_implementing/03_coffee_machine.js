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
    this.litersOfCoffee += nbLitersToFill;
  }
};

module.exports = machine;
