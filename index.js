const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// findMatching- This function takes an array of drivers' 
// names and a string as arguments, and returns the matching 
// list of drivers. The function should be case insensitive.

function findMatching(drivers, name) {
  return drivers.filter((item) => item.toLowerCase() === name.toLowerCase())
}
console.log(findMatching(drivers, "Bobby"))
//console.log(findMatching(drivers, "Bobby"))
