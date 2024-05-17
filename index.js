function findMatching(drivers, name) {
  return drivers.filter((item) => item.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name) {
  return drivers.filter((letter) => letter.charAt(0) === name.charAt(0))
}

function matchName(drivers, nameValue3) {
  return drivers.filter(match => match.name === nameValue3);
}