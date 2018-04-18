let litersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters) {
  litersOfCoffee += numberOfLiters;
}

function consumeLitersOfCoffee(numberOfLiters){
  if (litersOfCoffee < numberOfLiters) {
    return false;
  } // si nous n'avons pas pu servir de café on sortira de la fonction donc après le if on peut continuer la suite de notre fonction i.e. servir du café
  litersOfCoffee -= numberOfLiters;
  return true;
}
/*
function getQuantity(){
  return litersOfCoffee;
}
*/
module.exports = {
  //litersOfCoffee: litersOfCoffee, si on exporte cette fonction la valeur de la fonction exporté sera instancié lors de l'appel du fichier (module.exports sera appelé).
  // donc il vaut mieux faire une fonction qui sera capable de nous afficher la quantité de café disponible
  // getQuantity: getQuantity,
  putLitersOfCoffee: putLitersOfCoffee,
  consumeLitersOfCoffee: consumeLitersOfCoffee
}
