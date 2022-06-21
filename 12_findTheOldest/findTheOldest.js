const findTheOldest = function(arr) {
    let j = 0;
    let maxAge = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i].yearOfDeath) {
            arr[i].yearOfDeath = 2022;
        }
        if (arr[i].yearOfDeath - arr[i].yearOfBirth > maxAge) {
            j = i;
            maxAge = arr[i].yearOfDeath - arr[i].yearOfBirth;
        }
    }

    return arr[j];

};

// Do not edit below this line
module.exports = findTheOldest;
