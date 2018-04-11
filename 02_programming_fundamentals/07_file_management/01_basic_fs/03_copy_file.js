// Add a function `copyPaste` which takes a `path` as input and remove the file
// if it's a file (do not remove a folder). We don't want to override a file if
// it already exists.
//
// The function returns a boolean indicating if it successfully removed the file.
const fs = require('fs');

function copyPaste(sourceFilename, targetFilename) {
  const { COPYFILE_EXCL } = fs.constants;

  if (fs.statSync(sourceFilename).isDirectory()) { //est un dossier return error
    console.warn("Source file is a directory");
  } else { //sinon je copie
    fs.copyFile(sourceFilename, targetFilename, COPYFILE_EXCL,(error) => {
    if (error){
      console.warn(error);
    }
  });
  }
}

module.exports = copyPaste;

/*
var fs = require("fs");
var path = "C:\\Python27\\ArcGIS10.2\\python.exe";

fs.stat(path, function(error, stats) {
  console.log(stats);
  console.log(stats.isFile());
  console.log(stats.isDirectory());
  console.log(stats.isBlockDevice());
  console.log(stats.isCharacterDevice());
  console.log(stats.isFIFO());
  console.log(stats.isSocket());
});

*/
