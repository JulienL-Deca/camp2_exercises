// Cmd-X/Cmd-V as a function
//
// Implement the function cutPaste(sourceFilename, targetFilename)
const fs = require("fs");
const path = require("path");

const deleteFile = require("./02_delete_file");
const copyPaste = require("./03_copy_file");


function cutPaste(sourceFilename, targetFilename) {
  if (fs.existsSync(targetFilename)) {
    console.warn("Target name already exist");
  } else if (fs.existsSync(sourceFilename)) {
    copyPaste(sourceFilename, targetFilename);
    deleteFile(sourceFilename);
  } else {
    console.warn("Source name does not exist");
  }
}

module.exports = cutPaste;
