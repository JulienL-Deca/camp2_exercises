// ## A Rectangle of 10 by 10
//
// ```
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```

for (let j = 1; j <= 10; j++) {
  let ligneEtoile = "";
  for (let i = 1; i <= 10; i++) {
    ligneEtoile = ligneEtoile+"*";
  }
  console.log(ligneEtoile);
}
