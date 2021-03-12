const reverseString = (s) => {
    if (typeof s !== 'string') {
        return 'Please input a string';
    }
    return !s.length ? '' : s.split("").reverse().join("");
}

module.exports = reverseString;