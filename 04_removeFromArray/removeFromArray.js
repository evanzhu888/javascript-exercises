const removeFromArray = function(arr, ...args) {

    for (let i = 0; i < arr.length; i++) {
        for (const a of args) {
            if (a == arr[i] && typeof arr[i] == typeof a) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
