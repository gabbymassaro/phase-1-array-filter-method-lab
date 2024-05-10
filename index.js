function findMatching(drivers, nameValue1) {
  const listOfName = [];
  for (const name of drivers) {
    if (name.toLowerCase() === nameValue1.toLowerCase()) {
      listOfName.push(name);
    }
  }
  return listOfName;
}
console.log(findMatching(drivers, "Bobby"));

function fuzzyMatch(drivers, nameValue2) {
  const beginsWith = [];
  for (const name of drivers) {
    if (name.startsWith(nameValue2) === nameValue2.startsWith(nameValue2)) {
      beginsWith.push(name);
    }
  }
  return beginsWith;
}
console.log(fuzzyMatch(drivers, "S"));

function matchName(drivers, nameValue3) {
  return drivers.filter(match => match.name === nameValue3);
}
const matchingNames = matchName(drivers, "Bobby");
console.log(matchingNames); 