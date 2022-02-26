const palindromes = function (string) {
    let onlyLowerCaseLettersString = string.match(/[^_\W]+/g).join("").toLowerCase();
    return onlyLowerCaseLettersString.split("").reverse().join("") === onlyLowerCaseLettersString;
};

// Do not edit below this line
module.exports = palindromes;
