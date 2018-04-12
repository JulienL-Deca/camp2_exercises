// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"
const path = require("path");

function pwd (){
  return  path.resolve() ;
}
module.exports = pwd;
