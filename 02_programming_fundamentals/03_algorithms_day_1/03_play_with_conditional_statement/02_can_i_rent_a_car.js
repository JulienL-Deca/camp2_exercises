// Do not pay attention to this line for the moment
const driverData = require("./.driver_data");

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenseIssued is an integer with the year it was issued (ex: 2001)
const licenseIssued = driverData.licenseIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar;

// Your code here:
if ((driverLicense === "B" || driverLicense === "B1") && (new Date().getFullYear() - licenseIssued >=2 ) &&  (numberOfAccident === 0 || bonus > 0.7 )) {
  canRentACar = true;
} else {
  canRentACar = false;
}
