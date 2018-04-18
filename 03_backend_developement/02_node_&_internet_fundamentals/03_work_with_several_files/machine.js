// See Sparta courses for the exercise summary
const container = require("./container")

const machine = {
  expressoLength: 0.08,
  longCoffeeLength: 0.15,

  expresso: function(){
    return container.consumeLitersOfCoffee(this.expressoLength);
  },

  longCoffee: function(){
    return container.consumeLitersOfCoffee(this.longCoffeeLength);
  },

  fillWithLitersOfCoffee: function(nbLitersToFill ) {
    container.putLitersOfCoffee(nbLitersToFill);
  }
};

module.exports = machine;
