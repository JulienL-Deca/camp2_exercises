// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");
const path = require("path");

const deleteFile = require("./02_delete_file");
const copyPaste = require("./03_copy_file");


function cutPaste(sourceFilename, targetFilename) {
  console.log("je copie");
  copyPaste(sourceFilename, targetFilename);
  console.log("j'ai copié | je delete");
  deleteFile(targetFilename);
  console.log("j'ai delete");
}

module.exports = cutPaste;
