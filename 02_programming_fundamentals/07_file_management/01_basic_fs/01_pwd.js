// Add a function `pwd` which takes no arguments and return the current folder name we are in
//
// Example
//
// pwd() # => "/Users/john/Workspace/my_folder"

function pwd (){
  return process.cwd();
}
console.log(pwd());
module.exports = pwd;
