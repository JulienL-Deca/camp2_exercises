// Using the file creation commands, create a touch function that mimics the behavior of the Unix command.
const fs = require("fs");

function touch(sourceFilename) {
  if (fs.existsSync(sourceFilename)) {
    // we modify its (Modification|Access|Change) date
    const nowTime = new Date();
    fs.utimes(sourceFilename, nowTime, nowTime, error => {
      if(error){
        console.warn(error);
        return;
      }
    });

  } else {
    // we create a file
    fs.open(sourceFilename, "w", (error, fileDescriptor) =>{
      if(error){
        console.warn(error);
        return;
      }
      else {
        fs.close(fileDescriptor, (error) => {
          console.warn(error);
        });
      }
    });
  }
}

module.exports = touch;
