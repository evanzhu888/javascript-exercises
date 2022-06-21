const palindromes = function (str) {
    const string = Array.from(str).filter(char => (char != ' ' 
    && char != ',' && char != '.' && char != '!')).join("").toLowerCase();

    let i = 0;
    let j = string.length - 1;

    while (i < j) {
        if (string.charAt(i) != string.charAt(j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;

};

// Do not edit below this line
module.exports = palindromes;
