/*
Nos 4 étapes :
	0 state => initialiser les variables
	1 Display grid
	2 Handle Players, and turns and End (loop)
	3 Player input and update Cell from grid
*/
const nbLine = 3;
const nbColumn = 3;
const listOfValidCell = [ "00", "01", "02", "10", "11", "12", "20", "21", "22", "q", "quit" ];
let grid = [];
let namePlayer1 = "Mike";
const symbolPlayer1 = "X";
const symbolPlayer2 = "O";
let namePlayer2 = "Tyson";
let whoToPlay = namePlayer1;
let symbolWhoToPlay = symbolPlayer1;
let weHaveAWinner = false;
let winnerIs = "";

const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function initGrid(nbLine,letClignelumn){
  for (let ligne = 0; ligne < nbLine; ligne++) {
    grid[ligne] = [];
    for (let column = 0; column < nbColumn; column++) {
      grid[ligne].push("_"); //`l${ligne}c${column}`
    }
  }
}
function displayGrid(gridToDisplay){
  console.log(`  0 1 2`);
  gridToDisplay.forEach((element, index) => {
    console.log(`${index} ${element.join(" ")}`);
  })
  console.log("");
}
function changeWhoToPlay(){
  if (whoToPlay === namePlayer1) {
    whoToPlay = namePlayer2;
    symbolWhoToPlay = symbolPlayer2;
  } else {
    whoToPlay = namePlayer1;
    symbolWhoToPlay = symbolPlayer1;
  }
}
function nextToPlay(){
  return `${whoToPlay}(${symbolWhoToPlay}) : give me a cell ? (Ligne Column === 01)\n`;
}
function welcomeMessage(){
  console.log("");
  console.log(`Welcome players : ${namePlayer1}(${symbolPlayer1}) & ${namePlayer2}(${symbolPlayer2})`);
  console.log(`Are you ready to play ?\nHere is the grid ...\n`);
}
function endOfGameGoodBye() {
  if (weHaveAWinner) {
    console.log(`\n..... and the winner is: ${winnerIs} ! Congratulation :-)\n`);
  } else {
    console.log(`\nSorry no one win this time :-( \n`);
  }
}
function putAMarkOnACell(cellToMark){
  grid[cellToMark[0]][cellToMark[1]] = symbolWhoToPlay;
}
function isCellFree(cellToTest) {
  cell = grid[cellToTest[0]][cellToTest[1]];
  if ( cell === "_") {
    return true;
  } else {
    console.log(`the cell ${cellToTest} has already been marked!`)
    return false;
  }
}
function isAValidCell(cellNbGiven){
  return listOfValidCell.includes(cellNbGiven);
}
function doWeHaveAWinner(symbolActualPlayer){
  if (columnWin(symbolActualPlayer) || lineWin(symbolActualPlayer) || diagonalWin(symbolActualPlayer)) {
    weHaveAWinner = true;
    winner = whoToPlay;
  } else {
    weHaveAWinner = false;
  }
}
function columnWin(symbolActualPlayer){
  return false;
}
function lineWin(symbolActualPlayer){
  return false;
}
function diagonalWin(symbolActualPlayer){
  return false;
}
function isGridFull(){
    if (grid.map(array => array.includes("_")).includes(true)) { // does my grid contain "_" somewhere
      return false;
    } else {
      return true;
    }
}
function recurseGetInPutFromPlayer(messageToDisplay){
  reader.question(messageToDisplay, suppliedInput => {
    if (!isAValidCell(suppliedInput)) {
      console.log(`/!\\ not a valid cell: ${suppliedInput}`);
      recurseGetInPutFromPlayer(nextToPlay());
    }
    else if (isGridFull() || weHaveAWinner || suppliedInput === "q" || suppliedInput === "quit") {
      endOfGameGoodBye();
      reader.close();
      return ;
    }else if (isCellFree(suppliedInput)) {
      putAMarkOnACell(suppliedInput);
      //check if the move make the current player win
      //if yes mark weHaveAWinner=yes & winner=whoToPlay
      if (doWeHaveAWinner(whoToPlay) || isGridFull()) {
        endOfGameGoodBye();
        displayGrid();
        reader.close();
        return ;
      } else {
        changeWhoToPlay();
        displayGrid(grid);
        recurseGetInPutFromPlayer(nextToPlay());
      }

    }
    recurseGetInPutFromPlayer(nextToPlay());
  });
}
function start(){
  initGrid(nbLine, nbColumn);
  welcomeMessage();
  displayGrid(grid);
  recurseGetInPutFromPlayer(nextToPlay());
}

start();
