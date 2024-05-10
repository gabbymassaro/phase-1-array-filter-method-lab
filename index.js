//const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

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




function fuzzyMatch() {

}

function matchName() {

}