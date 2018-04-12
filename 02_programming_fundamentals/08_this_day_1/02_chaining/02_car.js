// See Sparta courses for the exercise summary
/*
Create an object car with four functions:
start() will reset all the car data
changeSpeed(speed) will change the km/h speed of the car
drive(minutes) will make your car drive at the previously set speed for that amount of time in minutes
showDistance() will print the distance you drove as the number of kilometers
Take care to stock that data inside the object. For instance the code
car.start().changeSpeed(130).drive(42).showDistance();
should display 91 Km.
*/
const car = {
  driveAtSpeed: -1,
  driveForXMinutes: -1,
  globalDistance: -1,
  start: function() {
    this.driveAtSpeed = 0;
    this.driveForXMinutes = 0;
    this.globalDistance = 0;
    return this;
  },
  changeSpeed: function(newSpeed) {
    this.driveAtSpeed = newSpeed;
    return this;
  },
  drive: function(newDurationOfDrive) {
    this.driveForXMinutes = newDurationOfDrive;
    this.globalDistance += (this.driveForXMinutes / 60) * this.driveAtSpeed;
    return this;
  },
  showDistance: function() {
    console.log(`${this.globalDistance} Km`);
  }
};

module.exports = car;
