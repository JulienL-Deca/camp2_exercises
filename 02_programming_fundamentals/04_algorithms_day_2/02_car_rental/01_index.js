const driver = {
  driverLicense: "B1",
  licenseIssued: new Date().getFullYear() - 10, // 10 years old license
  numberOfAccident: 0,
  bonus: 0.8,
};

// Write a function canRentACar:
// * Input: a driver
// * Output: a boolean if the driver can rent a car

function canRentACar(driver) {
  let booleanCanRentACar;
  if ((driver.driverLicense === "B" || driver.driverLicense === "B1" ) && (new Date().getFullYear() - driver.licenseIssued >=2 ) &&  (driver.numberOfAccident === 0 || driver.bonus >= 0.7 )) {
    booleanCanRentACar = true;
  } else {
    booleanCanRentACar = false;
  }

  return booleanCanRentACar;
}


// ⚠ Do not remove me ! It's for tests
// eslint-disable-next-line
module.exports = canRentACar
