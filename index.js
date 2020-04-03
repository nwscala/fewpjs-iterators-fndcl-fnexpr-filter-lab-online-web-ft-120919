// Code your solution here
function findMatching(driversArray, string) {
    return driversArray.filter(driverName => driverName.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(driversArray, string) {
    const myReg = new RegExp(`^${string}`, 'i')
    return driversArray.filter(driverName => myReg.test(driverName))
}

function matchName(driversObjectArray, string) {
    return driversObjectArray.filter(driversObject => driversObject.name === string)
}