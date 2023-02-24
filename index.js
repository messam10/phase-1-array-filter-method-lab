const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const objDrivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburgh'
    },
    {
        name: 'Sammy',
        hometown: 'New York'
    },
    {
        name: 'Sally',
        hometown: 'Cleveland'
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles'
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(drivers, name) {
    return drivers.filter((driver) => driver.toUpperCase() === name.toUpperCase());
}
function fuzzyMatch(drivers, char) {
    return drivers.filter(name => name.startsWith(char));
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}

console.log(findMatching(drivers, "Bobby"));
console.log(findMatching(drivers, "Sammy"));
console.log(findMatching(drivers, "Susan"));
console.log(fuzzyMatch(drivers, "Sa"));
console.log(fuzzyMatch(drivers, "y"));
console.log(fuzzyMatch(drivers, "mm"));
console.log(matchName(objDrivers, "Bobby"));