const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, value) {
  const listOfName = [];
  for (const name of drivers) {
    if (name.toLowerCase() === value.toLowerCase()) {
      listOfName.push(name);
    }
  }
  return listOfName;
}
console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, value2) {
  const beginsWith = [];
  for (const name of drivers) {
    if (name.startsWith(value2) === value2.startsWith(value2)) {
      beginsWith.push(name);
    }
  }
  return beginsWith;
}
console.log(fuzzyMatch(drivers, "S"));




function matchName() {

}